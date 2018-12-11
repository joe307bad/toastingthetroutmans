import * as React from 'react';

import injectSheet, { StyledComponentProps } from 'react-jss';
import { ParallaxLayer } from 'react-spring';

/**
 * Groomsmen Component
 */
export class GroomsmenComponent extends React.Component<{}> {

    public render(): JSX.Element {

        return (
            <ParallaxLayer style={{ backgroundColor: 'black' }} offset={3} speed={1}>
                <h1>Groomsmen</h1>
            </ParallaxLayer>
        );
    }
}

export const Groomsmen: React.ComponentType<Pick<{}, never> & StyledComponentProps>
    = injectSheet({})(GroomsmenComponent);
