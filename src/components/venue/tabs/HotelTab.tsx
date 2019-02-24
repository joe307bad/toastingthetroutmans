import * as React from 'react';

import { ITabProps, Tab } from '../Venue';

type THotelTab = (props: ITabProps) => JSX.Element;

// tslint:disable-next-line:max-line-length
const hotelMap: string = 'https://www.google.com/maps/place/Warehouse+Hotel/@40.105736,-76.4176265,15z/data=!4m5!3m4!1s0x0:0xa94d74fa436d7021!8m2!3d40.105736!4d-76.4176265';

/**
 * Venue tab for the Hotel
 * @param props Tab props
 */
export const HotelTab: THotelTab = (props: ITabProps): JSX.Element => {
    return (
        <div className={props.classes.HotelTab}>
            <h2>The Warehouse Hotel</h2>
            <a className='venueButton hvr-grow-shadow'
                target='_blank'
                rel='noopener noreferrer'
                href='https://book.b4checkin.com/chameleon/warehousehotel?groupCode=7489&ArrivalDate=10/26/2019&DepartureDate=10/27/2019'>
                Book Your Room <i className='fas fa-hotel' />
            </a>
            <a className='venueLink hvr-icon-drop'
                target='_blank'
                rel='noopener noreferrer'
                href={hotelMap} >
                <i className='fas fa-map-marker-alt hvr-icon' /><br />
                <span>75 Champ Boulevard<br />Manheim, PA 17545</span>
            </a>
            <br />
            <a className='venueLink hvr-icon-grow'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.warehousehotel.com/get-directions/' >
                <i className='fas fa-map-marked-alt hvr-icon' /><br />
                <span>Directions Information</span>
            </a>
            <br />
            <a className='venueLink hvr-icon-grow'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.spookynooksports.com/hubfs/parking_Map.jpg' >
                <i className='fas fa-parking hvr-icon' /><br />
                <span>Parking Information</span>
            </a>
            <div className='hotelWarning'>
                <p>
                    <i className='fas fa-exclamation-circle' />
                    Important! The Warehouse Hotel books quickly due to scheduled sports tournaments, etc. Please book as soon as you can!
                </p>
            </div>
        </div>
    );
};
