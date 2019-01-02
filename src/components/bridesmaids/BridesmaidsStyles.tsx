import { Styles } from 'react-jss';

import { primary } from '../../theme';
import { MediaQuery } from '../../theme/Breakpoints';

export type BridesmaidsClasses =
    'BridesmaidsContainer' |
    'Bridesmaids' |
    'Person' |
    'BridesmaidsContent';

/**
 * The Styles for the Bridesmaids Component
 */
export const BridesmaidsStyles: Styles<BridesmaidsClasses> = {
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
    BridesmaidsContainer: {
        display: 'flex',
        alignContent: 'center'
    },
    Bridesmaids: {
        alignSelf: 'start',
        textAlign: 'center',
        padding: 50,
        paddingTop: 50,
        paddingBottom: 50,
        height: 'calc(100% - 100px)',
        [MediaQuery.desktop]: {
            alignSelf: 'center'
        },
        '& h1': {
            fontFamily: 'Imperator',
            color: primary,
            margin: '0 0 20 0'
        }
    },
    BridesmaidsContent: {
        overflowY: 'auto',
        height: 'calc(100% - 100px)',
        paddingTop: 50,
        paddingBottom: 50,
        [MediaQuery.desktop]: {
            overflow: 'hidden'
        }
    }
};
