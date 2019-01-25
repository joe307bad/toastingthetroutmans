import { Styles } from 'react-jss';

import { primary } from '../../theme';
import { MediaQuery } from '../../theme/Breakpoints';

export type CreditClasses =
    'CreditsContainer';

/**
 * The Styles for the Credits Component
 */
export const CreditStyles: Styles<CreditClasses> = {
    CreditsContainer: {
        textAlign: 'center',
        zIndex: 3,
        position: 'relative',
        left: 0,
        [MediaQuery.tablet]: {
            transition: '.5s all',
            position: 'fixed',
            width: '100%',
            bottom: -169,
            backgroundColor: 'white',
            zIndex: 1,
            padding: '30px 20px 20px 20px',
            '&.creditsOpen': {
                bottom: 0
            }
        },
        '& h2': {
            fontSize: 20,
            margin: 0,
            fontFamily: 'Imperator',
            color: primary
        },
        '& p': {
            margin: 0,
            fontSize: 20,
            fontFamily: 'serif',
            [MediaQuery.tablet]: {
                padding: '10px 0px 10px 0px'
            }
        },
        '& a': {
            fontFamily: 'serif',
            fontSize: 15,
            [MediaQuery.tablet]: {
                fontSize: 20
            }
        },
        '& ul': {
            padding: 0,
            margin: '0px 0px 50px 0px',
            [MediaQuery.tablet]: {
                display: 'flex',
                justifyContent: 'space-evenly',
                marginBottom: 0
            }
        },
        '& li': {
            listStyle: 'none',
            marginBottom: 30,
            [MediaQuery.tablet]: {
                marginBottom: 0,
                display: 'inline-block'
            }
        }
    }
};
