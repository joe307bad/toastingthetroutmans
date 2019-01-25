import { Styles } from 'react-jss';
import { primary, MediaQuery } from '../../theme';
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
    'HotelTab' |
    'ChurchTab' |
    'ReceptionTab';

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
            marginBottom: 2
        },
        '& .tab p': {
            fontSize: 15,
            backgroundColor: 'white',
            padding: '15px 0px 7px 0px',
            height: 20,
            margin: 0,
            [MediaQuery.tablet]: {
                fontSize: 20,
                padding: 20,
            }
        },
        '& .tabContent': {
            float: 'left',
            width: 'calc(100% - 4px)',
            display: 'none',
            backgroundColor: 'white',
            marginTop: -5,
            borderWidth: '0px 2px 2px 2px',
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
        },
        '& h2': {
            fontFamily: 'Imperator',
            color: primary,
            fontSize: 30
        },
        '& .venueLink': {
            color: primary,
            fontFamily: 'Imperator',
            fontSize: 20,
            textDecoration: 'none',
            lineHeight: '39px',
            marginTop: 10,
            width: 250,
            margin: '10px auto',
            '& span': {
                borderBottom: `2px dotted ${primary}`
            }
        },
        '& .venueButton': {
            display: 'block',
            marginTop: 20,
            marginBottom: 10,
            border: `2px solid ${primary}`,
            padding: 20,
            color: primary,
            fontFamily: 'Imperator',
            fontSize: 20,
            textDecoration: 'none',
            width: 200,
            margin: '0 auto 25px',
            height: 20
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
        width: `calc(${100 / props.numberOfTabs}% - 2.5px)`,
        display: 'inline-block',
        fontFamily: 'Imperator',
        fontSize: 20,
        textAlign: 'center',
        cursor: 'pointer',
        borderWidth: '2px 0px 2px 2px',
        borderColor: primary,
        borderStyle: 'solid',
        float: 'left'
    }),
    LastVenueTab: {
        borderRight: `2px solid ${primary} !important`
    },
    ScheduleTab: {
        padding: 20,
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
            paddingLeft: 20,
            lineHeight: '26px'
        }
    },
    HotelTab: {
        textAlign: 'center',
        width: '100%',
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
    ChurchTab: {
        textAlign: 'center',
        width: '100%'
    },
    ReceptionTab: {
        textAlign: 'center',
        width: '100%'
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
