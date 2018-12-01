import * as React from 'react';
import cx from 'classnames';
import injectSheet, { StyledComponentProps } from 'react-jss';
import { ParallaxLayer } from 'react-spring';

import { Photos } from '../../assets/photos/Photos';
import { primary } from '../../theme';
import { HomeClasses, HomeStyles } from './HomeStyles';
import { TParallaxElement } from './TParallaxElement';

interface IHomeProps {
    classes: Record<HomeClasses, string>;
}

/**
 * Home Component
 */
export class HomeComponent extends React.Component<IHomeProps, {}> {
    public parallaxContainer: TParallaxElement;
    public render(): JSX.Element {
        const classes: Record<HomeClasses, string> = this.props.classes;
        return (
            <div>
                <ParallaxLayer
                    className={classes.TaglineContainer}
                    offset={0} speed={0}>
                    <img
                        alt='Sam and Shaun'
                        width={400}
                        className={classes.SamAndShaun}
                        src={Photos.samAndShaun} />
                    <p className={classes.Tagline}>
                        Friday, October 29th 2019<br />
                        St. Margaret Mary Alacoque Church<br />
                        Harrisburg, PA
                    </p>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0.4}
                    speed={0.5}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <img
                        alt='Sam and Shaun'
                        src={Photos.SamAndShaun_1_Landscape}
                        style={HomeStyles.SamAndShaun_1_Landscape} />
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0.5}
                    speed={0.3}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <img
                        alt='Sam and Shaun'
                        src={Photos.SamAndShaun_3_Landscape}
                        style={HomeStyles.SamAndShaun_3_Landscape} />
                </ParallaxLayer>
            </div>
        );
    }
}

export const Home: React.ComponentType<Pick<IHomeProps, never> & StyledComponentProps<string>>
    = injectSheet(HomeStyles)(HomeComponent);
