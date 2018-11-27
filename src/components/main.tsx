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

    public scrollTo = (position: number): void => {
        this.parallaxContainer.scrollTo(position);
    }

    public onScroll = (currentPosition: number): void => {
        this.setState({
            currentPageMarkerPosition: `calc(${currentPosition * 100 * 0.857142857143}%)`
        });
    }

    public render(): JSX.Element {

        return (
            <ThemeProvider theme={theme.base}>
                <Radium.StyleRoot>
                    <div style={theme.base.nav}>
                        <div
                            role='button'
                            style={theme.base.navChild}
                            onClick={this.scrollTo.call(this, 0)}>
                            Engagement
                        </div>
                        <div
                            role='button'
                            style={theme.base.navChild}
                            onClick={this.scrollTo.call(this, 1)}>
                            Photos
                        </div>
                        <div
                            role='button'
                            style={theme.base.navChild}
                            onClick={this.scrollTo.call(this, 3)}>
                            Bridesmaids
                        </div>
                        <div
                            role='button'
                            style={theme.base.navChild}
                            onClick={this.scrollTo.call(this, 3)}>
                            Groomsmen
                        </div>
                        <div
                            role='button'
                            style={theme.base.navChild}
                            onClick={this.scrollTo.call(this, 3)}>
                            Venue
                        </div>
                        <div
                            role='button'
                            style={theme.base.navChild}
                            onClick={this.scrollTo.call(this, 0)}>
                            Registry
                        </div>
                        <div
                            role='button'
                            style={theme.base.navChild}
                            onClick={this.scrollTo.call(this, 3)}>
                            RSVP
                        </div>
                        <div style={{ width: '100%' }}></div>
                        <div style={{
                            ...theme.base.currentPageMarker,
                            left: this.state.currentPageMarkerPosition
                        }}>
                            <div style={theme.base.currentPageMarkerAccent}></div>
                        </div>
                    </div>
                    <Home
                        {...{
                            setParallaxContainer: this.setParallaxContainer.bind(this),
                            onParallaxScroll: this.onScroll.bind(this)
                        }} />
                </Radium.StyleRoot>
            </ThemeProvider>
        );
    }
}
