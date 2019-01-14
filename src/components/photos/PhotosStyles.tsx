import { Styles } from 'react-jss';

export type PhotosClasses =
    'Photos' |
    'FlowerPic3' |
    'FlowerPic4';

/**
 * The Styles for the Photos Component
 */
export const PhotosStyles: Styles<PhotosClasses> = {
    Photos: {
        width: '100%',
        alignSelf: 'center'
    },
    FlowerPic3: {
        width: 300,
        position: 'absolute',
        right: -50,
        top: -100
    },
    FlowerPic4: {
        width: 300,
        position: 'absolute',
        left: -50,
        bottom: -100
    }
};
