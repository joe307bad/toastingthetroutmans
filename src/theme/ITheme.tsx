/**
 * Theme interface for passing around the theme properties
 */
export interface ITheme {
    main: React.CSSProperties;
    nav: React.CSSProperties;
    navChild: React.CSSProperties;
    currentPageMarker: React.CSSProperties;
    currentPageMarkerAccent: React.CSSProperties;
    mainContainer: React.CSSProperties;
}
