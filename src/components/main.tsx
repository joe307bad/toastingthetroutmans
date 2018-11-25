import * as React from 'react';

import '../assets/fonts/fonts.styl';

import { ThemeProvider } from '@callstack/react-theme-provider';
import Home from './home';

export interface ITheme {
    main: React.CSSProperties,
    nav: React.CSSProperties
}

const theme: ITheme = {
    main: {
        backgroundImage: "url(https://www.toptal.com/designers/subtlepatterns/patterns/ricepaper2.png)",
        height: "100%",
        width: "100%"
    },
    nav: {
        fontFamily: 'Imperator',
        position: "fixed",
        background: '#fff',
        textAlign: 'center',
        width: "100%",
        top: 0,
        zIndex: 999
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
                        <div style={{ background: '#3498DB' }}
                            onClick={() => this.scroll(0)}>
                            test1
                    </div>
                        <div style={{ background: '#3498DB' }}
                            onClick={() => this.scroll(1)}>
                            test2
                     </div>
                        <div style={{ background: '#3498DB' }}
                            onClick={() => this.scroll(3)}>
                            test3
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