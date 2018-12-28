import * as React from 'react';

// tslint:disable-next-line:no-import-side-effect
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
// tslint:disable-next-line:no-import-side-effect
import '../../../node_modules/slick-carousel/slick/slick.css';

import injectSheet, { StyledComponentProps } from 'react-jss';
import Slider, { Settings } from 'react-slick';
import { ParallaxLayer } from 'react-spring';
import { EngagementPhotos } from '../../assets/photos/engagement/EngagementPhotos';

interface IPhoto {
    src: string;
    height: number;
    width: number;
}

/**
 * Photos Component
 */
export class PhotosComponent extends React.Component<{}> {

    public render(): JSX.Element {

        const settings: Settings = {
            dots: false,
            infinite: true,
            centerMode: true,
            variableWidth: true
            // adaptiveHeight: true,
            // focusOnSelect: true,
            // slidesToShow: 1,
            // slidesToScroll: 1
        };

        return (
            <ParallaxLayer offset={1} style={{
                display: 'flex',
                justifyContent: 'center'
            }} speed={1}>
                <div style={{ alignSelf: 'center', width: '100%' }}>
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
    = injectSheet({})(PhotosComponent);
