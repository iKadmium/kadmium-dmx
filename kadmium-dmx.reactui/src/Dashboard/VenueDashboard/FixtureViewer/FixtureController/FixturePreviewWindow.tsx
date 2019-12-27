import { FixtureViewerQuery_activeUniverse_fixtures } from 'generated/FixtureViewerQuery';
import React from 'react';
import { FixtureRenderer } from '../FixtureRenderer/FixtureRenderer';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Canvas = styled.canvas`
    border: 1px solid black;
    margin-bottom: 20px;
`;

export interface IFixturePreviewWindowProps
{
    fixture: FixtureViewerQuery_activeUniverse_fixtures;
    dmx: number[];
}

export class FixturePreviewWindow extends React.Component<IFixturePreviewWindowProps>
{
    private canvasRef: React.RefObject<HTMLCanvasElement>;
    private fixtureRenderer: FixtureRenderer;

    constructor(props: Readonly<IFixturePreviewWindowProps>)
    {
        super(props);
        this.canvasRef = React.createRef<HTMLCanvasElement>();
        this.fixtureRenderer = new FixtureRenderer(props.fixture);
    }

    public shouldComponentUpdate(nextProps: IFixturePreviewWindowProps): boolean
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

    public render(): JSX.Element
    {
        return (
            <Container>
                <Canvas ref={this.canvasRef} width={200} height={200}></Canvas>
            </Container>
        );
    }
}