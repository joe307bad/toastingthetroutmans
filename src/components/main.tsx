import * as React from 'react';

import '../assets/fonts/fonts.styl';

import { ThemeProvider } from '@callstack/react-theme-provider';
import Home from './home';

export interface ITheme {
    main: React.CSSProperties;
    nav: React.CSSProperties;
    navChild: React.CSSProperties;
    currentPageMarker: React.CSSProperties;
    currentPageMarkerAccent: React.CSSProperties
}

export const primary = '#582C4D';
export const primary2 = '#A26769';
export const secondary = '#D5B9B2';
export const tertiary = '#BFB5AF';
export const background = '#F2EDE9';

const backgroundImage = "url(https://www.toptal.com/designers/subtlepatterns/patterns/ricepaper2.png)";

const theme: ITheme = {
    main: {
        backgroundImage: backgroundImage,
        overflow: 'hidden',
        top: 0,
        left: 0,
        zIndex: 1
    },
    nav: {
        fontFamily: 'Imperator',
        display: 'flex',
        textAlign: 'center',
        zIndex: 2,
        position: 'fixed',
        width: '978px',
        left: '50%',
        marginLeft: '-514px',
        fontSize: '20px',
        padding: '20px 0 20px 0',
        color: primary,
        top: 0,
        backgroundImage: backgroundImage,
        flexFlow: 'row wrap'
    },
    navChild: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    currentPageMarker: {
        transition: 'left 0s ease',
        bottom: 0,
        width: '14.2857142857%',
        textAlign: 'center',
        position: 'absolute'
    },
    currentPageMarkerAccent: {
        marginTop: '10px',
        width: '139.8px',
        backgroundColor: primary,
        height: '5px',
        left: '50%',
        position: 'relative',
        marginLeft: '-69.9px'
    }
}

interface IMainState {
    currentPageMarkerPosition: string;
}

export class Main extends React.Component<any, IMainState>{
    parallax: any;
    parallaxContainer: any;
    state: IMainState = { currentPageMarkerPosition: '0' };

    setParallaxContainer = (parallaxContainer: any) =>
        this.parallaxContainer = parallaxContainer

    scrollTo = (position: number) =>
        this.parallaxContainer.scrollTo(position)

    onScroll = (currentPosition: number) => {
        this.setState({
            currentPageMarkerPosition: 'calc(' + ((.857142857143 * currentPosition) * 100).toString() + '%)'
        });
    }

    render(): JSX.Element {
        return (
            <ThemeProvider theme={theme}>
                <div style={theme.main}>
                    <div style={theme.nav}>
                        <div style={theme.navChild}
                            onClick={() => this.scrollTo(0)}>
                            Engagement
                        </div>
                        <div style={theme.navChild}
                            onClick={() => this.scrollTo(1)}>
                            Photos
                        </div>
                        <div style={theme.navChild}
                            onClick={() => this.scrollTo(3)}>
                            Bridesmaids
                        </div>
                        <div style={theme.navChild}
                            onClick={() => this.scrollTo(3)}>
                            Groomsmen
                        </div>
                        <div style={theme.navChild}
                            onClick={() => this.scrollTo(3)}>
                            Venue
                        </div>
                        <div style={theme.navChild}
                            onClick={() => this.scrollTo(3)}>
                            Registry
                        </div>
                        <div style={theme.navChild}
                            onClick={() => this.scrollTo(3)}>
                            RSVP
                        </div>
                        <div style={{ width: '100%' }}></div>
                        <div style={{
                            ...theme.currentPageMarker,
                            left: this.state.currentPageMarkerPosition
                        }}>
                            <div style={theme.currentPageMarkerAccent}></div>
                        </div>
                    </div>
                    <Home
                        {...{
                            setParallaxContainer: this.setParallaxContainer.bind(this),
                            onParallaxScroll: this.onScroll.bind(this)
                        }} />
                </div>
            </ThemeProvider>
        )
    }
}

export default Main;