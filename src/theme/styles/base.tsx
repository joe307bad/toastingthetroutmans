import { primary } from '../colors';
import { ITheme } from '../itheme';

const backgroundImage = 'url(https://www.toptal.com/designers/subtlepatterns/patterns/ricepaper2.png)';

export const base: ITheme = {
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
};
