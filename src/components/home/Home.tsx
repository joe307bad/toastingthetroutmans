import { withTheme } from '@callstack/react-theme-provider';
import * as React from 'react';
import { ParallaxLayer } from 'react-spring';

import Radium from 'radium';
import { Photos } from '../../assets/photos/Photos';
import { ITheme, primary } from '../../theme';
import { TParallaxElement } from './TParallaxElement';


interface IHomeProps {
    theme: ITheme;
}
/**
 * Home Component
 */
class HomeComponent extends React.Component<IHomeProps, object> {
    public parallaxContainer: TParallaxElement;

    // public componentDidMount(): void {
    //     this.parallaxContainer.container.addEventListener('scroll', this.handleScroll.bind(this));
    // }

    // public handleScroll(): void {
    // }

    // tslint:disable-next-line:max-func-body-length
    public render(): JSX.Element {
        return (
            <div>
                <ParallaxLayer
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
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.25}
                    speed={0.5}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <img
                        alt='Sam and Shaun'
                        src={Photos.samAndShaun2}
                        style={{
                            width: '500px',
                            marginRight: '40%',
                            transform: 'rotate(-10deg)',
                            backgroundColor: 'white',
                            padding: '10px',
                            display: 'block',
                            boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)'
                        }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.25}
                    speed={0.3}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <img
                        style={{
                            width: '500px',
                            marginLeft: '40%',
                            transform: 'rotate(10deg)',
                            backgroundColor: 'white',
                            padding: '10px',
                            display: 'block',
                            boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)'
                        }}
                        alt='Sam and Shaun'
                        src={Photos.samAndShaun2} />
                </ParallaxLayer>


            </div>
        );
    }

    // tslint:disable-next-line:no-any
    // private bindRef = (ref: TParallaxElement): void => {
    //     this.parallaxContainer = ref;
    //     this.props.setParallaxContainer(ref);
    // }
}

export const Home: React.ComponentType<Pick<IHomeProps, never>>
    = withTheme(Radium(HomeComponent));