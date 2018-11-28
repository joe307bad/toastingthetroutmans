import * as React from 'react';

import { Breakpoints } from '../../theme';
import { TElementStyles } from '../../theme/styles/TElementStyles';

interface IHomeStyles extends React.CSSProperties {
    SamAndShaun_1_Landscape: TElementStyles;
}

/**
 * The Styles for the Home Component
 */
export const Styles: IHomeStyles = {
    [Breakpoints.desktop]: {
        backgroundColor: 'black',
        marginTop: 500
    },
    SamAndShaun_1_Landscape: {
        width: 500,
        marginRight: '40%',
        transform: 'rotate(-10deg)',
        backgroundColor: 'white',
        padding: 10,
        display: 'block',
        boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
        [Breakpoints.tablet]: {
            width: 800
        },
        [Breakpoints.desktop]: {
            width: 500
        }
    }
};
