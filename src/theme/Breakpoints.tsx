/**
 * Media queries/breakpoints for responsiveness
 */

export const Breakpoints: { [key: string]: number } = {
  xl: 1280,
  desktop: 1024,
  tablet: 768,
  mobile: 400
}

export const MediaQueries: { [key: string]: string } = {
  xl: `@media screen and (min-width: ${Breakpoints.xl}px)`,
  desktop: `@media screen and (min-width: ${Breakpoints.desktop}px)`,
  tablet: `@media screen and (min-width: ${Breakpoints.tablet}px)`,
  mobile: `@media screen and (min-width: ${Breakpoints.mobile}px)`
};
