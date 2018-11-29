import { withTheme } from '@callstack/react-theme-provider';
import * as React from 'react';
import * as hamburger from 'react-animated-burgers';

import { ITheme } from '../../theme';
import { INavItem, NavItems } from './NavItems';

interface INavProps {
    theme: ITheme;
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
class NavComponent extends React.Component<INavProps, INavState> {
    public state: INavState = { menuOpen: false };

    public render(): JSX.Element {
        return <nav style={{
            ...this.props.theme.nav,
            ...this.state.menuOpen ? this.props.theme.moveNavMenu : {}
        }}>
            <div
                role='button'
                style={this.props.theme.navButton}
                onClick={this.toggleMenu}>
                <hamburger.HamburgerSpin
                    isActive={this.state.menuOpen} />
            </div>
            {/* <img
                style={{
                    position: 'absolute',
                    width: 75,
                    top: 0,
                    right: -100
                }}
                onClick={this.toggleMenu}
                alt='Hamburger'
                src='https://i.stack.imgur.com/Fw96Z.png' /> */}
            {NavItems.map((navItem: INavItem, index: number) =>
                <div
                    key={index}
                    role='button'
                    style={this.props.theme.navChild}
                    data-position={navItem.position}
                    onClick={this.props.scrollTo}>
                    {navItem.title}
                </div>
            )}
            <div style={{ width: '100%' }}></div>
            <div style={{
                ...this.props.theme.currentPageMarker,
                left: this.props.currentPageMarkerPosition
            }}>
                <div style={this.props.theme.currentPageMarkerAccent}></div>
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

export const Nav: React.ComponentType<Pick<INavProps, never>> = withTheme(NavComponent);
