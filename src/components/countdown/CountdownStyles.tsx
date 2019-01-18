import { Styles } from 'react-jss';

import { primary } from '../../theme';
import { MediaQuery } from '../../theme/Breakpoints';
import { Countdown } from './Countdown';

export type CountdownClasses =
    'CountdownContainer' |
    'CountdownButton' |
    'Countdown';

/**
 * The Styles for the Groomsmen Component
 */
export const CountdownStyles: Styles<CountdownClasses> = {
    CountdownContainer: {
        textAlign: 'center'
    },
    CountdownButton: {
        position: 'fixed',
        bottom: 15,
        left: '50%',
        marginLeft: -20,
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: 'white',
        zIndex: 2,
        textAlign: 'center',
        cursor: 'pointer',
        transition: '.5s all',
        opacity: 0,
        '&:before': {
            content: '\f252',
            verticalAlign: 'middle',
            height: '100%',
            marginTop: '12px',
            display: 'block',
            opacity: 0.5
        }
    },
    Countdown: {
        top: '50%',
        position: 'absolute',
        width: 220,
        left: '50%',
        marginLeft: -110,
        marginTop: -55,
        whiteSpace: 'nowrap',
        transition: '2s all'
        // opacity: 0
    }
};
