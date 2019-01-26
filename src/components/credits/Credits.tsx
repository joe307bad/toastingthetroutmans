import * as cx from 'classnames';
import * as React from 'react';
import injectSheet, { StyledComponentProps } from 'react-jss';
import { CreditClasses, CreditStyles } from './CreditsStyles';

interface ICredit {
    name: string;
    responsiblity: string;
    website: string;
}

interface ICreditsProps {
    classes: Record<CreditClasses, string>;
    creditsOpen: boolean;
}

const credits: ICredit[] = [
    {
        name: 'Courtney Cerjanic',
        responsiblity: 'Wedding Planner',
        website: 'https://sapphireroadweddings.com/'
    },
    {
        name: 'Amy Rech',
        responsiblity: 'Photography',
        website: 'https://amyrechphotography.com/'
    },
    {
        name: 'Sarah Brookhart',
        responsiblity: 'Photography',
        website: 'http://www.sarahbrookhart.com/'
    },
    {
        name: 'Joe Badaczewski',
        responsiblity: 'Web Designer',
        website: 'https://joebad.com'
    }
];

/**
 * Component for Crediting contributors to the wedding and photography
 */
export class CreditsComponent extends React.Component<ICreditsProps, {}> {

    public render(): JSX.Element {
        const classes: Record<CreditClasses, string> = this.props.classes;

        return (
            <div className={cx(classes.CreditsContainer, {
                ['creditsOpen']: this.props.creditsOpen
            })}>
                <h2 className='specialThanks'>Special Thanks To:</h2>
                <ul>
                    {credits.map((credit: ICredit, key: number) => (
                        <li key={key}>
                            <h2>{credit.name}</h2>
                            <p>{credit.responsiblity}</p>
                            <a target='_blank'
                                rel='noopener noreferrer'
                                href={credit.website}>
                                <i className={'fas fa-external-link-alt'} />
                                </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export const Credits: React.ComponentType<Pick<{}, never> & StyledComponentProps>
    = injectSheet(CreditStyles)(CreditsComponent);
