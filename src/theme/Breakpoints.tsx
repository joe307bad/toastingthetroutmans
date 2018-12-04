/**
 * Media queries/breakpoints for responsiveness
 */

export const Breakpoints: { [key: string]: number } = {
  xl: 1280,
  desktop: 1024,
  tablet: 768,
  mobile: 374
};

export const MediaQueries: { [key: string]: string } = {
  xl: `@media (min-width: ${Breakpoints.xl}px)`,
  desktop: `@media (min-width: ${Breakpoints.desktop}px)`,
  tablet: `@media (min-width: ${Breakpoints.tablet}px)`,
  mobile: `@media (min-width: ${Breakpoints.mobile}px)`
};

export const Device: { [key: string]: string } = {
  iphonex: '@media (min-height: 812px)'
};
