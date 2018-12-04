import { Styles } from 'react-jss';

import { primary } from '../../theme';
import { Device, MediaQueries } from '../../theme/Breakpoints';

export type HomeClasses =
    // 'SamAndShaun_1_Landscape' |
    'SamAndShaun_3_Landscape' |
    'SamAndShaun' |
    'Tagline' |
    'TaglineContainer' |
    'SamAndShaun_4_Landscape';

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
        paddingBottom: 10,
        [MediaQueries.tablet]: {
            width: 500
        }
    },
    Tagline: {
        fontFamily: 'Imperator',
        color: primary,
        alignSelf: 'center',
        fontSize: '18px',
        textAlign: 'center',
        lineHeight: '30px',
        margin: 0,
        [MediaQueries.tablet]: {
            fontSize: 30,
            lineHeight: '40px'
        }
    },
    TaglineContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'baseline',
        justifyContent: 'center'
    },
    // SamAndShaun_1_Landscape: {
    //     width: 100,
    //     marginRight: 0,
    //     transform: 'rotate(-10deg)',
    //     backgroundColor: 'white',
    //     padding: 10,
    //     boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
    //     parallaxOffset: 0.35,
    //     marginTop: -350
    //     // [Breakpoints.mobile]: {
    //     //     border: '20px solid blue'
    //     // },
    //     // [Breakpoints.desktop]: {
    //     //     border: '20px solid green'
    //     //     //width: 500
    //     // },
    //     // [Breakpoints.tablet]: {
    //     //     border: '20px solid red'
    //     //     //width: 800
    //     // }
    // },

    SamAndShaun_3_Landscape: {
        width: 200,
        margin: '0 auto',
        transform: 'rotate(-10deg)',
        backgroundColor: 'white',
        padding: 10,
        display: 'block',
        boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
        parallaxOffset: 0.35,
        marginTop: -20,
        bottom: 0,
        zIndex: 1,
        [MediaQueries.mobile]: {
            marginTop: -60,
            width: 350,
            [Device.iphonex]: {
                width: 400,
                marginTop: -120,
                transform: 'rotate(-5deg)'
            }
        }
    },
    SamAndShaun_4_Landscape: {
        width: 300,
        margin: '0 auto',
        transform: 'rotate(10deg)',
        backgroundColor: 'white',
        padding: 10,
        display: 'block',
        boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
        zIndex: 2,
        [MediaQueries.mobile]: {
            marginTop: 30,
            width: 350
        }
    }
};
