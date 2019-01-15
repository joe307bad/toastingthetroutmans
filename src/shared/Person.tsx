// tslint:disable-next-line:no-import-side-effect
import 'animate.css/animate.css';
import * as cx from 'classnames';
import { Cancelable, debounce } from 'lodash';
import * as React from 'react';
import { BridesmaidsClasses } from '../components/bridesmaids/BridesmaidsStyles';
import { GroomsmenClasses } from '../components/groomsmen/GroomsmenStyles';

export interface IPerson {
    photo: string;
    altPhoto?: string;
    name: string;
    description: string;
    role?: string;
}

export interface IPersonProps {
    classes: Record<BridesmaidsClasses & GroomsmenClasses, string>;
    person: IPerson;
}

export interface IPersonState {
    entering: boolean;
    exiting: boolean;
}

/**
 * Person component
 */
//type PersonComponent = (this.props: IPersonProps) => JSX.Element;
export class Person extends React.Component<IPersonProps, IPersonState> {

    public state: IPersonState = {
        entering: false,
        exiting: false
    };

    public toggleAltPhoto: ((entering: boolean) => void) & Cancelable =
        debounce(
            (entering: boolean): void => {
                this.setState({
                    entering: entering,
                    exiting: !entering
                });
            },
            500,
            {
                leading: true
            });

    public render(): JSX.Element {

        return (
            <div >
                <div
                    className='imageContainer'
                    onMouseEnter={this.toggleAltPhoto.bind(this, true)}
                    onMouseLeave={this.toggleAltPhoto.bind(this, false)}>

                    {this.props.person.altPhoto
                        && <img
                            className={cx('altPhoto', {
                                ['rollIn animated']: this.state.entering,
                                ['rollOut animated']: this.state.exiting
                                    || (!this.state.entering && !this.state.exiting)
                            })}
                            src={this.props.person.altPhoto} alt='Placeholder' />}

                    <img src={this.props.person.photo} alt='Placeholder' />
                </div>
                <h2>{this.props.person.name}</h2>
                {this.props.person.role && <p>{this.props.person.role}</p>}
                <p>{this.props.person.description}</p>
            </div>
        );
    }
}
