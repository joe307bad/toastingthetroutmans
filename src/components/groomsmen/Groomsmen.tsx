import * as React from 'react';

import injectSheet, { StyledComponentProps } from 'react-jss';
import { animated, ParallaxLayer, Trail } from 'react-spring';
import { IPerson, Person } from '../../shared/Person';
import { GroomsmenClasses, GroomsmenStyles } from './GroomsmenStyles';

interface IGroomsmenProps {
    classes: Record<GroomsmenClasses, string>;
    active: boolean;
}

interface IGroomsmenState {
    toggle: boolean;
}

const groomsmen: IPerson[] = [
    {
        // tslint:disable-next-line:no-http-string
        photo: 'https://i2.wp.com/nellions.co.ke/wp-content/uploads/2018/06/male-placeholder-image.jpeg?ssl=1',
        name: 'Andrew Valentine',
        description: `Lorem ipsum dolor sit amet`
    },
    {
        // tslint:disable-next-line:no-http-string
        photo: 'https://i2.wp.com/nellions.co.ke/wp-content/uploads/2018/06/male-placeholder-image.jpeg?ssl=1',
        name: 'Joe Badaczewski',
        description: `Lorem ipsum dolor sit amet`
    }
];

/**
 * Groomsmen Component
 */
export class GroomsmenComponent extends React.Component<IGroomsmenProps, IGroomsmenState> {

    public state: IGroomsmenState = { toggle: false };

    public toggle = (): void => {
        this.setState((state: IGroomsmenState) => ({ toggle: !state.toggle }));
    }
    public componentWillReceiveProps = (nextProps: IGroomsmenProps): void => {

        this.setState({
            toggle: nextProps.active
        });
    }

    public render(): JSX.Element {
        const classes: Record<GroomsmenClasses, string> = this.props.classes;

        return (
            <ParallaxLayer className={classes.GroomsmenContainer} offset={3} speed={1}>
                <div className={classes.Groomsmen} onScroll={this.stopScrollPropagation}>
                    <div className={classes.GroomsmensContent}>
                        <h1>The Groomsmen</h1>
                        <Trail
                            native={true}
                            from={{ opacity: 0, x: -100 }}
                            to={{ opacity: this.state.toggle ? 1 : 0, x: this.state.toggle ? 0 : 100 }}
                            keys={groomsmen.map((b: IPerson, key: number) => key)}>
                            {groomsmen.map((person: IPerson, key: number) => ({ x, opacity }: any): JSX.Element => (
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

export const Groomsmen: React.ComponentType<Pick<{}, never> & StyledComponentProps>
    = injectSheet(GroomsmenStyles)(GroomsmenComponent);
