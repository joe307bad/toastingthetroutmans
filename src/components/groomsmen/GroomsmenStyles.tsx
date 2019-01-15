import { Styles } from 'react-jss';

import { primary } from '../../theme';
import { MediaQuery } from '../../theme/Breakpoints';

export type GroomsmenClasses =
    'GroomsmenContainer' |
    'Groomsmen' |
    'Person' |
    'GroomsmensContent' |
    'FlowerPic7' |
    'FlowerPic8';

/**
 * The Styles for the Groomsmen Component
 */
export const GroomsmenStyles: Styles<GroomsmenClasses> = {
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
            width: 250,
            height: 250,
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
            position: 'relative',
            '& .altPhoto': {
                width: '100%',
                position: 'absolute',
                top: 0
            }
        },
        [MediaQuery.tablet]: {
            width: 250,
            height: 250
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
        paddingTop: 50,
        paddingBottom: 50,
        alignSelf: 'center',
        width: '100%'
    },
    FlowerPic7: {
        opacity: 0.5,
        width: 300,
        position: 'absolute',
        right: -50,
        top: -100,
        [MediaQuery.tablet]: {
            opacity: 1
        }
    },
    FlowerPic8: {
        opacity: 0.5,
        width: 300,
        position: 'absolute',
        left: -50,
        bottom: -100,
        [MediaQuery.tablet]: {
            opacity: 1
        }
    }
};
