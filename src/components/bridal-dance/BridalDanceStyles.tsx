import { Styles } from 'react-jss';

import { primary } from '../../theme';
import { Device, MediaQuery } from '../../theme/Breakpoints';

export type BridalDanceClasses =
    'BridalDanceContainer' |
    'BridalDance' |
    'FlowerPic11' |
    'FlowerPic12' |
    'MomAndDad' |
    'MomAndDad1' |
    'MomWithBojo';

/**
 * The Styles for the Bridal Dance Component
 */
export const BridalDanceStyles: Styles<BridalDanceClasses> = {
    BridalDanceContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        [MediaQuery.tablet]: {
            marginTop: 60
        }
    },
    BridalDance: {
        width: '100%',
        maxWidth: 600,
        fontFamily: 'Imperator',
        '& h1': {
            fontFamily: 'Imperator',
            color: primary,
            textAlign: 'center'
        },
        '& > div': {
            backgroundColor: 'white',
            border: `2px solid ${primary}`,
            padding: '10px 20px 20px 20px',
            boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)'
        },
        '& iframe': {
            width: 300,
            height: 200,
            minHeight: 200,
            border: 0,
            display: 'block',
            margin: '0 auto'
        }
    },
    FlowerPic11: {
        opacity: 0.5,
        width: 300,
        position: 'absolute',
        right: -50,
        bottom: -100,
        [MediaQuery.tablet]: {
            opacity: 1
        }
    },
    FlowerPic12: {
        opacity: 0.5,
        width: 300,
        position: 'absolute',
        left: -50,
        top: -100,
        [MediaQuery.tablet]: {
            opacity: 1
        }
    },
    MomAndDad: {
        display: 'none',
        border: '5px solid white',
        boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
        width: 250,
        bottom: 400,
        position: 'relative',
        margin: '0 auto',
        right: 400,
        top: 100,
        transform: 'rotate(-15deg)',
        [MediaQuery.tablet]: {
            display: 'block'
        }
    },
    MomAndDad1: {
        display: 'none',
        border: '5px solid white',
        boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
        width: 300,
        bottom: 400,
        position: 'relative',
        margin: '0 auto',
        right: 400,
        top: 500,
        transform: 'rotate(-10deg)',
        [MediaQuery.tablet]: {
            display: 'block'
        }
    },
    MomWithBojo: {
        display: 'none',
        border: '5px solid white',
        boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
        width: 400,
        bottom: 100,
        position: 'relative',
        margin: '0 auto',
        left: 450,
        top: 300,
        transform: 'rotate(15deg)',
        [MediaQuery.tablet]: {
            display: 'block'
        }
    }
};
