import { primary } from '../Colors';
import { ITheme } from '../ITheme';

const backgroundImage: string
    = 'url(https://www.toptal.com/designers/subtlepatterns/patterns/ricepaper2.png)';

/**
 * Base theme styles
 */
export const Base: ITheme = {
    main: {
        backgroundImage: backgroundImage,
        overflow: 'hidden',
        top: 0,
        left: 0,
        zIndex: 1
    },
    moveMainContainerForNavMenu: {
        left: 200
    },
    moveNavMenu: {
        left: 0
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
    },
    navButton: {
        position: 'absolute',
        top: 11,
        right: -78,
        WebkitTapHighlightColor: 'rgba(255, 255, 255, 0)',
        opacity: 0.5
    }
};
