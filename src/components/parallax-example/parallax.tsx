import * as React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring'
import { withTheme } from 'theming';

// Little helpers ...
const url = (name: any, wrap = false) =>
    `${
    wrap ? 'url(' : ''
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
    }`
const Pink = ({ children }: any) => (
    <span style={{ color: '#FF6AC1' }}>{children}</span>
)
const Yellow = ({ children }: any) => (
    <span style={{ color: '#EFF59B' }}>{children}</span>
)
const Lightblue = ({ children }: any) => (
    <span style={{ color: '#9AEDFE' }}>{children}</span>
)
const Green = ({ children }: any) => (
    <span style={{ color: '#57EE89' }}>{children}</span>
)
const Blue = ({ children }: any) => (
    <span style={{ color: '#57C7FF' }}>{children}</span>
)
const Gray = ({ children }: any) => (
    <span style={{ color: '#909090' }}>{children}</span>
)

const Styles = {
    content: {
        height: "500px",
        textAlign: "center",
        fontSize: "4rem",
        color: "#fff"
    },
    link: {
        display: "inline-block",
        fontSize: "2rem",
        color: "#fff",
        marginRight: "10px",
        opacity: "0.5",
        cursor: "pointer",
    },
    active: {
        opacity: 1
    },
    nav: {
        position: "fixed",
        background: '#fff',
        textAlign: 'center',
        width: "100%",
        top: 0,
        zIndex: 999
    } as React.CSSProperties
};

class MenuItem extends React.Component {
    render() {
        const { targetInfo, style, ...reset }: any = this.props;
        let activeStyle = null;
        if (targetInfo.active) {
            activeStyle = Styles.active;
        }
        return (<div style={{
            ...Styles.link,
            ...style,
            ...activeStyle
        }} {...reset} />);
    }
}

export class ScrollExample extends React.Component<{theme: any}, any> {
    them: any;
    parallax: any;
    render(): JSX.Element {
        return (
            <div style={{ width: '100%', height: '100%', background: '#253237' }}>

                <div id="nav-parent" style={Styles.nav}>
                    <div style={{ background: '#3498DB' }}
                        onClick={() => this.parallax.scrollTo(0)}>
                        test1
                    </div>
                    <div style={{ background: '#3498DB' }}
                        onClick={() => this.parallax.scrollTo(1)}>
                        test2
                    </div>
                    <div style={{ background: '#3498DB' }}
                        onClick={() => this.parallax.scrollTo(3)}>
                        test3
                    </div>
                </div>
                <Parallax ref={(ref: any) => (this.parallax = ref)} pages={3}>
                    <ParallaxLayer
                        offset={1}
                        speed={1}
                        style={{ backgroundColor: '#805E73' }}
                    />
                    <ParallaxLayer
                        offset={2}
                        speed={1}
                        style={{ backgroundColor: '#87BCDE' }}
                    />

                    <ParallaxLayer
                        offset={0}
                        speed={0}
                        factor={3}
                        style={{
                            backgroundImage: 'url("https://www.toptal.com/designers/subtlepatterns/patterns/paper_fibers.png)',
                            backgroundRepeat: 'repeat',
                            backgroundSize: 'cover',
                        }}
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
                        speed={0.1}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <img src={url('server')} style={{ width: '20%' }} />
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
                        speed={-0}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <img src={url('clients-main')} style={{ width: '40%' }} />
                    </ParallaxLayer>
                </Parallax>
            </div>
        )
    }
}


export default withTheme(ScrollExample);