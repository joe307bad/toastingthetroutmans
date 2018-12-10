import * as React from 'react';

import injectSheet, { StyledComponentProps } from 'react-jss';
import Gallery from 'react-photo-gallery';
import { ParallaxLayer } from 'react-spring';
import { EngagementPhotos } from '../../assets/photos/engagement/EngagementPhotos';

/**
 * Photos Component
 */
export class PhotosComponent extends React.Component<{}> {

    public render(): JSX.Element {
        // const classes: Record<HomeClasses, string> = this.props.classes;
        const photos: { src: string; height: number; width: number }[] =
            Object.keys(EngagementPhotos)
                .map((photo: string) => EngagementPhotos[photo]);

        return (
            <div>
                <ParallaxLayer offset={1} speed={0}>
                    <Gallery photos={photos} />
                </ParallaxLayer>
            </div>
        );
    }
}

export const Photos: React.ComponentType<Pick<{}, never> & StyledComponentProps>
    = injectSheet({})(PhotosComponent);
