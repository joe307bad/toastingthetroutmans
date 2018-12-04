import { Styles } from 'react-jss';

import { Breakpoints, primary } from '../../theme';

export type HomeClasses =
    'SamAndShaun_1_Landscape' |
    'SamAndShaun_3_Landscape' |
    'SamAndShaun' |
    'Tagline' |
    'TaglineContainer';

/**
 * The Styles for the Home Component
 */
export const HomeStyles: Styles<HomeClasses> = {
    // [Breakpoints.desktop]: {
    //     backgroundColor: 'black',
    //     marginTop: 500
    // },
    SamAndShaun: {
        alignSelf: 'center',
        width: '80%',
        paddingTop: 70,
        paddingBottom: 10
    },
    Tagline: {
        fontFamily: 'Imperator',
        color: primary,
        alignSelf: 'center',
        fontSize: '20px',
        textAlign: 'center',
        lineHeight: '30px',
        margin: 0
    },
    TaglineContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'baseline',
        justifyContent: 'center'
    },
    SamAndShaun_1_Landscape: {
        width: 300,
        marginRight: 0,
        transform: 'rotate(-10deg)',
        backgroundColor: 'white',
        padding: 10,
        display: 'block',
        boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
        parallaxOffset: 0.35,
        marginTop: -350

        // [Breakpoints.mobile]: {
        //     border: '20px solid blue'
        // },
        // [Breakpoints.desktop]: {
        //     border: '20px solid green'
        //     //width: 500
        // },
        // [Breakpoints.tablet]: {
        //     border: '20px solid red'
        //     //width: 800
        // }
    },
    SamAndShaun_3_Landscape: {
        width: 350,
        marginRight: 0,
        transform: 'rotate(10deg)',
        backgroundColor: 'white',
        padding: 10,
        display: 'block',
        boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
        parallaxOffset: 0.35,
        marginTop: -100,
        bottom: 0
    }
};
