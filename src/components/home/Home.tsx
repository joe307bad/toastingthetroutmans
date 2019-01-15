import * as React from 'react';

import injectSheet, { StyledComponentProps } from 'react-jss';
import { ParallaxLayer } from 'react-spring';

import { Photos } from '../../assets/photos/Photos';
import { HomeClasses, HomeStyles } from './HomeStyles';

interface IHomeProps {
    classes: Record<HomeClasses, string>;
}

/**
 * Home Component
 */
export class HomeComponent extends React.Component<IHomeProps> {

    public render(): JSX.Element {
        const classes: Record<HomeClasses, string> = this.props.classes;

        return (
            <div>
                <ParallaxLayer offset={0.8} speed={1}>
                    <img
                        alt='FlowerPic1'
                        src={Photos.FlowerPic1}
                        className={classes.FlowerPic1} />
                </ParallaxLayer>
                <ParallaxLayer offset={0.8} speed={1}>
                    <img
                        alt='FlowerPic2'
                        src={Photos.FlowerPic2}
                        className={classes.FlowerPic2} />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0}>
                    <div className={classes.TaglineContainer} >
                        <img
                            alt='Sam and Shaun'
                            width={400}
                            className={classes.SamAndShaun}
                            src={Photos.samAndShaun} />
                        <p className={classes.Tagline}>
                            Saturday, October 26th 2019<br />
                            St. Margaret Mary Alacoque Church<br />
                            Harrisburg, PA
                    </p>
                        <img
                            className={classes.CurlyUnderline}
                            alt='underline'
                            src={Photos.CurlyUnderline} />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0.3} speed={0.5}>
                    <img
                        width={400}
                        alt='Flowers'
                        className={classes.Flowers}
                        src={Photos.Flowers} />
                </ParallaxLayer>
                <ParallaxLayer offset={0.32} speed={0.6}>
                    <img
                        className={classes.Flowers1}
                        width={325}
                        alt='Flowers'
                        src={Photos.Flowers1} />
                </ParallaxLayer>
                <ParallaxLayer offset={0.65} speed={0.5}>
                    <img
                        alt='Sam and Shaun'
                        src={Photos.SamAndShaun_4_Landscape}
                        className={classes.SamAndShaun_4_Landscape} />
                </ParallaxLayer>
                <ParallaxLayer offset={0.5} speed={0.3}>
                    <img
                        alt='Sam and Shaun'
                        src={Photos.SamAndShaun_3_Landscape}
                        className={classes.SamAndShaun_3_Landscape} />
                </ParallaxLayer>
            </div>
        );
    }
}

export const Home: React.ComponentType<Pick<IHomeProps, never> & StyledComponentProps>
    = injectSheet(HomeStyles)(HomeComponent);
