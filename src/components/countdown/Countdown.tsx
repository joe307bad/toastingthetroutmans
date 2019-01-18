import * as React from 'react';
import injectSheet, { StyledComponentProps } from 'react-jss';

// @ts-ignore
import * as cd from 'react-downcount';
import { CountdownClasses, CountdownStyles } from './CountdownStyles';

interface ICountownProps {
    classes: Record<CountdownClasses, string>;
}

/**
 * Countdown Component
 */
export class CountdownComponent extends React.Component<ICountownProps, {}> {

    public renderCountdown = (countdownData: { days: number; hrs: number; mins: number; secs: number }): any => {
        const classes: Record<CountdownClasses, string> = this.props.classes;

        return (
            <React.Fragment>
                <p style={{ marginTop: 0, marginBottom: 0, whiteSpace: 'nowrap' }}>
                    {countdownData.days} days {countdownData.hrs} hours<br />
                    {countdownData.mins} minutes {countdownData.secs} seconds<br />
                    Until "I Do"</p>
            </React.Fragment>);
    }

    public render(): JSX.Element {
        return (
            <span><cd.default
                style={{
                    top: '50%',
                    position: 'absolute',
                    width: 500,
                    left: '50%',
                    marginLeft: -250,
                    marginTop: -55,
                    whiteSpace: 'nowrap'
                }}
                endDate={new Date(2019, 9, 26, 13)}
                children={this.renderCountdown}
            /></span>);
    }
}

export const Countdown: React.ComponentType<Pick<{}, never> & StyledComponentProps>
    = injectSheet(CountdownStyles)(CountdownComponent);
