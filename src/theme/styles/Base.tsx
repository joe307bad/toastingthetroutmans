import { primary } from '../Colors';
import { CSSProperties } from 'react';
import { INavProps } from '../../components/nav/Nav';
import { Styles } from 'react-jss';

const backgroundImage: string
    = 'url(https://www.toptal.com/designers/subtlepatterns/patterns/ricepaper2.png)';

/**
 * Available Properties for the Main styles
 */
export type MainClasses =
    'main' |
    'moveMainContainerForNavMenu' |
    'moveNavMenu' |
    'nav' |
    'mainContainer' |
    'navChild' |
    'currentPageMarker' |
    'currentPageMarkerAccent' |
    'navButton';

// export type Styles<ClassKey extends string = string> = { [P in ClassKey]: CSSProperties | ((...args: any[]) => CSSProperties) }

/**
 * Base theme styles
 */
export const Base: Styles<MainClasses> = {
    main: {
        backgroundImage: backgroundImage,
        overflow: 'hidden',
        top: 0,
        left: 0,
        zIndex: 1
    },
    moveMainContainerForNavMenu: {
        left: '200px !important'
    },
    moveNavMenu: {
        left: '0px !important'
    },
    nav: {
        fontFamily: 'Imperator',
        textAlign: 'center',
        zIndex: 2,
        position: 'fixed',
        fontSize: '20px',
        color: primary,
        top: 0,
        backgroundColor: 'white',
        height: '100%',
        paddingTop: '50px',
        paddingBottom: '20px',
        left: -200,
        transition: 'left .5s ease'

        // padding: '20px 0 20px 0',
        // backgroundImage: backgroundImage,
        // display: 'flex',
        // width: '978px',
        // left: '50%',
        // marginLeft: '-514px',
        // flexFlow: 'row wrap'
    },
    mainContainer: {
        maxWidth: 1280,
        position: 'relative',
        margin: '0 auto',
        left: 0,
        transition: 'left .5s ease'
    },
    navChild: {
        paddingBottom: 30,
        width: 200

        // flex: 1,
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    // @ts-ignore
    currentPageMarker: (props: INavProps): CSSProperties => ({
        transition: 'left 0s ease',
        bottom: 0,
        width: '14.2857142857%',
        textAlign: 'center',
        position: 'absolute',
        left: props.currentPageMarkerPosition
    }),
    currentPageMarkerAccent: {
        marginTop: '10px',
        width: '139.8px',
        backgroundColor: primary,
        height: '5px',
        left: '50%',
        position: 'relative',
        marginLeft: '-69.9px'
    },
    navButton: {
        position: 'absolute',
        top: 11,
        right: -78,
        WebkitTapHighlightColor: 'rgba(255, 255, 255, 0)',
        opacity: 0.5
    }
};
