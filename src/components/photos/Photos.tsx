import * as React from 'react';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { shuffle, values } from 'lodash';
import injectSheet, { StyledComponentProps } from 'react-jss';
import Slider, { Settings } from 'react-slick';
import { ParallaxLayer } from 'react-spring';
import { EngagementPhotos } from '../../assets/photos/engagement/EngagementPhotos';
import { Photos } from '../../assets/photos/Photos';
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
export class PhotosComponent extends React.Component<IPhotoProps> {

    private engagementPhotos: IPhoto[] = [];

    public componentWillMount = (): void => {
        this.engagementPhotos = shuffle(values(EngagementPhotos));
    }

    public render(): JSX.Element {
        const classes: Record<PhotosClasses, string> = this.props.classes;

        const settings: Settings = {
            dots: false,
            infinite: true,
            variableWidth: true,
            centerMode: true,
            autoplay: true,
            pauseOnHover: true,
            autoplaySpeed: 1500,
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
            <div>
                <ParallaxLayer offset={1} speed={0.5}>
                    <img
                        alt='FlowerPic1'
                        src={Photos.FlowerPic3}
                        className={classes.FlowerPic3} />
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.5}>
                    <img
                        alt='FlowerPic1'
                        src={Photos.FlowerPic4}
                        className={classes.FlowerPic4} />
                </ParallaxLayer>
                <ParallaxLayer offset={1} style={{
                    display: 'flex',
                    justifyContent: 'center'
                }} speed={1}>
                    <div className={classes.Photos}>
                        <Slider {...settings}>
                            {this.engagementPhotos.map((photo: IPhoto, key: number) => {
                                return (
                                    <div key={key} style={{ height: '100%', width: photo.width }}>
                                        <img alt='Photo' src={photo.src} width={photo.width} />
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </ParallaxLayer>
            </div>
        );
    }
}

export const PhotosSlider: React.ComponentType<Pick<{}, never> & StyledComponentProps>
    = injectSheet(PhotosStyles)(PhotosComponent);
