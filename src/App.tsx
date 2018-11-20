import * as React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring'
import './styles.css'

class ParallaxLayerNode extends ParallaxLayer {
  props: any;
}

const Page = ({ offset, gradient, onClick }: any) => (
  <React.Fragment>
    
    <ParallaxLayerNode offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </ParallaxLayerNode>

    <ParallaxLayerNode offset={offset} speed={0.6} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </ParallaxLayerNode>

    <ParallaxLayerNode className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </ParallaxLayerNode>
  </React.Fragment>
)

class ParalaxNode extends Parallax {
  props: any;
}

interface Props {
  parallax: any;
}

interface State {
  parallax: any;
}

export class App extends React.Component<Props, State> {
  parallax = React.createRef();
  scroll = (to: any) => (this!.parallax!.current! as any).scrollTo(to);
  render() {
    return (
      <div style={{ background: '#dfdfdf' }}>
        <ParalaxNode
          className="container"
          ref={(node: any) => (this.parallax = node)}
          pages={3}
          horizontal
          scrolling={false}>
          <Page offset={0} gradient="pink" onClick={() => this.scroll(1)} />
          <Page offset={1} gradient="teal" onClick={() => this.scroll(2)} />
          <Page offset={2} gradient="tomato" onClick={() => this.scroll(0)} />
        </ParalaxNode>
      </div>
    )
  }
}