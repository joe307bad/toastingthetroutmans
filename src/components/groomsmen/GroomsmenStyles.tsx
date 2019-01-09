import { Styles } from 'react-jss';

import { primary } from '../../theme';
import { MediaQuery } from '../../theme/Breakpoints';

export type GroomsmenClasses =
    'GroomsmenContainer' |
    'Groomsmen' |
    'Person' |
    'GroomsmensContent';

/**
 * The Styles for the Groomsmen Component
 */
export const GroomsmenStyles: Styles<GroomsmenClasses> = {
    Person: {
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
            width: 100,
            borderRadius: '50%'
        }
    },
    GroomsmenContainer: {
        display: 'flex',
        alignContent: 'center'
    },
    Groomsmen: {
        alignSelf: 'start',
        textAlign: 'center',
        padding: 50,
        paddingTop: 50,
        paddingBottom: 50,
        width: '100%',
        display: 'flex',
        [MediaQuery.desktop]: {
            alignSelf: 'center'
        },
        '& h1': {
            fontFamily: 'Imperator',
            color: primary,
            margin: '0 0 20 0'
        }
    },
    GroomsmensContent: {
        paddingTop: 50,
        paddingBottom: 50,
        alignSelf: 'center',
        width: '100%'
    }
};
