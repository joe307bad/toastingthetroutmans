import * as cx from 'classnames';
import * as React from 'react';
import * as hamburger from 'react-animated-burgers';
import injectSheet from 'react-jss';

import { Base, MainClasses } from '../../theme';
import { Credits } from '../credits/Credits';
import { INavItem, NavItems } from './NavItems';

export interface INavProps {
    classes: Record<MainClasses, string>;
    currentPageMarkerPosition: string;
    creditsOpen: boolean;
    scrollTo(event: React.SyntheticEvent<HTMLDivElement>): void;
    toggleMenu(newMenuState: boolean): void;
}

interface INavState {
    menuOpen: boolean;
}

/**
 * Nav Component
 * Responsible for displaying the navigation for the application
 */
export class NavComponent extends React.Component<INavProps, INavState> {
    public state: INavState = { menuOpen: false };

    public render(): JSX.Element {
        const classes: Record<MainClasses, string> = this.props.classes;

        return (
            <div>
                <nav className={cx(this.props.classes.nav, {
                    [this.props.classes.moveNavMenu]: this.state.menuOpen
                })}>
                    <div
                        role='button'
                        className={classes.navButton}
                        onClick={this.toggleMenu}>
                        <hamburger.HamburgerSpin isActive={this.state.menuOpen} />
                    </div>
                    <div className={classes.navItemsContainer}>
                        {NavItems.map((navItem: INavItem, index: number) =>
                            <div
                                key={index}
                                role='button'
                                className={classes.navItem}
                                data-position={index}
                                onClick={this.props.scrollTo}>
                                {navItem.title}
                            </div>
                        )}
                        <Credits {...{creditsOpen: this.props.creditsOpen}} />
                    </div>
                    <div style={{ width: '100%' }} />
                    <div className={this.props.classes.currentPageMarker}>
                        <div className={this.props.classes.currentPageMarkerAccent} />
                    </div>
                </nav>
            </div>
        );
    }

    private toggleMenu = (): void => {
        this.setState((prevState: INavState) => {
            const newMenuState: boolean = !!!prevState.menuOpen;
            this.props.toggleMenu(newMenuState);

            return {
                menuOpen: newMenuState
            };
        });
    }
}

export const Nav: React.ComponentType<Pick<INavProps, never>>
    = injectSheet(Base)(NavComponent);
