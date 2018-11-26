import * as React from "react";

import { ITheme, primary } from "../main";
import { withTheme } from "@callstack/react-theme-provider";
import { Parallax, ParallaxLayer } from "react-spring";
import Radium from "radium";
import mediaQueries from '../../theme/media-queries';

var samAndShaun = require("../../assets/photos/SamAndShaun.png");
var samAndShaun1 = require("../../assets/photos/SamAndShaun_2_Portrait.jpg");
var samAndShaun2 = require("../../assets/photos/SamAndShaun_1_Landscape.jpg");
var samAndShaun3 = require("../../assets/photos/SamAndShaun_3_Landscape.jpg");

const styles = {
    marginTop: 100,
    [mediaQueries.desktop]: {
        backgroundColor: 'black',
        marginTop: 500
    }
};


const url = (name: any, wrap = false) =>
    `${
    wrap ? 'url(' : ''
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
    }`

interface IHomeProps {
    theme: ITheme;
    setParallaxContainer: (ref: any) => void;
    onParallaxScroll: (currentPosition: number) => void;
}

export class Home extends React.Component<IHomeProps, any> {
    parallax: any;
    parallaxContainer: any;

    componentDidMount(): void {
        //this.parallaxContainer.container.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(event: any): void {
        var h: any = this.parallaxContainer.container,
            b: any = document.body,
            st: any = 'scrollTop',
            sh: any = 'scrollHeight';

        var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
        this.props.onParallaxScroll(percent);
    }

    mainDiv = {
        ...this.props.theme.black,
        ...styles
    }

    render(): JSX.Element {
        return (
            <div style={this.mainDiv}>
                Hey There
            </div>
        )
    }
}

export default withTheme(Radium(Home));

{/* <Parallax
style={this.props.theme.main}
ref={(ref: any) => {
    this.parallaxContainer = ref;
    this.props.setParallaxContainer(ref);
}}
pages={3}>
<ParallaxLayer
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
        src={url('satellite4')}
        style={{ width: '15%', marginLeft: '70%' }}
    />
</ParallaxLayer>

<ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
    <img
        src={url('cloud')}
        style={{ display: 'block', width: '20%', marginLeft: '55%' }}
    />
    <img
        src={url('cloud')}
        style={{ display: 'block', width: '10%', marginLeft: '15%' }}
    />
</ParallaxLayer>

<ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
    <img
        src={url('cloud')}
        style={{ display: 'block', width: '20%', marginLeft: '70%' }}
    />
    <img
        src={url('cloud')}
        style={{ display: 'block', width: '20%', marginLeft: '40%' }}
    />
</ParallaxLayer>

<ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
    <img
        src={url('cloud')}
        style={{ display: 'block', width: '10%', marginLeft: '10%' }}
    />
    <img
        src={url('cloud')}
        style={{ display: 'block', width: '20%', marginLeft: '75%' }}
    />
</ParallaxLayer>

<ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
    <img
        src={url('cloud')}
        style={{ display: 'block', width: '20%', marginLeft: '60%' }}
    />
    <img
        src={url('cloud')}
        style={{ display: 'block', width: '25%', marginLeft: '30%' }}
    />
    <img
        src={url('cloud')}
        style={{ display: 'block', width: '10%', marginLeft: '80%' }}
    />
</ParallaxLayer>

<ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
    <img
        src={url('cloud')}
        style={{ display: 'block', width: '20%', marginLeft: '5%' }}
    />
    <img
        src={url('cloud')}
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
        pointerEvents: 'none',
    }}>
    <img src={url('earth')} style={{ width: '60%' }} />
</ParallaxLayer>

<ParallaxLayer
    offset={2}
    speed={-0.3}
    style={{
        backgroundSize: '80%',
        backgroundPosition: 'center',
        backgroundImage: url('clients', true),
    }}
/>

<ParallaxLayer
    offset={0}
    speed={0}
    style={{
        display: 'flex',
        paddingTop: '75px',
        flexFlow: 'column wrap'
    }}>
    <img
        width={400}
        style={{
            alignSelf: 'center',
        }}
        src={samAndShaun} />
    <p style={{
        fontFamily: "Imperator",
        color: primary,
        alignSelf: 'center',
        fontSize: "25px",
        textAlign: "center"
    }}>Friday, October 29th 2019<br />St. Margaret Mary Alacoque Church<br />Harrisburg, PA</p>
</ParallaxLayer>

<ParallaxLayer
    offset={0.25}
    speed={0.5}
    style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
    <img
        style={{
            width: '500px',
            marginRight: '40%',
            transform: 'rotate(-10deg)',
            backgroundColor: 'white',
            padding: '10px',
            display: 'block',
            boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)'
        }}
        src={samAndShaun2} />
</ParallaxLayer>

<ParallaxLayer
    offset={0.25}
    speed={0.3}
    style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
    <img
        style={{
            width: '500px',
            marginLeft: '40%',
            transform: 'rotate(10deg)',
            backgroundColor: 'white',
            padding: '10px',
            display: 'block',
            boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)'
        }}
        src={samAndShaun3} />
</ParallaxLayer>

<ParallaxLayer
    offset={1}
    speed={0.1}
    style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
    <img src={url('bash')} style={{ width: '40%' }} />
</ParallaxLayer>

<ParallaxLayer
    offset={2}
    speed={0.1}
    style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
    <img src={url('clients-main')} style={{ width: '40%' }} />
</ParallaxLayer>
</Parallax> */}