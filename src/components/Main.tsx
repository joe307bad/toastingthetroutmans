import { ThemeProvider } from '@callstack/react-theme-provider';
import Radium from 'radium';
import * as React from 'react';

import { Parallax } from 'react-spring';
import * as theme from '../theme';
import { Home } from './home/Home';
import { TParallaxElement } from './home/TParallaxElement';
import { Nav } from './nav/Nav';

interface IMainState {
    currentPageMarkerPosition: string;
}

/**
 * Main Component
 * This component facilitates any global parent components and serves as a single entry point
 * for all components
 */
export class Main extends React.Component<{}, IMainState> {
    public parallaxContainer: TParallaxElement;
    public state: IMainState = { currentPageMarkerPosition: '0' };

    public componentDidMount(): void {
        this.parallaxContainer.container.addEventListener('scroll', this.onScroll.bind(this));
    }

    public bindRef = (parallaxContainer: TParallaxElement): void => {
        this.parallaxContainer = parallaxContainer;
    }

    public scrollTo = (event: React.SyntheticEvent<HTMLDivElement>): void => {
        const position: number = Number(event.currentTarget.dataset.position);
        this.parallaxContainer.scrollTo(position);
    }

    public onScroll = (): void => {
        const container: HTMLDivElement = this.parallaxContainer.container;

        const position: number =
            container.scrollTop / (container.scrollHeight - container.clientHeight);

        this.setState({
            currentPageMarkerPosition: `calc(${position * 100 * 0.857142857143}%)`
        });
    }

    // tslint:disable-next-line:max-func-body-length
    public render(): JSX.Element {
        return (
            <ThemeProvider theme={theme.Base}>
                <Radium.StyleRoot>
                    <Nav
                        {...{
                            currentPageMarkerPosition: this.state.currentPageMarkerPosition,
                            scrollTo: this.scrollTo
                        }}
                    />
                    <Parallax
                        style={theme.Base.main}
                        ref={this.bindRef}
                        pages={3}>
                        <main style={theme.Base.mainContainer}>
                            <Home />
                        </main>
                    </Parallax>
                </Radium.StyleRoot>;
            </ThemeProvider>
        );
    }
}

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
