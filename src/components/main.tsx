import * as React from 'react'

import { ThemeProvider } from '@callstack/react-theme-provider';
import Home from './home';

export interface ITheme {
    main: React.CSSProperties,
    nav: React.CSSProperties
}

const theme: ITheme = {
    main: {
        backgroundImage: "url(https://www.toptal.com/designers/subtlepatterns/patterns/paper_fibers.png)"
    },
    nav: {
        position: "fixed",
        background: '#fff',
        textAlign: 'center',
        width: "100%",
        top: 0,
        zIndex: 999
    }
}

export class Main extends React.Component<any, any>{
    render(): JSX.Element {
        return (
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider>
        )
    }
}

export default Main;