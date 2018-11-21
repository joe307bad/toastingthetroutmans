import * as React from "react";
import { ParallaxLayer, Parallax } from 'react-spring';
import './styles.css'

export interface HelloProps { compiler: string; framework: string; }

const Page = ({ offset, gradient, onClick }: any) => (
  <React.Fragment>
    <ParallaxLayer offset={offset} speed={0.2}>
      <div className="slopeBegin" />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6}>
      <div className={`slopeEnd ${gradient}`} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </ParallaxLayer>
  </React.Fragment>
)

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    parallax: any;
    render() {
        return (
            <div style={{ background: '#dfdfdf' }}>
            <Parallax
              ref={(node: any) => (this.parallax = node)}
              pages={3}
              horizontal
              scrolling={false}>
              <Page offset={0} gradient="pink"  />
              <Page offset={1} gradient="teal"  />
              <Page offset={2} gradient="tomato" />
            </Parallax>
          </div>
        )
    }
}