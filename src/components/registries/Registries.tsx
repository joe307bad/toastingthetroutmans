import * as React from 'react';

import injectSheet, { StyledComponentProps } from 'react-jss';
import { animated, ParallaxLayer, Trail } from 'react-spring';

import { Photos } from '../../assets/photos/Photos';
import { RegistriesClasses, RegistriesStyles } from './RegistriesStyles';

interface IRegistriesProps {
    classes: Record<RegistriesClasses, string>;
    active: boolean;
}

interface IRegistriesState {
    toggle: boolean;
}

interface IRegistry {
    name: string;
    photo: string;
}

const registries: IRegistry[] = [
    {
        name: 'Target',
        photo: Photos.Target
    },
    {
        name: 'Crate and Barrel',
        photo: Photos.CrateAndBarrel
    },
    {
        name: 'Zola',
        photo: Photos.Zola
    }
];

/**
 * Registries Component
 */
export class RegistriesComponent extends React.Component<IRegistriesProps, IRegistriesState> {

    public state: IRegistriesState = { toggle: false };

    public toggle = (): void => {
        this.setState((state: IRegistriesState) => ({ toggle: !state.toggle }));
    }
    public componentWillReceiveProps = (nextProps: IRegistriesProps): void => {

        this.setState({
            toggle: nextProps.active
        });
    }

    public render(): JSX.Element {
        const classes: Record<RegistriesClasses, string> = this.props.classes;

        return (
            <ParallaxLayer className={classes.RegistriesContainer} offset={5} speed={1}>
                <div className={classes.Registries} onScroll={this.stopScrollPropagation}>
                    <h1>Registries</h1>
                    <Trail
                        native={true}
                        from={{ opacity: 0, x: -100 }}
                        to={{ opacity: this.state.toggle ? 1 : 0, x: this.state.toggle ? 0 : 100 }}
                        keys={registries.map((b: IRegistry, key: number) => key)}>
                        {registries.map((registry: IRegistry, key: number) => ({ x, opacity }: any): JSX.Element => (
                            <animated.div className={classes.Registry} style={{
                                opacity,
                                transform: x.interpolate((transition: number) =>
                                    `translate3d(0,${transition}%,0)`)
                            }} >
                                <img src={registry.photo} alt={registry.name} />
                            </animated.div>
                        ))}
                    </Trail>
                </div>
            </ParallaxLayer>
        );
    }

    private stopScrollPropagation: (e: React.UIEvent<HTMLDivElement>) => void =
        (e: React.UIEvent<HTMLDivElement>): void => {
            e.stopPropagation();
        }
}

export const Registries: React.ComponentType<Pick<IRegistriesProps, never> & StyledComponentProps>
    = injectSheet(RegistriesStyles)(RegistriesComponent);
