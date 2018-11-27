import { ThemeProvider } from '@callstack/react-theme-provider';
import Radium from 'radium';
import * as React from 'react';

import * as theme from '../theme';
import { Home } from './home/Home';
import { TParallaxElement } from './home/TParallaxElement';

interface IMainState {
    currentPageMarkerPosition: string;
}

/**
 * Main Component
 * This component facilities any global parent components and serves as a single entry point
 * for all components
 */
export class Main extends React.Component<{}, IMainState> {
    public parallaxContainer: TParallaxElement;
    public state: IMainState = { currentPageMarkerPosition: '0' };

    public setParallaxContainer = (parallaxContainer: TParallaxElement): void => {
        this.parallaxContainer = parallaxContainer;
    }

    public scrollTo = (event: React.SyntheticEvent<HTMLDivElement>): void => {
        const position: number = Number(event.currentTarget.dataset.position);
        this.parallaxContainer.scrollTo(position);
    }

    public onScroll = (currentPosition: number): void => {
        this.setState({
            currentPageMarkerPosition: `calc(${currentPosition * 100 * 0.857142857143}%)`
        });
    }

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
                    <Home
                        {...{
                            setParallaxContainer: this.setParallaxContainer.bind(this),
                            onParallaxScroll: this.onScroll.bind(this)
                        }} />
                </Radium.StyleRoot>;
            </ThemeProvider>
        );
    }
}
