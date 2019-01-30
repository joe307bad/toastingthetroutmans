import * as React from 'react';
import injectSheet, { StyledComponentProps } from 'react-jss';
import { ParallaxLayer } from 'react-spring';
import { MomAndDadPhotos, Photos } from '../../assets/photos/Photos';
import { BridalDanceClasses, BridalDanceStyles } from './BridalDanceStyles';

interface IBridalDanceProps {
    classes: Record<BridalDanceClasses, string>;
}

/**
 * Component for featuring Bridal Dance description and videos
 */
export class BridalDanceComponent extends React.Component<IBridalDanceProps> {
    public render(): JSX.Element {
        const classes: Record<BridalDanceClasses, string> = this.props.classes;

        return (
            <div>
                <ParallaxLayer offset={5} speed={1}>
                    <img
                        alt='FlowerPic5'
                        src={Photos.FlowerPic11}
                        className={classes.FlowerPic11} />
                </ParallaxLayer>
                <ParallaxLayer offset={5} speed={1}>
                    <img
                        alt='FlowerPic5'
                        src={Photos.FlowerPic12}
                        className={classes.FlowerPic12} />
                </ParallaxLayer>
                <ParallaxLayer offset={5} speed={0.75}>
                    <img
                        alt='FlowerPic5'
                        src={MomAndDadPhotos.MomAndDad}
                        className={classes.MomAndDad} />
                </ParallaxLayer>
                <ParallaxLayer offset={5} speed={1.25}>
                    <img
                        alt='FlowerPic5'
                        src={MomAndDadPhotos.MomAndDad1}
                        className={classes.MomAndDad1} />
                </ParallaxLayer>
                <ParallaxLayer offset={5} speed={1.3}>
                    <img
                        alt='FlowerPic5'
                        src={MomAndDadPhotos.MomWithBojo}
                        className={classes.MomWithBojo} />
                </ParallaxLayer>
                <ParallaxLayer offset={5} speed={1.5}>
                    <div className={classes.BridalDanceContainer}>
                        <div className={classes.BridalDance}>
                            <h1>Bridal Dance</h1>
                            <div>
                                <p>There are many claims to the traditional bridal dance.</p>
                                <p>In western Pennsylvania, the song and dance is called the bridal polka or apron dance. Usually, a bridesmaid holds a bag or wears an apron to collect a dollar from each guest who wants to dance with the bride.</p>
                                <p>It has been a tradition that we do at the Badaczewski weddings. We hope you will help us continue this tradition during our Troutman wedding!</p>
                                <p>How is it conducted? It is very simple!</p>
                                <ol>
                                    <li>The music will begin to play, which will be a traditional polka.</li>
                                    <li>First, the Bride will participate in a short dance with her father!</li>
                                    <li>Next, we ask that you come up to form a line and dance with the Bride. The Father of the Bride will be there to help keep the line moving. If you would like to observe first, please meet us at the Bar and join in when you are ready!</li>
                                    <li>Before dancing with the bride, a dollar bill is accepted and placed in the Maid of Honor’s apron.</li>
                                    <li>After dancing with the bride, there will be shots and lollipops available to celebrate!</li>
                                    <li>Once everyone has danced with the bride, including the father one more time, this is where the fun begins!</li>
                                    <li>A tight circle is formed around the bride, intending to keep the Groom away.</li>
                                    <li>The Groom is to be met with resistance. So, be prepared to block the Groom from going up and over or diving underneath shoulders.</li>
                                    <li>It may go overboard from here …</li>
                                    <li>Eventually, the Groom is able to meet his Bride and carry her away!</li>
                                </ol>
                                <p>Click play below to watch video of Samantha’s parents, Jim and Angela, completing their bridal dance during their wedding.</p>
                                <iframe
                                    {...{
                                        src: 'https://drive.google.com/file/d/1To__dUx1CPT1X3BNtymLgN2u71U0n8Mz/preview',
                                        allowFullScreen: true
                                    }} />
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
            </div>);
    }
}

export const BridalDance: React.ComponentType<Pick<{}, never> & StyledComponentProps>
    = injectSheet(BridalDanceStyles)(BridalDanceComponent);
