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
        width: 100,
        textAlign: 'center',
        padding: 10,
        margin: '0 auto',
        display: 'inline-block',
        verticalAlign: 'top',
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
            width: '100%',
            borderRadius: '50%'
        },
        '& .imageContainer': {
            width: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
            position: 'relative',
            '& .altPhoto': {
                position: 'absolute',
                top: 0
            }
        },
        [MediaQuery.tablet]: {
            width: 250
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
        opacity: 0.5,
        width: 300,
        position: 'absolute',
        right: -50,
        bottom: -100,
        [MediaQuery.tablet]: {
            opacity: 1
        }
    },
    FlowerPic6: {
        opacity: 0.5,
        width: 300,
        position: 'absolute',
        left: -150,
        top: -100,
        [MediaQuery.tablet]: {
            opacity: 1
        }
    }
};
