import * as cx from 'classnames';
import * as React from 'react';
import injectSheet, { StyledComponentProps } from 'react-jss';
import { animated, config, Keyframes, Parallax, SpringProps, Transition } from 'react-spring';

import { CSSProperties } from 'jss/css';
import { Base, MainClasses } from '../theme';
import { Bridesmaids } from './bridesmaids/Bridesmaids';
import { Groomsmen } from './groomsmen/Groomsmen';
import { Home } from './home/Home';
import { TParallaxElement } from './home/TParallaxElement';
import { Nav } from './nav/Nav';
import { NavItems } from './nav/NavItems';
import { PhotosSlider } from './photos/Photos';
import { Registries } from './registries/Registries';
import { Venue } from './venue/Venue';

interface IMainProps {
    classes: Record<MainClasses, string>;
}

interface IMainState {
    currentPageMarkerPosition: string;
    menuOpen: boolean;
    activePage: number;
    countdownButtonHovered: boolean;
    countdownExpanded: boolean;
    items: any[];
}

export const numberOfPages: number = NavItems.length;
export const markerWidth: number = 100 / numberOfPages;
export const navConstant: number = (100 - markerWidth) * 0.01;

/**
 * Main Component
 * This component facilitates any global parent components and serves as a single entry point
 * for all components
 */
class MainComponent extends React.Component<IMainProps, IMainState> {
    public parallaxContainer: TParallaxElement;
    public navConstant: number = navConstant;
    public state: IMainState = {
        currentPageMarkerPosition: '0',
        menuOpen: false,
        activePage: 0,
        countdownButtonHovered: false,
        countdownExpanded: false,
        items: []
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

    public currentPage = (position: number): number =>
        Number((position * this.navConstant * numberOfPages).toFixed(2))

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

    public countdownButtonHover = (): void => {
        this.setState({
            countdownButtonHovered: true
        });

        setTimeout(
            () => {
                this.setState({
                    countdownButtonHovered: false
                });
            },
            1000);
    }

    public update = () => {
        this.setState({
            items: [1]
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
                        pages: numberOfPages
                    }}>
                    <div
                        id='main'
                        className={cx(classes.mainContainer, {
                            [classes.moveMainContainerForNavMenu]: this.state.menuOpen
                        })}>
                        <Home />
                        <PhotosSlider />
                        <Bridesmaids {...{
                            active: this.state.activePage >= 1.5
                        }} />
                        <Groomsmen {...{
                            active: this.state.activePage >= 2.7
                        }} />
                        <Venue />
                        <Registries {...{
                            active: this.state.activePage >= 4.7
                        }} />
                    </div>
                </Parallax>
                <i
                    role='button'
                    onClick={this.update}
                    onMouseEnter={this.countdownButtonHover}
                    className={cx(`${classes.CountdownButton} fas fa-hourglass-half`, {
                        ['animated tada']: this.state.countdownButtonHovered
                    })} />
                <div style={{ position: 'fixed', top: 0, zIndex: 9 }}>
                    {
                        // @ts-ignore
                        <Transition
                            native={true}
                            keys={this.state.items}
                            from={{ height: 0, width: 0, borderRadius: '150%' }}
                            enter={{ height: 500, width: 500, borderRadius: '5%' }}
                            leave={{ height: 0 }}>
                            {this.state.items.length ? this.state.items.map((item: any) => (styles: any) => (
                                <animated.div style={{ ...defaultStyles, ...styles }}>
                                    {item}
                                </animated.div>
                            )) : [<span key={1} />]}
                        </Transition>
                    }
                </div>
            </div>);
    }
}

const defaultStyles = {
    overflow: 'hidden',
    width: '100%',
    backgroundColor: '#FF1C68',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2em',
    fontFamily: '\'Kanit\', sans-serif',
    textTransform: 'uppercase'
};

export const Main: React.ComponentType<Pick<IMainProps, never> & StyledComponentProps>
    = injectSheet(Base)(MainComponent);
