import { Styles } from 'react-jss';

import { primary } from '../../theme';
import { Device, MediaQuery } from '../../theme/Breakpoints';

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
    TaglineContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'baseline',
        justifyContent: 'center',
        [MediaQuery.desktop]: {
            flexDirection: 'column',
            justifyContent: 'start',
            paddingTop: 100
        }
    },
    SamAndShaun: {
        alignSelf: 'center',
        width: '80%',
        paddingTop: 70,
        paddingBottom: 10,
        [MediaQuery.tablet]: {
            width: 500
        },
        [MediaQuery.desktop]: {
            alignSelf: 'center',
            paddingTop: 0
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
        [MediaQuery.tablet]: {
            fontSize: 30,
            lineHeight: '40px'
        },
        [MediaQuery.desktop]: {
            alignSelf: 'center'
        }
    },
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
        [MediaQuery.mobile]: {
            marginTop: -60,
            width: 350,
            [Device.iphonex]: {
                width: 400,
                marginTop: -120,
                transform: 'rotate(-5deg)'
            }
        },
        [MediaQuery.desktop]: {
            marginLeft: '10%',
            marginTop: 70,
            width: 500
        },
        [MediaQuery.xl]: {
            marginLeft: -100,
            marginTop: -50,
            width: 700
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
        [MediaQuery.mobile]: {
            marginTop: 30,
            width: 350
        },
        [MediaQuery.desktop]: {
            marginRight: '10%',
            marginTop: -20,
            width: 500
        },
        [MediaQuery.xl]: {
            marginRight: 0,
            marginTop: -100,
            width: 700
        }
    }
};
