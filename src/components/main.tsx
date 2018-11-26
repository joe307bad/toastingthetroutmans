import * as React from 'react';

import '../assets/fonts/fonts.styl';

import { ThemeProvider } from '@callstack/react-theme-provider';
import Home from './home';

export interface ITheme {
    main: React.CSSProperties,
    nav: React.CSSProperties,
    navChild: React.CSSProperties
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
        padding: '20px',
        color: primary,
        top: 0,
        backgroundImage: backgroundImage,
    },
    navChild: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export class Main extends React.Component<any, any>{
    parallax: any;
    parallaxContainer: any;

    setParallaxContainer = (parallaxContainer: any) =>
        this.parallaxContainer = parallaxContainer

    scroll = (position: number) =>
        this.parallaxContainer.scrollTo(position)

    render(): JSX.Element {
        return (
            <ThemeProvider theme={theme}>
                <div style={theme.main}>
                    <div style={theme.nav}>
                        <div style={theme.navChild}
                            onClick={() => this.scroll(0)}>
                            Engagement
                        </div>
                        <div style={theme.navChild}
                            onClick={() => this.scroll(1)}>
                            Photos
                        </div>
                        <div style={theme.navChild}
                            onClick={() => this.scroll(3)}>
                            Bridesmaids
                        </div>
                        <div style={theme.navChild}
                            onClick={() => this.scroll(3)}>
                            Groomsmen
                        </div>
                        <div style={theme.navChild}
                            onClick={() => this.scroll(3)}>
                            Venue
                        </div>
                        <div style={theme.navChild}
                            onClick={() => this.scroll(3)}>
                            Registry
                        </div>
                        <div style={theme.navChild}
                            onClick={() => this.scroll(3)}>
                            RSVP
                        </div>
                    </div>
                    <Home
                        {...{
                            setParallaxContainer: this.setParallaxContainer.bind(this)
                        }} />
                </div>
            </ThemeProvider>
        )
    }
}

export default Main;