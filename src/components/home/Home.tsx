import { withTheme } from '@callstack/react-theme-provider';
import * as React from 'react';
import { ParallaxLayer } from 'react-spring';

import Radium from 'radium';
import { Photos } from '../../assets/photos/Photos';
import { ITheme, primary } from '../../theme';
import { Styles } from './Styles';
import { TParallaxElement } from './TParallaxElement';

interface IHomeProps {
    theme: ITheme;
}

// tslint:disable-next-line:no-any
const RadiumParallaxLayer: any = Radium(ParallaxLayer);

/**
 * Home Component
 */
class HomeComponent extends React.Component<IHomeProps, object> {
    public parallaxContainer: TParallaxElement;
    public render(): JSX.Element {
        return (
            <div>
                {/* <ParallaxLayer
                    offset={0}
                    speed={0}
                    style={{
                        display: 'flex',
                        paddingTop: '75px',
                        flexFlow: 'column wrap'
                    }}>
                    <img
                        alt='Sam and Shaun'
                        width={400}
                        style={{
                            alignSelf: 'center'
                        }}
                        src={Photos.samAndShaun} />
                    <p style={{
                        fontFamily: 'Imperator',
                        color: primary,
                        alignSelf: 'center',
                        fontSize: '25px',
                        textAlign: 'center'
                    }}>Friday, October 29th 2019<br />St. Margaret Mary Alacoque Church<br />Harrisburg, PA</p>
                </ParallaxLayer> */}
                {/* <RadiumParallaxLayer
                    offset={Styles.SamAndShaun_1_Landscape.parallaxOffset}
                    speed={0.5}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <img
                        alt='Sam and Shaun'
                        src={Photos.SamAndShaun_1_Landscape}
                        style={Styles.SamAndShaun_1_Landscape} />
                </RadiumParallaxLayer> */}
                <div style={Styles.SamAndShaun_1_Landscape}>
                    Hey there
                </div>
                {/* <ParallaxLayer
                    offset={Styles.SamAndShaun_3_Landscape.parallaxOffset}
                    speed={0.3}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <img
                        alt='Sam and Shaun'
                        src={Photos.SamAndShaun_3_Landscape}
                        style={Styles.SamAndShaun_3_Landscape} />
                </ParallaxLayer> */}
            </div>
        );
    }
}

export const Home: React.ComponentType<Pick<IHomeProps, never>>
    = withTheme(Radium(HomeComponent));
