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
        width: 300,
        textAlign: 'center',
        padding: 10,
        margin: '0 auto',
        display: 'inline-block',
        '& h2': {
            fontFamily: 'Imperator',
            color: primary
        },
        '& p': {
            textAlign: 'left'
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
        height: 'calc(100% - 100px)',
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
        overflowY: 'auto',
        paddingTop: 50,
        paddingBottom: 50,
        height: 'auto',
        alignSelf: 'center',
        width: '100%',
        [MediaQuery.desktop]: {
            overflow: 'hidden'
        }
    }
};
