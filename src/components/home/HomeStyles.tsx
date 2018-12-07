import { Styles } from 'react-jss';

import { primary } from '../../theme';
import { Device, MediaQuery } from '../../theme/Breakpoints';

export type HomeClasses =
    // 'SamAndShaun_1_Landscape' |
    'SamAndShaun_3_Landscape' |
    'SamAndShaun' |
    'Tagline' |
    'TaglineContainer' |
    'SamAndShaun_4_Landscape' |
    'Flowers' |
    'Flowers1' |
    'CurlyUnderline';

/**
 * The Styles for the Home Component
 */
export const HomeStyles: Styles<HomeClasses> = {
    TaglineContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'baseline',
        justifyContent: 'start',
        [MediaQuery.mobile]: {
            width: 440
        },
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
        [MediaQuery.mobile]: {
            width: 300
        },
        [MediaQuery.tablet]: {
            width: 400,
            paddingTop: 20
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
        fontSize: 18,
        textAlign: 'center',
        lineHeight: '30px',
        margin: 0,
        [MediaQuery.desktop]: {
            alignSelf: 'center'
        }
    },
    CurlyUnderline: {
        display: 'none',
        paddingTop: 10,
        [MediaQuery.mobile]: {
            display: 'block',
            alignSelf: 'center',
            width: 100
        }
    },
    SamAndShaun_3_Landscape: {
        width: 175,
        margin: '0 auto',
        transform: 'rotate(-10deg)',
        backgroundColor: 'white',
        padding: 10,
        display: 'block',
        boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
        marginTop: -10,
        bottom: 0,
        zIndex: 1,
        [Device.iphonex]: {
            width: 300,
            marginTop: -60
        },
        [MediaQuery.mobile]: {
            width: 220
        },
        [MediaQuery.tablet]: {
            width: 400,
            margin: '0 auto',
            marginTop: 100,
            position: 'relative',
            left: -200
        },
        [MediaQuery.xl]: {
            marginLeft: -50,
            marginTop: 20,
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
        [MediaQuery.tablet]: {
            width: 400,
            margin: '0 auto',
            position: 'relative',
            right: -200
        },
        [MediaQuery.xl]: {
            marginRight: -50,
            marginTop: -80,
            width: 700
        }
    },
    Flowers: {
        width: 200,
        marginTop: 50,
        marginLeft: '-10%',
        display: 'block',
        [Device.iphonex]: {
            width: 300,
            marginTop: 0
        },
        [MediaQuery.mobile]: {
            margin: '0 auto',
            paddingRight: 150,
            paddingTop: 60
        },
        [MediaQuery.tablet]: {
            width: 400,
            paddingTop: 0
        }
    },
    Flowers1: {
        width: 200,
        marginTop: 40,
        marginLeft: '65%',
        display: 'block',
        [Device.iphonex]: {
            width: 300,
            marginTop: -60
        },
        [MediaQuery.mobile]: {
            margin: '0 auto',
            paddingLeft: 150,
            paddingTop: 40
        },
        [MediaQuery.tablet]: {
            width: 400,
            paddingTop: 0
        },
        [MediaQuery.xltablet]: {
            marginLeft: '50%',
            width: 500
        },
        [MediaQuery.desktop]: {
            marginLeft: '70%',
            marginTop: -60,
            width: 400,
            [Device.ipadProLandscape]: {
                marginLeft: '65%',
                marginTop: -20,
                width: 400
            }
        }
    }
};
