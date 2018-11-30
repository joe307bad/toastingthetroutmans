import * as React from 'react';
import injectSheet, { ConsistentWith, CSSProperties, StyledComponentProps, Styles, WithSheet } from 'react-jss';
import { Parallax } from 'react-spring';

import { Home } from './home/Home';
import { TParallaxElement } from './home/TParallaxElement';
import { Nav } from './nav/Nav';

interface IMainProps {
    classes: Record<MainClasses, string>;
}

interface IMainState {
    currentPageMarkerPosition: string;
    menuOpen: boolean;
}

// export const Base: Styles<MainClasses> = {
//     main: {
//         backgroundImage: 'url(https://www.toptal.com/designers/subtlepatterns/patterns/ricepaper2.png)',
//         overflow: 'hidden',
//         top: 0,
//         left: 0,
//         zIndex: 1
//     }
// };

export type MainClasses = 'main';

const Base: Styles<MainClasses> = {
    main: {
        backgroundColor: 'black'
    }
};

//type TMainProps = IWithStyles<keyof typeof Base> & IProps;

/**
 * Main Component
 * This component facilitates any global parent components and serves as a single entry point
 * for all components
 */
class MainComponent extends React.Component<IMainProps, {}> {
    public parallaxContainer: TParallaxElement;
    public state: IMainState = {
        currentPageMarkerPosition: '0',
        menuOpen: false
    };

    public componentDidMount(): void {
        this.parallaxContainer.container.addEventListener('scroll', this.onScroll.bind(this));
    }

    public bindRef = (parallaxContainer: TParallaxElement): void => {
        this.parallaxContainer = parallaxContainer;
    }

    public scrollTo = (event: React.SyntheticEvent<HTMLDivElement>): void =>
        this.parallaxContainer.scrollTo(Number(event.currentTarget.dataset.position))

    public onScroll = (): void => {
        const container: HTMLDivElement = this.parallaxContainer.container;

        const position: number =
            container.scrollTop / (container.scrollHeight - container.clientHeight);

        this.setState({
            currentPageMarkerPosition: `calc(${position * 100 * 0.857142857143}%)`
        });
    }

    public toggleMenu = (newMenuState: boolean): void =>
        this.setState({
            menuOpen: newMenuState
        })

    public render(): JSX.Element {
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
                    className={this.props.classes.main}
                    ref={this.bindRef}
                    pages={3}>
                    <main style={{
                        // ...theme.Base.mainContainer,
                        // ...this.state.menuOpen ? theme.Base.moveMainContainerForNavMenu : {}
                    }}>
                        <Home />
                    </main>
                </Parallax>
            </div>
        );
    }
}

export const Main: React.ComponentType<Pick<IMainProps, never> & StyledComponentProps<string>>
    = injectSheet(Base)(MainComponent);

{/* <ParallaxLayer
offset={1}
speed={1}
/>
<ParallaxLayer
offset={2}
speed={1}
/>

<ParallaxLayer
offset={0}
speed={0}
factor={3}
/>

<ParallaxLayer
offset={1.3}
speed={-0.3}
style={{ pointerEvents: 'none' }}>
<img
    alt='Satellite'
    src={url}
    style={{ width: '15%', marginLeft: '70%' }}
/>
</ParallaxLayer>

<ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
<img
    alt='Satellite'
    src={url}
    style={{ display: 'block', width: '20%', marginLeft: '55%' }}
/>
<img
    alt='Satellite'
    src={url}
    style={{ display: 'block', width: '10%', marginLeft: '15%' }}
/>
</ParallaxLayer>

<ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
<img
    alt='Satellite'
    src={url}
    style={{ display: 'block', width: '20%', marginLeft: '70%' }}
/>
<img
    alt='Satellite'
    src={url}
    style={{ display: 'block', width: '20%', marginLeft: '40%' }}
/>
</ParallaxLayer>

<ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
<img
    alt='Satellite'
    src={url}
    style={{ display: 'block', width: '10%', marginLeft: '10%' }}
/>
<img
    alt='Satellite'
    src={url}
    style={{ display: 'block', width: '20%', marginLeft: '75%' }}
/>
</ParallaxLayer>

<ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
<img
    alt='Satellite'
    src={url}
    style={{ display: 'block', width: '20%', marginLeft: '60%' }}
/>
<img
    alt='Satellite'
    src={url}
    style={{ display: 'block', width: '25%', marginLeft: '30%' }}
/>
<img
    alt='Satellite'
    src={url}
    style={{ display: 'block', width: '10%', marginLeft: '80%' }}
/>
</ParallaxLayer>

<ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
<img
    alt='Satellite'
    src={url}
    style={{ display: 'block', width: '20%', marginLeft: '5%' }}
/>
<img
    alt='Satellite'
    src={url}
    style={{ display: 'block', width: '15%', marginLeft: '75%' }}
/>
</ParallaxLayer>

<ParallaxLayer
offset={2.5}
speed={-0.4}
style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none'
}}>
<img
    alt='Satellite'
    src={url}
    style={{ width: '60%' }} />
</ParallaxLayer>

<ParallaxLayer
offset={2}
speed={-0.3}
style={{
    backgroundSize: '80%',
    backgroundPosition: 'center',
    backgroundImage: url
}}
/>

<ParallaxLayer
offset={2}
speed={0.1}
style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}}>
<img
    alt='Satellite'
    src={url}
    style={{ width: '40%' }} />
</ParallaxLayer> */}
