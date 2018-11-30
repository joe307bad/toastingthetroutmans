import { Styles } from 'react-jss';

import { Breakpoints } from '../../theme';

export type HomeClasses =
    'SamAndShaun_1_Landscape';

/**
 * The Styles for the Home Component
 */
export const HomeStyles: Styles<HomeClasses> = {
    // [Breakpoints.desktop]: {
    //     backgroundColor: 'black',
    //     marginTop: 500
    // },
    SamAndShaun_1_Landscape: {
        // width: 800,
        // marginRight: 0,
        // transform: 'rotate(-10deg)',
        // backgroundColor: 'white',
        // padding: 10,
        // display: 'block',
        // boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
        // parallaxOffset: 0.35,
        // marginTop: -400,
        width: 500,
        [Breakpoints.mobile]: {
            border: '20px solid blue'
        },
        [Breakpoints.desktop]: {
            border: '20px solid green'
            //width: 500
        },
        [Breakpoints.tablet]: {
            border: '20px solid red'
            //width: 800
        }
    }
    // SamAndShaun_3_Landscape: {
    //     [Breakpoints.mobile]: {
    //         width: 500,
    //         marginRight: 0,
    //         transform: 'rotate(10deg)',
    //         backgroundColor: 'white',
    //         padding: 10,
    //         display: 'block',
    //         boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
    //         parallaxOffset: 0,
    //         marginTop: -400
    //     },
    //     [Breakpoints.tablet]: {
    //         width: 800
    //     },
    //     [Breakpoints.desktop]: {
    //         width: 500
    //     }
    // }
};
