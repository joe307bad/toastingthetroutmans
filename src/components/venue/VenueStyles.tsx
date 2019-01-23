import { Styles } from 'react-jss';
import { primary } from '../../theme';
import { IVenueProps, numberOfTabs } from './Venue';

export type VenueClasses =
    'VenueContainer' |
    'Venue' |
    'Church_1' |
    'Flowers' |
    'GoogleMap' |
    'VenueTabs' |
    'VenueTab' |
    'LastVenueTab' |
    'ScheduleTab' |
    'HotelTab';

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
        maxWidth: 600,
        boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
        '& iframe': {
            backgroundColor: 'white',
            padding: 10,
            width: 'calc(100% - 40px)'
        },
        '& .activeTab': {
            display: 'flex !important',
            alignItems: 'center'
        },
        '& .tab.activeTab': {
            display: 'inline-block !important',
            borderBottom: '0px !important'
        },
        '& .tab.activeTab p': {
            marginBottom: 5
        },
        '& .tab p': {
            backgroundColor: 'white',
            padding: 20,
            height: 20,
            margin: 0
        },
        '& .tabContent': {
            float: 'left',
            width: 'calc(100% - 10px)',
            display: 'none',
            backgroundColor: 'white',
            marginTop: -5,
            borderWidth: '0px 5px 5px 5px',
            borderStyle: 'solid',
            borderColor: primary,
            minHeight: 530,
            position: 'relative'
        },
        '& i:not(.fas)': {
            fontStyle: 'normal',
            paddingBottom: 6,
            cursor: 'pointer',
            borderBottom: `2px dotted ${primary}`
        }
    },
    VenueTabs: {
        margin: 0,
        padding: 0,
        zIndex: 1,
        position: 'relative'
    },
    // @ts-ignore
    VenueTab: (props: IVenueProps): CSSProperties => ({
        width: `calc(${100 / props.numberOfTabs}% - 6.25px)`,
        display: 'inline-block',
        fontFamily: 'Imperator',
        fontSize: 20,
        textAlign: 'center',
        cursor: 'pointer',
        borderWidth: '5px 0px 5px 5px',
        borderColor: primary,
        borderStyle: 'solid',
        float: 'left'
    }),
    LastVenueTab: {
        borderRight: `5px solid ${primary} !important`
    },
    ScheduleTab: {
        '& ul': {
            margin: 0
        },
        '& li': {
            listStyle: 'none',
            textAlign: 'left'
        },
        '& span': {
            fontFamily: 'Imperator',
            fontSize: 15,
            fontWeight: 'bold',
            color: primary
        },
        '& div': {
            paddingTop: 10,
            paddingBottom: 20,
            paddingLeft: 20
        }
    },
    HotelTab: {
        textAlign: 'center',
        width: '100%',
        '& h2': {
            fontFamily: 'Imperator',
            color: primary,
            fontSize: 30
        },
        '& .bookNowButton': {
            display: 'block',
            marginTop: 20,
            border: `2px solid ${primary}`,
            padding: 20,
            color: primary,
            fontFamily: 'Imperator',
            fontSize: 20,
            textDecoration: 'none',
            width: 180,
            margin: '0 auto 25px',
            height: 20
        },
        '& .hotelLink': {
            color: primary,
            fontFamily: 'Imperator',
            fontSize: 20,
            textDecoration: 'none',
            lineHeight: '39px',
            marginTop: 10,
            width: 226,
            margin: '10px auto',
            '& span': {
                borderBottom: `2px dotted ${primary}`
            }
        },
        '& .hotelWarning': {
            color: primary,
            margin: '0 auto',
            fontSize: 18,
            width: 300,
            '& i': {
                paddingRight: 10
            }
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
