import * as React from 'react';

import injectSheet, { StyledComponentProps } from 'react-jss';
import { Carousel } from 'react-responsive-carousel';
import { ParallaxLayer } from 'react-spring';
// tslint:disable-next-line:no-import-side-effect
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
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
                        style={{ textAlign: 'center', width: photoData.width, maxWidth: '100%' }}>
                        <img
                            alt='photo'
                            style={{ display: 'block' }}
                            width={photoData.width}
                            height={photoData.height}
                            src={EngagementPhotos[photo].src} />
                    </div>;
                });

        return (
            <ParallaxLayer offset={1} style={{ marginTop: 70 }} speed={1}>
                <Carousel emulateTouch showThumbs={false} dynamicHeight>
                    {photos}
                </Carousel>
            </ParallaxLayer>
        );
    }
}

export const Photos: React.ComponentType<Pick<{}, never> & StyledComponentProps>
    = injectSheet({})(PhotosComponent);
