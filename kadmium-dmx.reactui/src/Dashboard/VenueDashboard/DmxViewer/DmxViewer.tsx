import { Alert } from 'antd';
import { UniverseSubscription, UniverseSubscriptionVariables } from 'generated/UniverseSubscription';
import { ActiveUniverseQuery, ActiveUniverseQueryVariables, ActiveUniverseQuery_activeUniverse_fixtures } from 'generated/ActiveUniverseQuery';
import gql from 'graphql-tag';
import React from 'react';
import { Subscription, Query } from 'react-apollo';
import { DmxRenderer } from './DmxRenderer';

const dmxSubscription = gql`
    subscription UniverseSubscription($universeId: Int!){
        universeDmx(universeId: $universeId) {
            dmx
        }
    }
`;

const activeUniverseQuery = gql`
    query ActiveUniverseQuery($universeId: Int!){
        activeUniverse(universeId: $universeId) {
            fixtures {
                address,
                manufacturer,
                model
                channels 
                {
                    address,
                    name
                    controlled
                }
            }
        }
    }
`

interface IDmxViewerProps
{
    universeId: number
};

export class DmxViewer extends React.Component<IDmxViewerProps>
{
    private canvasRef: React.RefObject<HTMLCanvasElement>;
    private renderer: DmxRenderer;
    private fixtures: ActiveUniverseQuery_activeUniverse_fixtures[];

    constructor(props)
    {
        super(props);

        this.canvasRef = React.createRef<HTMLCanvasElement>();

    }

    private handleCanvasClick(event: React.MouseEvent<HTMLCanvasElement, MouseEvent>): void
    {
        if (this.renderer)
        {
            const x = event.nativeEvent.offsetX;
            const y = event.nativeEvent.offsetY;
            this.renderer.handleCanvasClick(x, y);
        }
    }

    public render()
    {
        return (
            <Subscription<UniverseSubscription, UniverseSubscriptionVariables>
                variables={{ universeId: this.props.universeId }}
                subscription={dmxSubscription}
                onSubscriptionData={options =>
                {
                    const data = options.subscriptionData.data.universeDmx;
                    if (this.canvasRef.current && this.fixtures)
                    {
                        if (!this.renderer)
                        {
                            this.renderer = new DmxRenderer(this.fixtures);
                        }
                        if (this.renderer)
                        {
                            const context = this.canvasRef.current.getContext('2d');
                            this.renderer.render(context, data.dmx);
                        }
                    }

                }}
            >
                {({ error }) =>
                {
                    if (error)
                    {
                        return (
                            <Alert message={error.message} type="error" />
                        );
                    }
                    else
                    {
                        return (
                            <Query<ActiveUniverseQuery, ActiveUniverseQueryVariables>
                                query={activeUniverseQuery}
                                variables={{ universeId: this.props.universeId }}
                            >
                                {(data) =>
                                {
                                    if (data.data.activeUniverse)
                                    {
                                        this.fixtures = data.data.activeUniverse.fixtures;
                                    }
                                    return (
                                        <canvas
                                            ref={this.canvasRef}
                                            width={DmxRenderer.totalWidth}
                                            height={DmxRenderer.totalHeight}
                                            style={{ background: 'black' }}
                                            onClick={(event) => this.handleCanvasClick(event)}
                                        ></canvas>
                                    );
                                }
                                }
                            </Query>
                        );
                    }
                }
                }
            </Subscription>

        );
    }

    private generateData = (data: number[]) => 
    {
        for (let i = 0; i < 512; i++)
        {
            const value = Math.floor(Math.random() * 255);
            data[i] = value;
        }
    }
}