import { Styles } from 'react-jss';
import { MediaQuery, primary } from '../../theme';

export type RegistriesClasses =
    'RegistriesContainer' |
    'Registries' |
    'Registry' |
    'SamAndShawn_2_Portrait' |
    'SamAndShawn_1_Landscape' |
    'FlowerPic10' |
    'FlowerPic9' |
    'CreditsButton';

/**
 * The Styles for the Registries Component
 */
export const RegistriesStyles: Styles<RegistriesClasses> = {
    RegistriesContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        '& h1': {
            fontFamily: 'Imperator',
            color: primary,
            margin: '0 0 40px 0'
        }
    },
    Registries: {
        textAlign: 'center',
        width: '100%'
    },
    Registry: {
        // width: 'calc(100% - 20px)',
        textAlign: 'center',
        padding: 10,
        margin: '0 auto',
        display: 'inline-block',
        [MediaQuery.tablet]: {
            width: 200
        },
        '& h2': {
            fontFamily: 'Imperator',
            color: primary,
            marginBottom: 0
        },
        '& p': {
            textAlign: 'center',
            marginTop: 0
        },
        '& img': {
            width: 200,
            boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
            cursor: 'pointer'
        }
    },
    SamAndShawn_2_Portrait: {
        display: 'none',
        width: 300,
        position: 'absolute',
        left: 0,
        bottom: -100,
        transform: 'rotate(-15deg)',
        backgroundColor: 'white',
        boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
        padding: 10,
        [MediaQuery.tablet]: {
            display: 'block'
        }
    },
    FlowerPic9: {
        display: 'none',
        width: 250,
        bottom: 400,
        position: 'absolute',
        left: 0,
        transform: 'rotate(-15deg)',
        [MediaQuery.tablet]: {
            display: 'block'
        }
    },
    SamAndShawn_1_Landscape: {
        display: 'none',
        width: 400,
        position: 'absolute',
        right: -50,
        top: 150,
        transform: 'rotate(20deg)',
        backgroundColor: 'white',
        boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
        padding: 10,
        [MediaQuery.tablet]: {
            display: 'block'
        }
    },
    FlowerPic10: {
        display: 'none',
        width: 250,
        position: 'absolute',
        right: -20,
        top: 350,
        [MediaQuery.tablet]: {
            display: 'block'
        }
    },
    CreditsButton: {
        display: 'none',
        cursor: 'pointer',
        marginTop: 20,
        marginBottom: 10,
        border: `2px solid ${primary}`,
        padding: 20,
        color: primary,
        fontFamily: 'Imperator',
        fontSize: 20,
        textDecoration: 'none',
        width: 100,
        margin: '0 auto 25px',
        height: 20,
        position: 'absolute',
        bottom: -15,
        marginLeft: -65,
        left: '50%',
        textAlign: 'center',
        backgroundColor: 'white',
        '& i': {
            paddingLeft: 20
        },
        [MediaQuery.tablet]: {
            display: 'block'
        }
    }
};
