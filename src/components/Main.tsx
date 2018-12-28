import * as cx from 'classnames';
import * as React from 'react';
import injectSheet, { StyledComponentProps } from 'react-jss';
import { Parallax } from 'react-spring';

import { debounce, throttle } from 'lodash';
import { Base, MainClasses } from '../theme';
import { Bridesmaids } from './bridesmaids/Bridesmaids';
import { Home } from './home/Home';
import { TParallaxElement } from './home/TParallaxElement';
import { Nav } from './nav/Nav';
import { Photos } from './photos/Photos';

interface IMainProps {
    classes: Record<MainClasses, string>;
}

interface IMainState {
    currentPageMarkerPosition: string;
    menuOpen: boolean;
    activePage: number;
}

/**
 * Main Component
 * This component facilitates any global parent components and serves as a single entry point
 * for all components
 */
class MainComponent extends React.Component<IMainProps, IMainState> {
    public parallaxContainer: TParallaxElement;
    public navConstant: number = 0.857142857143;
    public state: IMainState = {
        currentPageMarkerPosition: '0',
        menuOpen: false,
        activePage: 0
    };

    public onScroll = (): void => {
        const container: HTMLDivElement = this.parallaxContainer.container;
        const position: number =
        container.scrollTop / (container.scrollHeight - container.clientHeight);

        this.setState({
            currentPageMarkerPosition: `${(position * (this.navConstant * 100))}%`,
            activePage: this.currentPage(position)
        });
    }

    public currentPage = (position: number): number => Number((position * this.navConstant * 3.5).toFixed(2));

    public componentDidMount(): void {
        this.parallaxContainer.container.addEventListener('scroll', this.onScroll.bind(this));
    }

    public bindRef = (parallaxContainer: TParallaxElement): void => {
        this.parallaxContainer = parallaxContainer;
    }

    public scrollTo = (event: React.SyntheticEvent<HTMLDivElement>): void => {
        this.parallaxContainer.scrollTo(Number(event.currentTarget.dataset.position));
    }

    public toggleMenu = (newMenuState: boolean): void => {
        this.setState({
            menuOpen: newMenuState
        });
    }

    public render(): JSX.Element {
        const classes: Record<MainClasses, string> = this.props.classes;

        return (
            <div>
                <Nav
                    {...{
                        currentPageMarkerPosition: this.state.currentPageMarkerPosition,
                        scrollTo: this.scrollTo,
                        toggleMenu: this.toggleMenu
                    }}
                />
                <Parallax
                    {...{
                        className: classes.main,
                        ref: this.bindRef,
                        pages: 4
                    }}>
                    <div
                        id='main'
                        className={cx(classes.mainContainer, {
                            [classes.moveMainContainerForNavMenu]: this.state.menuOpen
                        })}>
                        <Home />
                        <Photos />
                        <Bridesmaids {...{
                            active: this.state.activePage >= 1.5
                        }} />
                    </div>
                </Parallax>
            </div>
        );
    }
}

export const Main: React.ComponentType<Pick<IMainProps, never> & StyledComponentProps>
    = injectSheet(Base)(MainComponent);
