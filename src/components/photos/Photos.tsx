import * as React from 'react';

// tslint:disable-next-line:no-import-side-effect
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
// tslint:disable-next-line:no-import-side-effect
import '../../../node_modules/slick-carousel/slick/slick.css';

import injectSheet, { StyledComponentProps } from 'react-jss';
import Slider, { Settings } from 'react-slick';
import { ParallaxLayer } from 'react-spring';
import { EngagementPhotos } from '../../assets/photos/engagement/EngagementPhotos';
import { Breakpoints } from '../../theme/Breakpoints';
import { PhotosClasses, PhotosStyles } from './PhotosStyles';

interface IPhoto {
    src: string;
    height: number;
    width: number;
}

interface IPhotoProps {
    classes: Record<PhotosClasses, string>;
}
/**
 * Photos Component
 */
export class PhotosComponent extends React.Component<IPhotoProps, {}> {

    public render(): JSX.Element {
        const classes: Record<PhotosClasses, string> = this.props.classes;

        const settings: Settings = {
            dots: false,
            infinite: true,
            variableWidth: true,
            centerMode: true,
            responsive: [
                {
                    breakpoint: Breakpoints.mobile,
                    settings: {
                        variableWidth: false,
                        centerMode: false
                    }
                }
            ]
        };

        return (
            <ParallaxLayer offset={1} style={{
                display: 'flex',
                justifyContent: 'center'
            }} speed={1}>
                <div className={classes.Photos}>
                    <Slider {...settings}>
                        {Object.keys(EngagementPhotos).map((photo: string, key: number) => {
                            const photoData: IPhoto = EngagementPhotos[photo];

                            return (
                                <div key={key} style={{ height: '100%', width: photoData.width }}>
                                    <img alt='Photo' src={photoData.src} width={photoData.width} />
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </ParallaxLayer>
        );
    }
}

export const Photos: React.ComponentType<Pick<{}, never> & StyledComponentProps>
    = injectSheet(PhotosStyles)(PhotosComponent);
