import * as React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring'
import ParallaxComponent from './parallax-example/parallax';
import './styles.css'
import { ThemeProvider } from 'theming';

const Page = ({ offset, gradient, onClick }: any) => (
  <React.Fragment>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </ParallaxLayer>

    <ParallaxLayer className="text number" offset={offset} speed={0.3}>
      <span>012312{offset + 1}</span>
    </ParallaxLayer>
  </React.Fragment>
)


const theme: React.CSSProperties = {
  color: 'black',
  background: 'white',
  backgroundImage: 'https://www.toptal.com/designers/subtlepatterns/patterns/paper_fibers.png'
};

export class Hello extends React.Component {
  parallax: any;
  scroll = (to: any) => this.parallax.scrollTo(to)
  render(): JSX.Element {
    return (
      <ThemeProvider theme={theme}>
        <ParallaxComponent theme={theme} /> {/* { color: 'black', background: 'white' } */}
      </ThemeProvider>
    )
  }
}