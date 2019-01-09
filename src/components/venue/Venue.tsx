import * as React from 'react';

import injectSheet, { StyledComponentProps } from 'react-jss';
import { ParallaxLayer } from 'react-spring';

import { Photos } from '../../assets/photos/Photos';
import { VenueClasses, VenueStyles } from './VenueStyles';

interface IVenueProps {
    classes: Record<VenueClasses, string>;
}

// tslint:disable-next-line:max-line-length
const googleMapUrl: string = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12167.97416253859!2d-76.8448431!3d40.3203009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe801f10564382fd!2sSt+Margaret+Mary+Church+Rectory!5e0!3m2!1sen!2sus!4v1547065084355';

/**
 * Venue Component
 */
export class VenueComponent extends React.Component<IVenueProps> {

    public render(): JSX.Element {
        const classes: Record<VenueClasses, string> = this.props.classes;

        return (
            <div>
                <ParallaxLayer offset={4.2} speed={1}>
                    <img
                        width={300}
                        alt='Church'
                        className={classes.Church_1}
                        src={Photos.Church_1} />
                </ParallaxLayer>
                <ParallaxLayer offset={4.2} speed={1}>
                    <img
                        width={400}
                        alt='Flowers'
                        className={classes.Flowers}
                        src={Photos.Flowers} />
                </ParallaxLayer>
                <ParallaxLayer className={classes.VenueContainer} offset={4} speed={0.5}>
                    <div className={classes.Venue}>
                        <h1>St. Margaret Mary Alacoque Church</h1>
                        <div className={classes.GoogleMap}>
                            <iframe
                                src={googleMapUrl}
                                width='600'
                                frameBorder={0}
                                height='450' />
                        </div>
                    </div>
                </ParallaxLayer>
            </div>
        );
    }
}

export const Venue: React.ComponentType<Pick<IVenueProps, never> & StyledComponentProps>
    = injectSheet(VenueStyles)(VenueComponent);
