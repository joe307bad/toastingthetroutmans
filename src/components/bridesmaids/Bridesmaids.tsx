import * as React from 'react';

import injectSheet, { StyledComponentProps } from 'react-jss';
import Masonry from 'react-masonry-component';
import { ParallaxLayer } from 'react-spring';
import { EngagementPhotos } from '../../assets/photos/engagement/EngagementPhotos';

/**
 * Bridesmaids Component
 */
export class BridesmaidsComponent extends React.Component<{}> {

    public render(): JSX.Element {

        return (
            <ParallaxLayer offset={2} speed={1}>
                <h1>Bridesmaids</h1>
            </ParallaxLayer>
        );
    }
}

export const Photos: React.ComponentType<Pick<{}, never> & StyledComponentProps>
    = injectSheet({})(BridesmaidsComponent);
