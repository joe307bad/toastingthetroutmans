import * as React from 'react';

import injectSheet, { StyledComponentProps } from 'react-jss';
import { animated, ParallaxLayer, Trail } from 'react-spring';

import * as cx from 'classnames';
import { Photos } from '../../assets/photos/Photos';
import { RegistriesClasses, RegistriesStyles } from './RegistriesStyles';

interface IRegistriesProps {
    classes: Record<RegistriesClasses, string>;
    active: boolean;
    creditsOpen: boolean;
    toggleCredits(): void;
}

interface IRegistriesState {
    toggle: boolean;
}

interface IRegistry {
    name: string;
    photo: string;
    link: string;
}

const registries: IRegistry[] = [
    {
        name: 'Target',
        photo: Photos.Target,
        link: 'http://tgt.gifts/ToastingtotheTroutmans'
    },
    {
        name: 'Crate and Barrel',
        photo: Photos.CrateAndBarrel,
        link: 'https://www.crateandbarrel.com/gift-registry/samantha-badaczewski-and-shawn-troutman/r5927666'
    },
    {
        name: 'Amazon',
        photo: Photos.Amazon,
        link: 'https://www.amazon.com/wedding/share/toastingthetroutmans '
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
            <div>
                <ParallaxLayer offset={6} speed={0.5}>
                    <img
                        alt='Flowers'
                        src={Photos.FlowerPic9}
                        className={classes.FlowerPic9} />
                </ParallaxLayer>
                <ParallaxLayer offset={6} speed={0.25}>
                    <img
                        alt='Sam and Shawn'
                        src={Photos.SamAndShawn_2_Portrait}
                        className={classes.SamAndShawn_2_Portrait} />
                </ParallaxLayer>
                <ParallaxLayer offset={6} speed={0.25}>
                    <img
                        alt='Flowers'
                        src={Photos.FlowerPic10}
                        className={classes.FlowerPic10} />
                </ParallaxLayer>
                <ParallaxLayer offset={6} speed={0.5}>
                    <img
                        alt='Sam and Shawn'
                        src={Photos.SamAndShawn_1_Landscape}
                        className={classes.SamAndShawn_1_Landscape} />
                </ParallaxLayer>
                <ParallaxLayer className={classes.RegistriesContainer} offset={6} speed={1}>
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
                                    <a href={registry.link} target='_blank' rel='noopener noreferrer'>
                                        <img src={registry.photo} alt={registry.name} />
                                    </a>
                                </animated.div>
                            ))}
                        </Trail>
                    </div>
                    <div role='button'
                        onClick={this.props.toggleCredits}
                        className={cx(`${classes.CreditsButton}`, {
                            ['hvr-icon-float']: !this.props.creditsOpen,
                            ['hvr-icon-sink']: this.props.creditsOpen
                        })}>
                        Credits
                        <i className={cx(`fas hvr-icon`, {
                            ['fa-angle-up']: !this.props.creditsOpen,
                            ['fa-angle-down']: this.props.creditsOpen
                        })} />
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

export const Registries: React.ComponentType<Pick<IRegistriesProps, never> & StyledComponentProps>
    = injectSheet(RegistriesStyles)(RegistriesComponent);
