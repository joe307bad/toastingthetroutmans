import { Styles } from 'react-jss';
import { primary } from '../../theme';

export type VenueClasses =
    'VenueContainer' |
    'Venue' |
    'Church_1' |
    'Flowers' |
    'GoogleMap';

/**
 * The Styles for the Venue Component
 */
export const VenueStyles: Styles<VenueClasses> = {
    VenueContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        '& h1': {
            fontFamily: 'Imperator',
            color: primary,
            margin: '0 0 40px 0'
        }
    },
    Venue: {
        textAlign: 'center',
        width: '100%',
        '& iframe': {
            boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
            backgroundColor: 'white',
            padding: 10,
            width: 'calc(100% - 40px)'
        }
    },
    GoogleMap: {
        maxWidth: 620,
        width: '100%',
        margin: '0 auto'
    },
    Church_1: {
        position: 'relative',
        margin: '0 auto',
        display: 'block',
        right: -400,
        top: 100,
        transform: 'rotate(25deg)',
        backgroundColor: 'white',
        boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
        padding: 10
    },
    Flowers: {
        position: 'relative',
        margin: '0 auto',
        display: 'block',
        right: 400,
        top: 50,
        transform: 'rotate(10deg)',
        padding: 10
    }
};
