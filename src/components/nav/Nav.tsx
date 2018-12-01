import cx from 'classnames';
import * as React from 'react';
import * as hamburger from 'react-animated-burgers';
import injectSheet from 'react-jss';

import { Base, MainClasses } from '../../theme';
import { INavItem, NavItems } from './NavItems';

export interface INavProps {
    classes: Record<MainClasses, string>;
    currentPageMarkerPosition: string;
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
        return <nav className={cx(this.props.classes.nav, {
            [this.props.classes.moveNavMenu]: this.state.menuOpen
        })}>
            <div
                role='button'
                className={classes.navButton}
                onClick={this.toggleMenu}>
                <hamburger.HamburgerSpin isActive={this.state.menuOpen} />
            </div>
            {NavItems.map((navItem: INavItem, index: number) =>
                <div
                    key={index}
                    role='button'
                    className={classes.navChild}
                    data-position={navItem.position}
                    onClick={this.props.scrollTo}>
                    {navItem.title}
                </div>
            )}
            <div style={{ width: '100%' }}></div>
            <div className={this.props.classes.currentPageMarker}>
                <div className={this.props.classes.currentPageMarkerAccent}></div>
            </div>
        </nav>;
    }

    private toggleMenu = (): void => {
        this.setState((prevState: INavState) => {
            const newMenuState: boolean = !!!prevState.menuOpen;
            this.props.toggleMenu(newMenuState);

            return {
                menuOpen: !!!prevState.menuOpen
            };
        });
    }
}

export const Nav: React.ComponentType<Pick<INavProps, never>>
    = injectSheet(Base)(NavComponent);
