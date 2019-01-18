import * as React from 'react';
import injectSheet, { StyledComponentProps } from 'react-jss';

// @ts-ignore
import * as cx from 'classnames';
// @ts-ignore
import * as cd from 'react-downcount';
import { animated, Transition } from 'react-spring';
import { primary } from '../../theme';
import { CountdownClasses, CountdownStyles } from './CountdownStyles';

interface ICountownProps {
    classes: Record<CountdownClasses, string>;
}

interface ICountdownState {
    countdownButtonHovered: boolean;
    items: JSX.Element[];
}

const CountdownContent: React.CSSProperties = {
    overflow: 'hidden',
    backgroundColor: 'white',
    position: 'fixed',
    zIndex: 1,
    left: '50%',
    boxShadow: '9px 9px 5px -3px rgba(0,0,0,0.22)',
    textAlign: 'center',
    fontFamily: 'Imperator',
    color: primary,
    fontSize: 25,
    border: `5px solid ${primary}`
};

const CountdownText: React.CSSProperties = {
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: 'nowrap',
    fontWeight: 'bold'
};

const UntilIDo: React.CSSProperties = {
    fontSize: 17,
    fontWeight: 'normal'
};

/**
 * Countdown Component
 */
export class CountdownComponent extends React.Component<ICountownProps, ICountdownState> {

    public state: ICountdownState = {
        countdownButtonHovered: false,
        items: []
    };

    public renderCountdown =
        (countdownData: { days: number; hrs: number; mins: number; secs: number }): JSX.Element => {

            return (
                <React.Fragment>
                    <p style={CountdownText}>
                        {countdownData.days} days {countdownData.hrs} hours<br />
                        {countdownData.mins} minutes {countdownData.secs} seconds<br />
                        <span style={UntilIDo}>Until "I Do"</span></p>
                </React.Fragment>);
        }

    public countdownButtonHover = (): void => {
        this.setState({
            countdownButtonHovered: true
        });

        setTimeout(
            () => {
                this.setState({
                    countdownButtonHovered: false
                });
            },
            1000);
    }

    public toggleCountdown = (style: React.CSSProperties): void => {
        if (this.state.items.length !== 0) {
            this.setState({
                items: []
            });
        } else {
            this.setState({
                items: [<this.countdownContent style={style} key={0} />]
            });
        }
    }

    public countdownContent = (props: { style: React.CSSProperties }): JSX.Element => {

        return (
            <span>
                <cd.default
                    className={props.style}
                    endDate={new Date(2019, 9, 26, 13)}
                    children={this.renderCountdown}
                />
            </span>);
    }

    public render(): JSX.Element {
        const classes: Record<CountdownClasses, string> = this.props.classes;

        return (
            <div>

                <i
                    onMouseEnter={this.countdownButtonHover}
                    className={cx(`${classes.CountdownButton} fas fa-hourglass-half`, {
                        ['animated tada']: this.state.countdownButtonHovered,
                        ['shadowed base']: this.state.items.length === 0,
                        ['raised']: this.state.items.length
                    })} />
                <i
                    role='button'
                    onClick={this.toggleCountdown.bind(this, classes.Countdown)}
                    onMouseEnter={this.countdownButtonHover}
                    className={cx(`${classes.CountdownButton} fas fa-compress-arrows-alt`, {
                        ['shadowed']: this.state.items.length,
                        ['raised']: this.state.items.length
                    })} />
                {
                    // @ts-ignore
                    <Transition
                        native={true}
                        keys={this.state.items.map((item: JSX.Element, key: number) => key)}
                        from={{ height: 0, width: 0, marginLeft: 0, borderRadius: '120%' }}
                        enter={{ height: 160, width: 270, marginLeft: -135, bottom: 10, borderRadius: '0%' }}
                        leave={{ height: 25, width: 25, marginLeft: -17.5, bottom: 12, borderRadius: '50%' }}>
                        {this.state.items.length !== 0 ? this.state.items.map((item: JSX.Element) =>
                            (styles: React.CSSProperties): JSX.Element => (
                                <animated.div style={{ ...CountdownContent, ...styles }}>
                                    {item}
                                </animated.div>
                            )) : [<span key={1} />]}
                    </Transition>
                }
            </div>);
    }
}

export const Countdown: React.ComponentType<Pick<{}, never> & StyledComponentProps>
    = injectSheet(CountdownStyles)(CountdownComponent);
