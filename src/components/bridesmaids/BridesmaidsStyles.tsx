import { Styles, withTheme } from 'react-jss';

import { primary } from '../../theme';
import { Device, MediaQuery } from '../../theme/Breakpoints';

export type BridesmaidsClasses =
    'Person';

/**
 * The Styles for the Home Component
 */
export const BridesmaidsStyles: Styles<BridesmaidsClasses> = {
    Person: {
        width: 300,
        textAlign: 'center',
        padding: 10,
        '& h2': {
            fontFamily: 'Imperator',
            color: primary
        },
        '& p': {
            textAlign: 'left',
            fontFamily: 'Verdana, Geneva, sans-serif',
            backgroundColor: 'white',
            padding: 10,
            fontSize: 12,
            boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)'
        },
        '& img': {
            width: 100,
            borderRadius: '50%'
        }
    }
};
