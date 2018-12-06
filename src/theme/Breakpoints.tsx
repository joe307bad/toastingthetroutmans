/**
 * Media queries/breakpoints for responsiveness
 */

export const Breakpoints: { [key: string]: number } = {
  xl: 1540,
  desktop: 1280,
  xltablet: 1024,
  tablet: 768,
  mobile: 374
};

export const MediaQuery: { [key: string]: string } = {
  xl: `@media (min-width: ${Breakpoints.xl}px)`,
  desktop: `@media (min-width: ${Breakpoints.desktop}px)`,
  xltablet: `@media (min-width: ${Breakpoints.xltablet}px) and (min-height: 1366px)`,
  tablet: `@media (min-width: ${Breakpoints.tablet}px)`,
  mobile: `@media (min-width: ${Breakpoints.mobile}px)`
};

export const Device: { [key: string]: string } = {
  iphonex: '@media (min-height: 812px)',
  iphonexLandscape: '@media (min-width: 812px) and (min-height: 375px)',
  pixel2xlLandscape: '@media (min-height: 411px) and (min-width: 823px)',
  phoneLandscape: `@media (max-width: 830px) and (orientation: landscape)`,
  tabletLandscape: `@media (max-width: 1024px) and (orientation: landscape)`,
  ipadProLandscape: '@media (min-width: 1366px) and (min-height: 1024px)'
};
