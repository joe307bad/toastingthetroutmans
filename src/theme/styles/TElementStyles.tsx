import * as React from 'react';

/**
 * Styles for parallax elements that contain all
 * React.CSSProperties plus some specific react-spring properties
 */
export type TParallaxStyles = React.CSSProperties & {
    parallaxOffset?: number;
};

/**
 * Type for auditing elements with root styles, root breakpoints, and child element with
 * the previous two and also children of their own
 */
export type TElementStyles = React.CSSProperties |
{ [key: string]: React.CSSProperties | TParallaxElement };

export type TParallaxElement = React.CSSProperties & {
    parallaxOffset?: number;
};
