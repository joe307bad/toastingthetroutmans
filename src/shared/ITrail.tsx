/**
 * Type def for React-spring Trail
 */
export interface ITrail {
    x: { interpolate(callback: (transition: number) => string): string };
    opacity: number;
}
