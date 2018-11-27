import { withTheme } from '@callstack/react-theme-provider';
import * as React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring';

import Radium from 'radium';
import { Photos } from '../../assets/photos/Photos';
import { ITheme, primary } from '../../theme';
import { TParallaxElement } from './TParallaxElement';

const url: string = 'https://awv3node-homepage.surge.sh/build/assets/satellite.svg';

interface IHomeProps {
    theme: ITheme;
    setParallaxContainer(ref: TParallaxElement): void;
    onParallaxScroll(currentPosition: number): void;
}
/**
 * Home Component
 */
class HomeComponent extends React.Component<IHomeProps, object> {
    public parallaxContainer: TParallaxElement;

    public componentDidMount(): void {
        this.parallaxContainer.container.addEventListener('scroll', this.handleScroll.bind(this));
    }

    public handleScroll(): void {
        const container: HTMLDivElement = this.parallaxContainer.container;
        const body: HTMLElement = document.body;

        const percent: number =
            body.scrollTop / (container.scrollHeight - body.clientHeight);
        this.props.onParallaxScroll(percent);
    }

    // tslint:disable-next-line:max-func-body-length
    public render(): JSX.Element {
        return (
            <Parallax
                style={this.props.theme.main}
                ref={this.bindRef}
                pages={3}>
                <ParallaxLayer
                    offset={1}
                    speed={1}
                />
                <ParallaxLayer
                    offset={2}
                    speed={1}
                />

                <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={3}
                />

                <ParallaxLayer
                    offset={1.3}
                    speed={-0.3}
                    style={{ pointerEvents: 'none' }}>
                    <img
                        alt='Satellite'
                        src={url}
                        style={{ width: '15%', marginLeft: '70%' }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img
                        alt='Satellite'
                        src={url}
                        style={{ display: 'block', width: '20%', marginLeft: '55%' }}
                    />
                    <img
                        alt='Satellite'
                        src={url}
                        style={{ display: 'block', width: '10%', marginLeft: '15%' }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                    <img
                        alt='Satellite'
                        src={url}
                        style={{ display: 'block', width: '20%', marginLeft: '70%' }}
                    />
                    <img
                        alt='Satellite'
                        src={url}
                        style={{ display: 'block', width: '20%', marginLeft: '40%' }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img
                        alt='Satellite'
                        src={url}
                        style={{ display: 'block', width: '10%', marginLeft: '10%' }}
                    />
                    <img
                        alt='Satellite'
                        src={url}
                        style={{ display: 'block', width: '20%', marginLeft: '75%' }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                    <img
                        alt='Satellite'
                        src={url}
                        style={{ display: 'block', width: '20%', marginLeft: '60%' }}
                    />
                    <img
                        alt='Satellite'
                        src={url}
                        style={{ display: 'block', width: '25%', marginLeft: '30%' }}
                    />
                    <img
                        alt='Satellite'
                        src={url}
                        style={{ display: 'block', width: '10%', marginLeft: '80%' }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                    <img
                        alt='Satellite'
                        src={url}
                        style={{ display: 'block', width: '20%', marginLeft: '5%' }}
                    />
                    <img
                        alt='Satellite'
                        src={url}
                        style={{ display: 'block', width: '15%', marginLeft: '75%' }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.5}
                    speed={-0.4}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none'
                    }}>
                    <img
                        alt='Satellite'
                        src={url}
                        style={{ width: '60%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={-0.3}
                    style={{
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                        backgroundImage: url
                    }}
                />

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

                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <img
                        alt='Satellite'
                        src={url}
                        style={{ width: '40%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={0.1}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <img
                        alt='Satellite'
                        src={url}
                        style={{ width: '40%' }} />
                </ParallaxLayer>

            </Parallax>
        );
    }

    // tslint:disable-next-line:no-any
    private bindRef = (ref: TParallaxElement): void => {
        this.parallaxContainer = ref;
        this.props.setParallaxContainer(ref);
    }
}

export const Home: React.ComponentType<Pick<IHomeProps, 'setParallaxContainer' | 'onParallaxScroll'>>
    = withTheme(Radium(HomeComponent));
