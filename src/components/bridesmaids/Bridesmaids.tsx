import * as React from 'react';

import injectSheet, { StyledComponentProps } from 'react-jss';
import { ParallaxLayer } from 'react-spring';
import { BridesmaidsClasses, BridesmaidsStyles } from './BridesmaidsStyles';
import { IPerson, Person } from './Person';

interface IBridesmaidsProps {
    classes: Record<BridesmaidsClasses, string>;
}

const bridesmaids: IPerson[] = [
    {
        // tslint:disable-next-line:no-http-string
        photo: 'http://techplace.ca/wp-content/uploads/2016/11/woman.png',
        name: 'Courtney Cerjanic',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    }
];

/**
 * Bridesmaids Component
 */
export class BridesmaidsComponent extends React.Component<IBridesmaidsProps, {}> {

    public render(): JSX.Element {
        const classes: Record<BridesmaidsClasses, string> = this.props.classes;

        return (
            <ParallaxLayer style={{
                borderBottom: '10px solid black',
                marginTop: 70
            }} offset={2} speed={1}>
                <Person classes={classes} person={bridesmaids[0]} />
            </ParallaxLayer>
        );
    }
}

export const Bridesmaids: React.ComponentType<Pick<{}, never> & StyledComponentProps>
    = injectSheet(BridesmaidsStyles)(BridesmaidsComponent);
