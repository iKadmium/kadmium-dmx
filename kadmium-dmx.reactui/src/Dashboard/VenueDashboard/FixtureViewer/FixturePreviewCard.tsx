import React from 'react';
import { FixtureViewerQuery_activeUniverse_fixtures } from 'generated/FixtureViewerQuery';
import { Card, Icon } from 'antd';
import { FixtureRenderer } from './FixtureRenderer/FixtureRenderer';
import { Link } from 'react-navi';

export interface IFixturePreviewCardProps
{
    fixture: FixtureViewerQuery_activeUniverse_fixtures;
    dmx: number[];
}

export class FixturePreviewCard extends React.Component<IFixturePreviewCardProps>
{
    private canvasRef: React.RefObject<HTMLCanvasElement>;
    private fixtureRenderer: FixtureRenderer;

    constructor(props)
    {
        super(props);
        this.getActions.bind(this);
        this.canvasRef = React.createRef<HTMLCanvasElement>();
        this.fixtureRenderer = new FixtureRenderer(props.fixture);
    }

    public shouldComponentUpdate(nextProps: IFixturePreviewCardProps): boolean
    {
        if (this.props.fixture !== nextProps.fixture)
        {
            this.fixtureRenderer = new FixtureRenderer(nextProps.fixture);
            return true;
        }
        else
        {
            if (this.canvasRef.current)
            {
                const ctx = this.canvasRef.current.getContext('2d');
                this.fixtureRenderer.render(ctx, nextProps.dmx);
            }
        }
        return false;
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
                    <canvas ref={this.canvasRef} width={200} height={200}></canvas>
                </div>
            </Card>
        );
    }
}