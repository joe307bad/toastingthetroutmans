import { ThemeProvider } from '@callstack/react-theme-provider';
import * as React from 'react';

import radium from 'radium';
import * as theme from '../theme';
import { Home } from './home/Home';

interface IMainState {
    currentPageMarkerPosition: string;
}

/**
 * Main Component
 * This component facilities any global parent components and serves as a single entry point
 * for all components
 */
export class Main extends React.Component<any, IMainState> {
    public parallax: any;
    public parallaxContainer: any;
    public state: IMainState = { currentPageMarkerPosition: '0' };

    public setParallaxContainer = (parallaxContainer: any) =>
        this.parallaxContainer = parallaxContainer

    public scrollTo = (position: number) =>
        this.parallaxContainer.scrollTo(position)

    public onScroll = (currentPosition: number) => {
        this.setState({
            currentPageMarkerPosition: 'calc(' + ((.857142857143 * currentPosition) * 100).toString() + '%)'
        });
    }

    public render(): JSX.Element {

        return (
            <ThemeProvider theme={theme.base}>
                <radium.StyleRoot>
                    <div style={theme.base.nav}>
                        <div style={theme.base.navChild}
                            onClick={() => this.scrollTo(0)}>
                            Engagement
                        </div>
                        <div style={theme.base.navChild}
                            onClick={() => this.scrollTo(1)}>
                            Photos
                        </div>
                        <div style={theme.base.navChild}
                            onClick={() => this.scrollTo(3)}>
                            Bridesmaids
                        </div>
                        <div style={theme.base.navChild}
                            onClick={() => this.scrollTo(3)}>
                            Groomsmen
                        </div>
                        <div style={theme.base.navChild}
                            onClick={() => this.scrollTo(3)}>
                            Venue
                        </div>
                        <div style={theme.base.navChild}
                            onClick={() => this.scrollTo(3)}>
                            Registry
                        </div>
                        <div style={theme.base.navChild}
                            onClick={() => this.scrollTo(3)}>
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
                </radium.StyleRoot>
            </ThemeProvider>
        );
    }
}
