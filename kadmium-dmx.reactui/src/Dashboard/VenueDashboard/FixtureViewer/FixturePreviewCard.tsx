import React from 'react';
import { FixtureViewerQuery_activeUniverse_fixtures } from 'generated/FixtureViewerQuery';
import { Card, Icon } from 'antd';
import { FixtureRenderer } from './FixtureRenderer/FixtureRenderer';
import { Link } from 'react-navi';
import { FixturePreviewWindow } from './FixtureController/FixturePreviewWindow';

export interface IFixturePreviewCardProps
{
    fixture: FixtureViewerQuery_activeUniverse_fixtures;
    dmx: number[];
}

export class FixturePreviewCard extends React.Component<IFixturePreviewCardProps>
{
    private fixtureRenderer: FixtureRenderer;

    constructor(props: Readonly<IFixturePreviewCardProps>)
    {
        super(props);
        this.getActions.bind(this);
        this.fixtureRenderer = new FixtureRenderer(props.fixture);
    }

    private getActions(): React.ReactNode[]
    {
        return [
            <Link href={`${this.props.fixture.address}`}>
                <Icon type="control" />
            </Link>,
            <Icon type="edit" />,
            <Icon type="setting" />,
            <Icon type="delete" />
        ];
    }

    public render(): JSX.Element
    {
        return (
            <Card
                title={`${this.props.fixture.address} - ${this.props.fixture.manufacturer} ${this.props.fixture.model}`}
                actions={this.getActions()}
            >
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <FixturePreviewWindow fixture={this.props.fixture} dmx={this.props.dmx} />
                </div>
            </Card>
        );
    }
}