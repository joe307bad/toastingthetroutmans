import * as React from 'react';

import { ITabProps, Tab } from '../Venue';

type TReceptionTab = (props: ITabProps) => JSX.Element;

const receptionLink: string = 'https://www.google.com/maps/place/Historic+Acres+of+Hershey+PA/@40.2301376,-76.6251963,15z/data=!4m2!3m1!1s0x0:0x7ac31fbd905ad590?ved=2ahUKEwihua6n9ofgAhWKGt8KHejPCucQ_BIwGHoECAUQCA';

/**
 * Venue tab for the Reception
 * @param props Tab props
 */
export const ReceptionTab: TReceptionTab = (props: ITabProps): JSX.Element => {
    return (
        <div className={props.classes.ReceptionTab}>
            <h2>Historic Acres of Hershey</h2>
            <a className='venueButton hvr-grow-shadow'
                target='_blank'
                rel='noopener noreferrer'
                href='https://historicacres.com/'>
                Reception Website <i className='fas fa-utensils' />
            </a>
            <a className='venueLink hvr-icon-drop'
                target='_blank'
                rel='noopener noreferrer'
                href={receptionLink} >
                <i className='fas fa-map-marker-alt hvr-icon' /><br />
                <span>3425 Old Hershey Road<br />Elizabethtown, PA 17022</span>
            </a>
        </div>
    );
};
