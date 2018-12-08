import * as React from 'react';

import injectSheet, { StyledComponentProps } from 'react-jss';
import { ParallaxLayer } from 'react-spring';

/**
 * Photos Component
 */
export class PhotosComponent extends React.Component<{}> {

    public render(): JSX.Element {
        // const classes: Record<HomeClasses, string> = this.props.classes;

        return (
            <div>
                <ParallaxLayer offset={1} speed={0}>
                    <h1>Hey</h1>
                </ParallaxLayer>
            </div>
        );
    }
}

export const Photos: React.ComponentType<Pick<{}, never> & StyledComponentProps>
    = injectSheet({})(PhotosComponent);
