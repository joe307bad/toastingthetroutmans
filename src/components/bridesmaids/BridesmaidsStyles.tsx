import { Styles, withTheme } from 'react-jss';

import { primary } from '../../theme';
import { Device, MediaQuery } from '../../theme/Breakpoints';

export type BridesmaidsClasses =
    'BridesmaidsContainer' |
    'Bridesmaids' |
    'Person';

/**
 * The Styles for the Home Component
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
        alignSelf: 'center',
        textAlign: 'center'
    }
};
