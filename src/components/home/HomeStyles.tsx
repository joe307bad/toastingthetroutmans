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
        flexWrap: 'wrap',
        alignContent: 'baseline',
        justifyContent: 'center',
        [Device.tabletLandscape]: {
            flexDirection: 'column',
            justifyContent: 'start'
        },
        [MediaQuery.xltablet]: {
            flexDirection: 'column',
            justifyContent: 'start'
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
        [Device.phoneLandscape]: {
            paddingTop: 50
        },
        [Device.tabletLandscape]: {
            paddingTop: 50,
            flexDirection: 'column',
            justifyContent: 'start'
        },
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
    CurlyUnderline: {
        display: 'none',
        width: 200,
        [Device.ipadProLandscape]: {
            display: 'block',
            margin: '22px auto'
        },
        [MediaQuery.xl]: {
            display: 'block',
            margin: '22px auto'
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
        marginTop: -20,
        bottom: 0,
        zIndex: 1,
        [Device.phoneLandscape]: {
            display: 'none'
        },
        [MediaQuery.mobile]: {
            marginTop: -60,
            width: 350,
            [Device.iphonex]: {
                width: 400,
                marginTop: -120,
                transform: 'rotate(-5deg)'
            },
            [Device.tabletLandscape]: {
                marginLeft: -10,
                width: 500,
                marginTop: 50
            },
            [MediaQuery.xltablet]: {
               width: 600,
               marginTop: -200,
               marginLeft: '20%'
            }
        },
        [MediaQuery.desktop]: {
            marginLeft: '10%',
            marginTop: 70,
            width: 500
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
        [Device.phoneLandscape]: {
            display: 'none'
        },
        [MediaQuery.mobile]: {
            marginTop: 30,
            width: 350,
            [Device.tabletLandscape]: {
                marginTop: -80,
                marginLeft: '50%',
                width: 500
            },
            [MediaQuery.xltablet]: {
               width: 600,
               marginLeft: '10%'
            }
        },
        [MediaQuery.desktop]: {
            marginRight: '10%',
            marginTop: -20,
            width: 500
        },
        [MediaQuery.xl]: {
            marginRight: -50,
            marginTop: -80,
            width: 700
        }
    },
    Flowers: {
        display: 'none',
        [Device.phoneLandscape]: {
            marginLeft: -150,
            display: 'block'
        },
        [MediaQuery.tablet]: {
            display: 'block',
            marginLeft: 10,
            marginTop: 60,
            [Device.pixel2xlLandscape]: {
                marginLeft: -100
            },
            [Device.iphonexLandscape]: {
                marginLeft: -100
            },
            [Device.tabletLandscape]: {
                marginTop: -25
            },
            [Device.ipadProLandscape]: {
                marginLeft: 0,
                marginTop: -20,
                width: 500
            }
        },
        [MediaQuery.xltablet]: {
            marginTop: -100,
            marginLeft: -50,
            width: 500
        },
        [MediaQuery.desktop]: {
            marginTop: -80,
            marginLeft: 40
        }
    },
    Flowers1: {
        display: 'none',
        [Device.phoneLandscape]: {
            marginLeft: '75%',
            display: 'block'
        },
        [MediaQuery.tablet]: {
            display: 'block',
            marginLeft: '50%',
            marginTop: 250,
            [Device.tabletLandscape]: {
                marginTop: 0,
                marginLeft: '65%'
            }
        },
        [Device.pixel2xlLandscape]: {
            marginLeft: '75%'
        },
        [Device.iphonexLandscape]: {
            marginLeft: '75%'
        },
        [MediaQuery.xltablet]: {
            marginTop: 300,
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
