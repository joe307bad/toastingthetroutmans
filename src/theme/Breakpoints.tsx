/**
 * Media queries/breakpoints for responsiveness
 */

export const Breakpoints: { [key: string]: number } = {
  xl: 1540,
  desktop: 1280,
  xltablet: 1100,
  tablet: 768,
  mobile: 440
};

export const MediaQuery: { [key: string]: string } = {
  xl: `@media (min-width: ${Breakpoints.xl}px)`,
  desktop: `@media (min-width: ${Breakpoints.desktop}px)`,
  xltablet: `@media (min-width: ${Breakpoints.xltablet}px) and (min-height: 1366px)`,
  tablet: `@media (min-width: ${Breakpoints.tablet}px)`,
  mobile: `@media (min-width: ${Breakpoints.mobile}px)`
};

export const LandscapeQuery: { [key: string]: string } = {
    xl: `@media (min-height: ${Breakpoints.xl}px)`,
    desktop: `@media (min-height: ${Breakpoints.desktop}px)`,
    xltablet: `@media (min-height: ${Breakpoints.xltablet}px) and (min-height: 1366px)`,
    tablet: `@media (min-height: ${Breakpoints.tablet}px)`,
    mobile: `@media (min-height: ${Breakpoints.mobile}px)`,
}

export const Device: { [key: string]: string } = {
  landscape: `@media (orientation: landscape) and (max-height: 767px)`,
  iphonex: `@media (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio : 3)`
};
