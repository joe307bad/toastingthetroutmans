import { Styles } from 'react-jss';

import { primary } from '../../theme';
import { MediaQuery } from '../../theme/Breakpoints';

export type CountdownClasses =
    'CountdownContainer' ;

/**
 * The Styles for the Groomsmen Component
 */
export const CountdownStyles: Styles<CountdownClasses> = {
    CountdownContainer: {
        textAlign: 'center'
    }
};
