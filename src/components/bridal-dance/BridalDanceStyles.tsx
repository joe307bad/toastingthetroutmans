import { Styles } from 'react-jss';

import { primary } from '../../theme';
import { Device, MediaQuery } from '../../theme/Breakpoints';

export type BridalDanceClasses =
    'BridalDanceContainer' |
    'BridalDance' |
    'FlowerPic11' |
    'FlowerPic12';

/**
 * The Styles for the Bridal Dance Component
 */
export const BridalDanceStyles: Styles<BridalDanceClasses> = {
    BridalDanceContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        marginTop: 60
    },
    BridalDance: {
        width: '100%',
        maxWidth: 600,
        '& h1': {
            fontFamily: 'Imperator',
            color: primary,
            textAlign: 'center'
        },
        '& > div': {
            backgroundColor: 'white',
            border: `2px solid ${primary}`,
            padding: '10px 20px 20px 20px'
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
    }
};
