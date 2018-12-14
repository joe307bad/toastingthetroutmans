import * as React from 'react';

import injectSheet, { StyledComponentProps } from 'react-jss';
import { animated, ParallaxLayer, Trail } from 'react-spring';
import { BridesmaidsClasses, BridesmaidsStyles } from './BridesmaidsStyles';
import { IPerson, Person } from './Person';

interface IBridesmaidsProps {
    classes: Record<BridesmaidsClasses, string>;
}

interface IBridesmaidsState {
    toggle: boolean;
}

const bridesmaids: IPerson[] = [
    {
        // tslint:disable-next-line:no-http-string
        photo: 'http://techplace.ca/wp-content/uploads/2016/11/woman.png',
        name: 'Courtney Cerjanic',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua..`
    },
    {
        // tslint:disable-next-line:no-http-string
        photo: 'http://techplace.ca/wp-content/uploads/2016/11/woman.png',
        name: 'Jamie Badaczewski',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.`
    },
    {
        // tslint:disable-next-line:no-http-string
        photo: 'http://techplace.ca/wp-content/uploads/2016/11/woman.png',
        name: 'Jamie Badaczewski',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.`
    },
    {
        // tslint:disable-next-line:no-http-string
        photo: 'http://techplace.ca/wp-content/uploads/2016/11/woman.png',
        name: 'Jamie Badaczewski',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.`
    },
    {
        // tslint:disable-next-line:no-http-string
        photo: 'http://techplace.ca/wp-content/uploads/2016/11/woman.png',
        name: 'Jamie Badaczewski',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.`
    },
    {
        // tslint:disable-next-line:no-http-string
        photo: 'http://techplace.ca/wp-content/uploads/2016/11/woman.png',
        name: 'Jamie Badaczewski',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.`
    },
    {
        // tslint:disable-next-line:no-http-string
        photo: 'http://techplace.ca/wp-content/uploads/2016/11/woman.png',
        name: 'Jamie Badaczewski',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.`
    }
];

type TInterpolateFunc = (callback: (progress: number) => string) => string;
type TTrailFunc = (x: { interpolate: TInterpolateFunc }, opacity: number) => JSX.Element;

/**
 * Bridesmaids Component
 */
export class BridesmaidsComponent extends React.Component<IBridesmaidsProps, IBridesmaidsState> {

    public state: IBridesmaidsState = { toggle: false };

    // tslint:disable-next-line:typedef
    public toggle = () => this.setState(state => ({ toggle: !state.toggle }));

    public render(): JSX.Element {
        const classes: Record<BridesmaidsClasses, string> = this.props.classes;

        return (
            <ParallaxLayer className={classes.BridesmaidsContainer} offset={2} speed={1}>
                <div className={classes.Bridesmaids}>
                    {/* {bridesmaids.map((person: IPerson, key: number) =>
                        <Person key={key} classes={classes} person={person} />)} */}
                    {/* <Trail
                        native
                        reverse={this.toggle}
                        initial={null}
                        items={['']}
                        from={{ opacity: 0, x: -100 }}
                        to={{ opacity: this.toggle ? 1 : 0.25, x: this.toggle ? 0 : 100 }}>
                        {(person: IPerson): TTrailFunc =>
                            (x: { interpolate: TInterpolateFunc }, opacity: number): JSX.Element => (
                                <animated.div
                                    className='box'
                                    onClick={this.toggle}
                                    style={{
                                        opacity,
                                        transform: x.interpolate((progress: number) =>
                                            `translate3d(${progress}%,0,0)`)
                                    }} />
                            )}
                    </Trail> */}
                    <Trail
                        native
                        from={{ opacity: 0, x: -100 }}
                        to={{ opacity: this.toggle ? 1 : 0.25, x: this.toggle ? 0 : 100 }}
                        keys={bridesmaids.map((b: IPerson, key: number) => key)}>
                        {bridesmaids.map((item: IPerson) => ({ x, opacity }: any) => (
                            <animated.div
                                className='box'
                                onClick={this.toggle}
                                style={{
                                    opacity,
                                    transform: x.interpolate((x: any) => `translate3d(${x}%,0,0)`)
                                }}
                            />
                        ))}

                    </Trail>

                </div>
            </ParallaxLayer>
        );
    }
}

export const Bridesmaids: React.ComponentType<Pick<{}, never> & StyledComponentProps>
    = injectSheet(BridesmaidsStyles)(BridesmaidsComponent);
