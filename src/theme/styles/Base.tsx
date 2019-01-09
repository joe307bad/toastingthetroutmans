import { CSSProperties } from 'react';
import { Styles } from 'react-jss';
import { markerWidth } from '../../components/Main';
import { INavProps } from '../../components/nav/Nav';
import { MediaQuery } from '../Breakpoints';
import { primary } from '../Colors';

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
    'navItemsContainer' |
    'navItem' |
    'currentPageMarker' |
    'currentPageMarkerAccent' |
    'navButton';

/**
 * Base theme styles
 */
export const Base: Styles<MainClasses> = {
    main: {
        backgroundImage: backgroundImage,
        overflow: 'hidden',
        width: '100%',
        height: '100%',
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
        fontSize: 20,
        color: primary,
        top: 0,
        backgroundColor: 'white',
        height: '100%',
        paddingBottom: 20,
        left: -200,
        transition: 'left .5s ease',
        WebkitBoxShadow: 'inset -33px 2px 40px -38px rgba(0,0,0,0.75)',
        [MediaQuery.desktop]: {
            padding: '20px 0 20px 0',
            backgroundImage: backgroundImage,
            display: 'block',
            width: 978,
            left: '50%',
            marginLeft: -514,
            flexFlow: 'row wrap',
            WebkitBoxShadow: 'none',
            height: 'auto'
        }
    },
    mainContainer: {
        backgroundImage: backgroundImage,
        position: 'relative',
        margin: '0 auto',
        left: 0,
        transition: 'left .5s ease'
    },
    navItemsContainer: {
        height: '100%',
        overflow: 'auto',
        [MediaQuery.desktop]: {
            display: 'flex'
        }
    },
    navItem: {
        paddingBottom: 30,
        width: '20%',
        ['&:first-child']: {
            paddingTop: 50
        },
        [MediaQuery.desktop]: {
            ['&:first-child']: {
                paddingTop: 0
            },
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 0,
            paddingTop: 5
        }
    },
    // @ts-ignore
    currentPageMarker: (props: INavProps): CSSProperties => ({
        transition: 'left .5s linear',
        bottom: 0,
        width: `${markerWidth}%`,
        textAlign: 'center',
        position: 'absolute',
        left: props.currentPageMarkerPosition
    }),
    currentPageMarkerAccent: {
        marginTop: 10,
        width: 139.8,
        backgroundColor: primary,
        height: 5,
        left: '50%',
        position: 'relative',
        marginLeft: -69.9
    },
    navButton: {
        position: 'absolute',
        top: 11,
        right: -78,
        WebkitTapHighlightColor: 'rgba(255, 255, 255, 0)',
        opacity: 0.5,
        [MediaQuery.desktop]: {
            display: 'none'
        }
    }
};
