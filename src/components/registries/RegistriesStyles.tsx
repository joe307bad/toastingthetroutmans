import { Styles } from 'react-jss';
import { MediaQuery, primary } from '../../theme';

export type RegistriesClasses =
    'RegistriesContainer' |
    'Registries' |
    'Registry';

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
        width: 'calc(100% - 20px)',
        textAlign: 'center',
        padding: 10,
        margin: '0 auto',
        display: 'inline-block',
        [MediaQuery.tablet]: {
            width: 300
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
    }
};
