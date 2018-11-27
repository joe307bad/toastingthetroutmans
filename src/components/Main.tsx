import { ThemeProvider } from '@callstack/react-theme-provider';
import Radium from 'radium';
import * as React from 'react';

import { Parallax, ParallaxLayer } from 'react-spring';
import * as theme from '../theme';
import { Home } from './home/Home';
import { TParallaxElement } from './home/TParallaxElement';

interface IMainState {
    currentPageMarkerPosition: string;
}

const url: string = 'https://awv3node-homepage.surge.sh/build/assets/satellite.svg';

/**
 * Main Component
 * This component facilities any global parent components and serves as a single entry point
 * for all components
 */
export class Main extends React.Component<{}, IMainState> {
    public parallaxContainer: TParallaxElement;
    public state: IMainState = { currentPageMarkerPosition: '0' };

    public componentDidMount(): void {
        this.parallaxContainer.container.addEventListener('scroll', this.onScroll.bind(this));
    }

    public bindRef = (parallaxContainer: TParallaxElement): void => {
        this.parallaxContainer = parallaxContainer;
    }

    public scrollTo = (event: React.SyntheticEvent<HTMLDivElement>): void => {
        const position: number = Number(event.currentTarget.dataset.position);
        this.parallaxContainer.scrollTo(position);
    }

    public onScroll = (): void => {
        const container: HTMLDivElement = this.parallaxContainer.container;

        const position: number =
            container.scrollTop / (container.scrollHeight - container.clientHeight);

        this.setState({
            currentPageMarkerPosition: `calc(${position * 100 * 0.857142857143}%)`
        });
    }

    // tslint:disable-next-line:max-func-body-length
    public render(): JSX.Element {

        return (
            <ThemeProvider theme={theme.Base}>
                <Radium.StyleRoot>
                    <div style={theme.Base.nav}>
                        <div
                            role='button'
                            style={theme.Base.navChild}
                            data-position={0}
                            onClick={this.scrollTo}>
                            Engagement
                        </div>
                        <div
                            role='button'
                            style={theme.Base.navChild}
                            data-position={1}
                            onClick={this.scrollTo}>
                            Photos
                        </div>
                        <div
                            role='button'
                            style={theme.Base.navChild}
                            data-position={2}
                            onClick={this.scrollTo}>
                            Bridesmaids
                        </div>
                        <div
                            role='button'
                            style={theme.Base.navChild}
                            data-position={0}
                            onClick={this.scrollTo}>
                            Groomsmen
                        </div>
                        <div
                            role='button'
                            style={theme.Base.navChild}
                            data-position={0}
                            onClick={this.scrollTo}>
                            Venue
                        </div>
                        <div
                            role='button'
                            style={theme.Base.navChild}
                            data-position={0}
                            onClick={this.scrollTo}>
                            Registry
                        </div>
                        <div
                            role='button'
                            style={theme.Base.navChild}
                            data-position={0}
                            onClick={this.scrollTo}>
                            RSVP
                        </div>
                        <div style={{ width: '100%' }}></div>
                        <div style={{
                            ...theme.Base.currentPageMarker,
                            left: this.state.currentPageMarkerPosition
                        }}>
                            <div style={theme.Base.currentPageMarkerAccent}></div>
                        </div>
                    </div>
                    <Parallax
                        style={theme.Base.main}
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
                        <Home />

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
                </Radium.StyleRoot>;
            </ThemeProvider>
        );
    }
}
