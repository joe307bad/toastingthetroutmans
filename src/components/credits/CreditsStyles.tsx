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
        '& .specialThanks': {
            paddingBottom: 20,
            paddingTop: 50,
            border: 0,
            [MediaQuery.tablet]: {
                display: 'none'
            }
        },
        '& h2': {
            borderBottom: `2px dotted ${primary}`,
            fontSize: 20,
            display: 'inline-block',
            fontFamily: 'Imperator',
            color: primary,
            margin: '0px auto 5px 0px',
            paddingBottom: 5
        },
        '& p': {
            borderBottom: `2px dotted ${primary}`,
            display: 'inline-block',
            fontSize: 20,
            fontFamily: 'serif',
            margin: 0,
            paddingBottom: 5
        },
        '& a': {
            display: 'inline-block',
            textAlign: 'center',
            fontFamily: 'serif',
            fontSize: 15,
            color: primary,
            textDecoration: 'none',
            [MediaQuery.tablet]: {
                fontSize: 20
            }
        },
        '& ul': {
            padding: 0,
            margin: '0px 0px 50px 0px',
            [MediaQuery.tablet]: {
                marginBottom: 0
            }
        },
        '& li': {
            listStyle: 'none',
            marginBottom: 30,
            [MediaQuery.tablet]: {
                marginBottom: 10,
                width: '25%',
                display: 'inline-block'
            }
        }
    }
};
