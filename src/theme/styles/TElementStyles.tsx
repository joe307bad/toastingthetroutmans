import * as React from 'react';

/**
 * Type for auditing elements with root styles, root breakpoints, and child element with
 * the previous two and also children of their own
 */
export type TElementStyles = React.CSSProperties | { [key: string ] : React.CSSProperties };
