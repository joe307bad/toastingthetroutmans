import * as React from 'react';

import { ITabProps, Tab } from '../Venue';

type TScheduleTab = (props: ITabProps) => JSX.Element;

/**
 * Venue tab for the Schedule
 * @param props Tab props
 */
export const ScheduleTab: TScheduleTab = (props: ITabProps): JSX.Element => {
    return (
        <div className={props.classes.ScheduleTab}>
            <ul>
                <li><span>2:00pm - 3:00pm</span>
                    <div>Ceremony begins at&nbsp;
                        <i role='button'
                            onClick={props.switchTab.bind({}, Tab.Church)}>
                            St. Margaret Mary Alacoquoe Church
                            </i>
                    </div>
                </li>
                <li><span>4:15pm</span>
                    <div>First shuttle leaves fromt&nbsp;
                        <i role='button'
                            onClick={props.switchTab.bind({}, Tab.Hotel)}>
                            The Warehouse Hotel
                            </i> to travel to cocktail hour and the reception
                     </div>
                </li>
                <li><span>4:30pm</span>
                    <div>Cocktail Hour begins at&nbsp;
                        <i role='button'
                            onClick={props.switchTab.bind({}, Tab.Reception)}>
                            Historic Acres
                            </i>
                    </div>
                </li>
                <li><span>4:45pm</span>
                    <div>
                        Last shuttle leaves from The Warehouse Hotel to travel to the reception
                    </div>
                </li>
                <li><span>6:00pm</span>
                    <div>
                        Dinner begins at Historic Acres
                     </div>
                </li>
                <li><span>8:30pm</span>
                    <div>
                        <i role='button'
                            onClick={props.scrollToBridalDance}>
                            Bridal Dance!
                            </i>
                    </div>
                </li>
                <li><span>10:45pm</span>
                    <div>
                        First shuttle departs from the reception to travel back to the hotel
                     </div>
                </li>
                <li><span>11:00pm</span>
                    <div>
                        Last shuttle departs from the reception to travel back to the hotel
                     </div>
                </li>
            </ul>
        </div>
    );
};
