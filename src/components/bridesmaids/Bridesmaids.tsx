import * as React from 'react';

import injectSheet, { StyledComponentProps } from 'react-jss';
import { animated, ParallaxLayer, Trail } from 'react-spring';
import { BridesmaidsPhotos, Photos } from '../../assets/photos/Photos';
import { ITrail } from '../../shared/ITrail';
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
        photo: BridesmaidsPhotos.Jamie,
        altPhoto: BridesmaidsPhotos.Jamie_alt,
        name: 'Jamie Badaczewski',
        role: `Maid of Honor`,
        description: `Sister of the Bride`
    },
    {
        photo: BridesmaidsPhotos.Courtney,
        altPhoto: BridesmaidsPhotos.Courtney_alt,
        name: 'Courtney Cerjanic',
        role: `Matron of Honor`,
        description: `Cousin of the Bride`
    },
    {
        photo: BridesmaidsPhotos.Katie,
        altPhoto: BridesmaidsPhotos.Katie_alt,
        name: 'Katie Ketterer',
        description: `Friend of the Bride`
    },
    {
        photo: BridesmaidsPhotos.Olivia,
        altPhoto: BridesmaidsPhotos.Olivia_alt,
        name: 'Olivia Lampenfeld',
        description: `Friend of the Bride`
    },
    {
        photo: BridesmaidsPhotos.Meghan,
        altPhoto: BridesmaidsPhotos.Meghan_alt,
        name: 'Meghan Dougherty',
        description: `Friend of the Bride`
    },
    {
        photo: BridesmaidsPhotos.Moira,
        altPhoto: BridesmaidsPhotos.Moira_alt,
        name: 'Moira Nugent',
        description: `Friend of the Bride`
    },
    {
        photo: BridesmaidsPhotos.Kaitlyn,
        altPhoto: BridesmaidsPhotos.Kaitlyn_alt,
        name: 'Kaitlyn Badaczewski',
        description: `Sister-in-law of the bride`
    },
    {
        photo: BridesmaidsPhotos.Amanda,
        altPhoto: BridesmaidsPhotos.Amanda_alt,
        name: 'Amanda Dix',
        description: `Friend of the Bride & Groom`
    },
    {
        photo: BridesmaidsPhotos.Anniston,
        altPhoto: BridesmaidsPhotos.Anniston_alt,
        name: 'Anniston Cerjanic',
        role: `Flower Girl`,
        description: `Niece of the Bride`
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
            <div>
                <ParallaxLayer offset={2} speed={0.25}>
                    <img
                        alt='FlowerPic5'
                        src={Photos.FlowerPic5}
                        className={classes.FlowerPic5} />
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.25}>
                    <img
                        alt='FlowerPic5'
                        src={Photos.FlowerPic6}
                        className={classes.FlowerPic6} />
                </ParallaxLayer>
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
            </div>
        );
    }

    private stopScrollPropagation: (e: React.UIEvent<HTMLDivElement>) => void =
        (e: React.UIEvent<HTMLDivElement>): void => {
            e.stopPropagation();
        }
}

export const Bridesmaids: React.ComponentType<Pick<{}, never> & StyledComponentProps>
    = injectSheet(BridesmaidsStyles)(BridesmaidsComponent);
