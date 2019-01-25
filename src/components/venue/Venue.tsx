import * as React from 'react';

import injectSheet, { StyledComponentProps } from 'react-jss';

import * as cx from 'classnames';
import { ParallaxLayer } from 'react-spring';
import { Photos } from '../../assets/photos/Photos';
import { ScheduleTab } from './tabs/ScheduleTab';
import { VenueClasses, VenueStyles } from './VenueStyles';
import { HotelTab } from './tabs/HotelTab';
import { ChurchTab } from './tabs/ChurchTab';
import { ReceptionTab } from './tabs/ReceptionTab';

export interface IVenueProps {
    classes: Record<VenueClasses, string>;
    numberOfTabs?: number;
    tabs?: ITab[];
}

interface IVenueState {
    activeTab: Tab;
}

interface ITab {
    name: string;
    key: number;
}

export enum Tab {
    Schedule,
    Hotel,
    Church,
    Reception
}

export const numberOfTabs: number = Number(Object.keys(Tab).length / 2);

export interface ITabProps {
    classes: Record<VenueClasses, string>;
    switchTab(tab: Tab): void;
}

// tslint:disable-next-line:max-line-length
const googleMapUrl: string = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12167.97416253859!2d-76.8448431!3d40.3203009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe801f10564382fd!2sSt+Margaret+Mary+Church+Rectory!5e0!3m2!1sen!2sus!4v1547065084355';

/**
 * Venue Component
 */
export class VenueComponent extends React.Component<IVenueProps, IVenueState> {

    public static defaultProps: IVenueProps = {
        classes: null,
        numberOfTabs: numberOfTabs,
        tabs: Object.keys(Tab)
            .filter((value: string) => Tab[Number(value)] === undefined)
            .map((tabName: string, key: number) => ({ name: tabName, key: key }))
    };

    public state: IVenueState = { activeTab: Tab.Schedule };

    public switchTab = (tab: Tab): void => {
        this.setState({
            activeTab: tab
        });
    }

    public showTab = (tab: Tab): string => {
        return cx({
            ['activeTab']: this.state.activeTab === tab
        });
    }

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
                        <ul className={classes.VenueTabs}>
                            {this.props.tabs.map((tab: ITab) => {
                                const lastVenueTabClass: string =
                                    tab.key === this.props.numberOfTabs - 1
                                        ? classes.LastVenueTab
                                        : '';

                                return (
                                    <li role='button'
                                        className={`tab
                                        ${lastVenueTabClass}
                                        ${classes.VenueTab}
                                        ${this.showTab.call(this, tab.key)}`}
                                        key={tab.key}
                                        onClick={this.switchTab.bind(this, tab.key)}>
                                        <p>{tab.name}</p>
                                    </li>);
                            })}
                        </ul>
                        {this.props.tabs.map((tab: ITab) => (
                            <div
                                key={tab.key}
                                className={`tabContent ${this.showTab.call(this, tab.key)}`}>
                                {
                                    ((): JSX.Element => {
                                        const props: ITabProps = {
                                            classes: classes,
                                            switchTab: this.switchTab
                                        };
                                        switch (tab.key) {
                                            case Tab.Schedule:
                                                return <ScheduleTab {...props} />;
                                            case Tab.Hotel:
                                                return <HotelTab {...props} />;
                                            case Tab.Church:
                                                return <ChurchTab {...props} />;
                                            case Tab.Reception:
                                                return <ReceptionTab {...props} />;
                                            default:
                                                return null;
                                        }
                                    })()}
                            </div>
                        ))}
                    </div>
                </ParallaxLayer>
            </div>
        );
    }
}

export const Venue: React.ComponentType<Pick<IVenueProps, never> & StyledComponentProps>
    = injectSheet(VenueStyles)(VenueComponent);
