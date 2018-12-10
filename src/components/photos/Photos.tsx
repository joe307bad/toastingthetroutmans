import * as React from 'react';

import injectSheet, { StyledComponentProps } from 'react-jss';
import { ParallaxLayer } from 'react-spring';
import { EngagementPhotos } from '../../assets/photos/engagement/EngagementPhotos';

/**
 * Photos Component
 */
export class PhotosComponent extends React.Component<{}> {

    public render(): JSX.Element {
        // const classes: Record<HomeClasses, string> = this.props.classes;
        const photos: string[] = Object.keys(EngagementPhotos)
            .map((photo: string) => EngagementPhotos[photo]);

        return (
            <div>
                <ParallaxLayer offset={1} speed={0}>
                    {photos.map((photo: string, key: number) =>
                        (<img key={key} alt='photo' src={photo} />))}
                </ParallaxLayer>
            </div>
        );
    }
}

export const Photos: React.ComponentType<Pick<{}, never> & StyledComponentProps>
    = injectSheet({})(PhotosComponent);
