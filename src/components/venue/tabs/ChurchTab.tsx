import * as React from 'react';

import { ITabProps, Tab } from '../Venue';

type TChurchTab = (props: ITabProps) => JSX.Element;

// tslint:disable-next-line:max-line-length
const churchLink: string = 'https://www.google.com/maps/place/St+Margaret+Mary+Church+Rectory/@40.3203009,-76.8448431,15z/data=!4m5!3m4!1s0x0:0xe801f10564382fd!8m2!3d40.3203009!4d-76.8448431';

/**
 * Venue tab for the Church
 * @param props Tab props
 */
export const ChurchTab: TChurchTab = (props: ITabProps): JSX.Element => {
    return (
        <div className={props.classes.ChurchTab}>
            <h2>St. Margaret Mary Alacoque Church</h2>
            <a className='venueButton hvr-grow-shadow'
                target='_blank'
                rel='noopener noreferrer'
                href='http://stmmparish.org/'>
                Church Website <i className='fas fa-church' />
            </a>
            <a className='venueLink hvr-icon-drop'
                target='_blank'
                rel='noopener noreferrer'
                href={churchLink} >
                <i className='fas fa-map-marker-alt hvr-icon' /><br />
                <span>2800 Paxton Church Road<br />Harrisburg, PA 17110</span>
            </a>
        </div>
    );
};
