import * as React from 'react';
import { BridesmaidsClasses } from './BridesmaidsStyles';

export interface IPerson {
    photo: string;
    name: string;
    description: string;
}

export interface IPersonProps {
    classes: Record<BridesmaidsClasses, string>;
    person: IPerson;
}

/**
 * Person component
 */
type PersonComponent = (props: IPersonProps) => JSX.Element;
export const Person: PersonComponent = (props: IPersonProps): JSX.Element => {

    return (
        <div className={props.classes.Person} >
            <img src={props.person.photo} alt='Placeholder' />
            <h2>{props.person.name}</h2>
            <p>{props.person.description}</p>
        </div>
    );
};
