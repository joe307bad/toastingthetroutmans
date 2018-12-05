/**
 * Media queries/breakpoints for responsiveness
 */

export const Breakpoints: { [key: string]: number } = {
  xl: 1540,
  desktop: 1280,
  tablet: 768,
  mobile: 374
};

export const MediaQuery: { [key: string]: string } = {
  xl: `@media (min-width: ${Breakpoints.xl}px)`,
  desktop: `@media (min-width: ${Breakpoints.desktop}px)`,
  tablet: `@media (min-width: ${Breakpoints.tablet}px)`,
  mobile: `@media (min-width: ${Breakpoints.mobile}px)`
};

export const Device: { [key: string]: string } = {
  iphonex: '@media (min-height: 812px)',
  landscape: `@media (max-width: 830px) and (orientation: landscape)`
};
