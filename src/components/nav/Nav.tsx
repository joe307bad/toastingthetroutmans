import { withTheme } from '@callstack/react-theme-provider';
import * as React from 'react';

import { ITheme } from '../../theme';

interface INavProps {
    theme: ITheme;
    currentPageMarkerPosition: string;
    scrollTo(event: React.SyntheticEvent<HTMLDivElement>): void;
}
/**
 * Nav Component
 * Responsible for displaying the navigation for the application
 */
class NavComponent extends React.Component<INavProps, {}> {
    public render(): JSX.Element {
        return <nav style={this.props.theme.nav}>
            <div
                role='button'
                style={this.props.theme.navChild}
                data-position={0}
                onClick={this.props.scrollTo}>
                Engagement
                        </div>
            <div
                role='button'
                style={this.props.theme.navChild}
                data-position={1}
                onClick={this.props.scrollTo}>
                Photos
                        </div>
            <div
                role='button'
                style={this.props.theme.navChild}
                data-position={2}
                onClick={this.props.scrollTo}>
                Bridesmaids
                        </div>
            <div
                role='button'
                style={this.props.theme.navChild}
                data-position={0}
                onClick={this.props.scrollTo}>
                Groomsmen
                        </div>
            <div
                role='button'
                style={this.props.theme.navChild}
                data-position={0}
                onClick={this.props.scrollTo}>
                Venue
                        </div>
            <div
                role='button'
                style={this.props.theme.navChild}
                data-position={0}
                onClick={this.props.scrollTo}>
                Registry
                        </div>
            <div
                role='button'
                style={this.props.theme.navChild}
                data-position={0}
                onClick={this.props.scrollTo}>
                RSVP
                        </div>
            <div style={{ width: '100%' }}></div>
            <div style={{
                ...this.props.theme.currentPageMarker,
                left: this.props.currentPageMarkerPosition
            }}>
                <div style={this.props.theme.currentPageMarkerAccent}></div>
            </div>
        </nav>;
    }
}

export const Nav: React.ComponentType<Pick<INavProps, never>> = withTheme(NavComponent);
