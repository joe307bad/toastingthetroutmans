import * as cx from 'classnames';
import * as React from 'react';
import injectSheet, { StyledComponentProps } from 'react-jss';
import { animated, config, Keyframes, Parallax, SpringProps } from 'react-spring';

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
}

export const numberOfPages: number = NavItems.length;
export const markerWidth: number = 100 / numberOfPages;
export const navConstant: number = (100 - markerWidth) * 0.01;

// tslint:disable-next-line:max-line-length
type TKeyframe = 'config' | 'native' | 'from' | 'onStart' | 'onRest' | 'onFrame' | 'children' | 'render' | 'immediate' | 'reset' | 'impl' | 'inject' | 'delay';
const CountdownContainer: any
    // (props: object) =>
    //     Keyframes<{} | Pick<SpringProps<{}, {}>, TKeyframe>, {}>
    = Keyframes.Spring({
        open: { to: { x: 0 }, config: config.default },
        close: { to: { x: 50 }, config: config.default }
    });

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
        countdownButtonHovered: false
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
                <CountdownContainer native={true} state={this.state.countdownButtonHovered ? 'open' : 'close'}>
                    {({ x }: any) => (
                        <animated.i
                            onMouseEnter={this.countdownButtonHover}
                            className={cx(`${classes.CountdownButton} fas fa-hourglass-half`, {
                                ['animated tada']: this.state.countdownButtonHovered
                            })}
                            style={{
                                transform: x.interpolate((x: any) => `translate3d(${x}%,0,0)`)
                            }}>
                            <span />
                        </animated.i>
                    )}
                </CountdownContainer>
            </div>);
    }
}

export const Main: React.ComponentType<Pick<IMainProps, never> & StyledComponentProps>
    = injectSheet(Base)(MainComponent);
