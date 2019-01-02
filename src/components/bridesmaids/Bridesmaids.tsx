import * as React from 'react';

import injectSheet, { StyledComponentProps } from 'react-jss';
import { animated, ParallaxLayer, Trail } from 'react-spring';
import { IPerson, Person } from '../../shared/Person';
import { BridesmaidsClasses, BridesmaidsStyles } from './BridesmaidsStyles';

interface IBridesmaidsProps {
    classes: Record<BridesmaidsClasses, string>;
    active: boolean;
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

/**
 * Bridesmaids Component
 */
export class BridesmaidsComponent extends React.Component<IBridesmaidsProps, IBridesmaidsState> {

    public state: IBridesmaidsState = { toggle: false };

    public toggle = (): void => {
        this.setState((state: IBridesmaidsState) => ({ toggle: !state.toggle }));
    }
    public componentWillReceiveProps = (nextProps: IBridesmaidsProps): void => {

        this.setState({
            toggle: nextProps.active
        });
    }

    public render(): JSX.Element {
        const classes: Record<BridesmaidsClasses, string> = this.props.classes;

        return (
            <ParallaxLayer className={classes.BridesmaidsContainer} offset={2} speed={1}>
                <div className={classes.Bridesmaids} onScroll={this.stopScrollPropagation}>
                    <div className={classes.BridesmaidsContent}>
                        <h1>The Bridesmaids</h1>
                        <Trail
                            native={true}
                            from={{ opacity: 0, x: -100 }}
                            to={{ opacity: this.state.toggle ? 1 : 0, x: this.state.toggle ? 0 : 100 }}
                            keys={bridesmaids.map((b: IPerson, key: number) => key)}>
                            {bridesmaids.map((person: IPerson, key: number) => ({ x, opacity }: any): JSX.Element => (
                                <animated.div className={classes.Person} style={{
                                    opacity,
                                    transform: x.interpolate((transition: number) =>
                                        `translate3d(0,${transition}%,0)`)
                                }} >
                                    <Person key={key} classes={classes} person={person} />
                                </animated.div>
                            ))}
                        </Trail>
                    </div>
                </div>
            </ParallaxLayer>
        );
    }

    private stopScrollPropagation: (e: React.UIEvent<HTMLDivElement>) => void =
        (e: React.UIEvent<HTMLDivElement>): void => {
            e.stopPropagation();
        }
}

export const Bridesmaids: React.ComponentType<Pick<{}, never> & StyledComponentProps>
    = injectSheet(BridesmaidsStyles)(BridesmaidsComponent);
