import * as React from 'react';

import injectSheet, { StyledComponentProps } from 'react-jss';
import { animated, ParallaxLayer, Trail } from 'react-spring';
import { GroomsmenPhotos, Photos } from '../../assets/photos/Photos';
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
        photo: GroomsmenPhotos.Luke,
        name: 'Luke Walker',
        role: 'Best Man',
        description: `Friend of the Groom`
    },
    {
        photo: GroomsmenPhotos.Andrew,
        name: 'Andrew Valentine',
        description: `Friend of the Groom`
    },
    {
        photo: GroomsmenPhotos.Joe,
        name: 'Joe Badaczewski',
        description: `Brother of the Bride`
    },
    {
        photo: GroomsmenPhotos.Drew,
        name: 'Andrew Cerjanic',
        description: `Cousin of the Bride`
    },
    {
        photo: GroomsmenPhotos.Everett,
        name: 'Everett Cerjanic',
        role: `Ring Bearer`,
        description: `Nephew of the Bride`
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
            <div>
                <ParallaxLayer offset={3} speed={0.25}>
                    <img
                        alt='FlowerPic5'
                        src={Photos.FlowerPic7}
                        className={classes.FlowerPic7} />
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0.25}>
                    <img
                        alt='FlowerPic5'
                        src={Photos.FlowerPic8}
                        className={classes.FlowerPic8} />
                </ParallaxLayer>
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
            </div>
        );
    }

    private stopScrollPropagation: (e: React.UIEvent<HTMLDivElement>) => void =
        (e: React.UIEvent<HTMLDivElement>): void => {
            e.stopPropagation();
        }
}

export const Groomsmen: React.ComponentType<Pick<{}, never> & StyledComponentProps>
    = injectSheet(GroomsmenStyles)(GroomsmenComponent);
