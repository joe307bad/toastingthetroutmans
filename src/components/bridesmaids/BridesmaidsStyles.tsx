import { Styles } from 'react-jss';

import { primary } from '../../theme';
import { MediaQuery } from '../../theme/Breakpoints';

export type BridesmaidsClasses =
    'BridesmaidsContainer' |
    'Bridesmaids' |
    'Person' |
    'BridesmaidsContent' |
    'FlowerPic5' |
    'FlowerPic6';

/**
 * The Styles for the Bridesmaids Component
 */
export const BridesmaidsStyles: Styles<BridesmaidsClasses> = {
    Person: {
        width: 250,
        textAlign: 'center',
        padding: 10,
        margin: '0 auto',
        display: 'inline-block',
        '& h2': {
            fontFamily: 'Imperator',
            color: primary,
            marginBottom: 0,
            fontSize: 15,
            [MediaQuery.tablet]: {
                fontSize: 20
            }
        },
        '& p': {
            textAlign: 'center',
            marginTop: 0,
            marginBottom: 0
        },
        '& img': {
            width: 200,
            borderRadius: '50%',
            boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)'
        },
        [MediaQuery.tablet]: {
            width: 150
        },
        [MediaQuery.desktop]: {
            width: 300
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
        width: '100%',
        '& h1': {
            fontFamily: 'Imperator',
            color: primary,
            margin: '0 0 20 0'
        }
    },
    BridesmaidsContent: {
        paddingTop: 50,
        paddingBottom: 50
    },
    FlowerPic5: {
        width: 300,
        position: 'absolute',
        right: -50,
        bottom: -100
    },
    FlowerPic6: {
        width: 300,
        position: 'absolute',
        left: -150,
        top: -100
    }
};
