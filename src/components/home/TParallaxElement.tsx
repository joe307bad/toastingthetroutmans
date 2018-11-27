import { Parallax } from 'react-spring';

/**
 * Type for Parallax Element
 */
export type TParallaxElement = Parallax<{}, {}> & {
    container: HTMLDivElement;
    scrollTo(posiiton: number): void;
};
