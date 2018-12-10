import * as React from 'react';

import injectSheet, { StyledComponentProps } from 'react-jss';
import Masonry from 'react-masonry-component';
import HorizontalScroll from 'react-scroll-horizontal';
import { ParallaxLayer } from 'react-spring';
import { EngagementPhotos } from '../../assets/photos/engagement/EngagementPhotos';

interface IPhoto {
    src: string;
    height: number;
    width: number;
}

const selectedPhotos: { [key: string]: number } = {
    SamanthaShawnEngagement58jpg: 0,
    SamanthaShawnEngagement8jpg: 1,
    SamanthaShawnEngagement57jpg: 2,
    SamanthaShawnEngagement82jpg: 3,
    SamanthaShawnEngagement87jpg: 4,
    SamanthaShawnEngagement97jpg: 5,
    SamanthaShawnEngagement71jpg: 6,
    SamanthaShawnEngagement69jpg: 7,
    SamanthaShawnEngagement62jpg: 8
};

/**
 * Photos Component
 */
export class PhotosComponent extends React.Component<{}> {

    public render(): JSX.Element {

        const photos: JSX.Element[] =
            Object.keys(selectedPhotos)
                .map((photo: string, key: number) => {
                    const photoData: IPhoto = EngagementPhotos[photo];

                    return <div key={key}
                        style={{ textAlign: 'center', height: photoData.height }}
                        className='image-element-class'>
                        <img
                            alt='photo'
                            style={{ display: 'block' }}
                            height={photoData.height}
                            src={EngagementPhotos[photo].src} />
                    </div>;
                });

        const masonryOptions: Masonry.MasonryOptions = {
            transitionDuration: 0,
            gutter: 0,
            columnWidth: 1,
            itemSelector: '.image-element-class',
            fitWidth: true
        };

        return (
            <ParallaxLayer offset={1} style={{ marginTop: 70 }} speed={1}>
                <Masonry key={0} style={{ margin: '0 auto' }} options={masonryOptions} >
                    {photos}
                </Masonry>
            </ParallaxLayer>
        );
    }
}

export const Photos: React.ComponentType<Pick<{}, never> & StyledComponentProps>
    = injectSheet({})(PhotosComponent);
