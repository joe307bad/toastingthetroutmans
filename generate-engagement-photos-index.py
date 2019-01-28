import os
from os.path import isfile, join
from PIL import Image

srcDir = "C:/Projects/ttt/src/assets/photos/engagement/"
engagementPhotos = [f for f in
                    os.listdir(srcDir)
                    if os.path.isfile(os.path.join(srcDir, f))
                    and (os.path.splitext(f)[1] == '.jpg'
                         or os.path.splitext(f)[1] == '.png')]
importStatements = ""
photosObject = """
    /**
     * Collection of engagement photos
     */
    export const EngagementPhotos: { [key: string]: {src: string; height: number; width: number } } = {"""

for photo in engagementPhotos:
    importStatements += """import * as {photoVar} from '{photoPath}';
    """.format(photoVar=photo
               .replace('_', '')
               .replace(' ', '')
               .replace('+', '')
               .replace('-', '')
               .replace('.', ''), photoPath="./" + photo)

numOfPhotos = len(engagementPhotos)
count = 0
for photo in engagementPhotos:
    count += 1
    filePath = srcDir + photo
    with Image.open(filePath) as img:
        width, height = img.size
        maxsize = (500 * width / height, 500)
        tn_image = img.thumbnail(maxsize, Image.ANTIALIAS)
        width, height = img.size
    photosObject += """
        {photoVar}: {{ src: {photoVar}, height: {height}, width: {width} }}{comma}""".format(photoVar=photo
        .replace(' ', '')
        .replace('_', '')
        .replace('+', '')
        .replace('-', '')
        .replace('.', ''), comma='' if count == numOfPhotos else ',', height=height, width=width)

photosObject += """
};
"""

with open(srcDir + "EngagementPhotos.tsx", 'w') as file:
    file.write(importStatements + photosObject)
