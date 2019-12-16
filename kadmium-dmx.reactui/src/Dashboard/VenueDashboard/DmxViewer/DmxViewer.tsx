import { Alert, Card, Descriptions } from 'antd';
import { UniverseSubscription, UniverseSubscriptionVariables } from 'generated/UniverseSubscription';
import { ActiveUniverseQuery, ActiveUniverseQueryVariables, ActiveUniverseQuery_activeUniverse_fixtures, ActiveUniverseQuery_activeUniverse_fixtures_channels } from 'generated/ActiveUniverseQuery';
import gql from 'graphql-tag';
import React from 'react';
import { Subscription, Query } from 'react-apollo';
import { DmxRenderer } from './DmxRenderer';
import { DescriptionsItemProps } from 'antd/lib/descriptions';

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

interface IDmxViewerState
{
    selectedChannel: ActiveUniverseQuery_activeUniverse_fixtures_channels | null;
    selectedFixture: ActiveUniverseQuery_activeUniverse_fixtures | null;
}

export class DmxViewer extends React.Component<IDmxViewerProps, IDmxViewerState>
{
    private canvasRef: React.RefObject<HTMLCanvasElement>;
    private renderer: DmxRenderer;
    private fixtures: ActiveUniverseQuery_activeUniverse_fixtures[];

    constructor(props: Readonly<IDmxViewerProps>)
    {
        super(props);

        this.canvasRef = React.createRef<HTMLCanvasElement>();
        this.onChannelClick = this.onChannelClick.bind(this);

        this.state = {
            selectedChannel: null,
            selectedFixture: null
        };
    }

    private handleCanvasClick(event: React.MouseEvent<HTMLCanvasElement, MouseEvent>): void
    {
        if (this.renderer)
        {
            const x = event.nativeEvent.offsetX;
            const y = event.nativeEvent.offsetY;
            this.renderer.handleCanvasClick(x, y, this.onChannelClick);
        }
    }

    private onChannelClick(fixture: ActiveUniverseQuery_activeUniverse_fixtures, channel: ActiveUniverseQuery_activeUniverse_fixtures_channels): void
    {
        this.setState({
            selectedChannel: channel,
            selectedFixture: fixture
        });
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

                                    const getDescriptionsItems: () => DescriptionsItemProps[] = () =>
                                    {
                                        const items: DescriptionsItemProps[] = [];
                                        if (this.state.selectedFixture)
                                        {
                                            items.push({ label: "Manufacturer", children: this.state.selectedFixture.manufacturer });
                                            items.push({ label: "Model", children: this.state.selectedFixture.model });
                                            items.push({ label: "Address", children: this.state.selectedFixture.address });
                                        }
                                        if (this.state.selectedChannel)
                                        {
                                            items.push({ label: "Channel", children: this.state.selectedChannel.address });
                                            items.push({ label: "Name", children: this.state.selectedChannel.name });
                                        }
                                        return items;
                                    }
                                    return (
                                        <>
                                            <canvas
                                                ref={this.canvasRef}
                                                width={DmxRenderer.totalWidth}
                                                height={DmxRenderer.totalHeight}
                                                style={{ background: 'black' }}
                                                onClick={(event) => this.handleCanvasClick(event)}
                                            ></canvas>
                                            {this.state.selectedChannel &&
                                                <Card title={`${this.state.selectedChannel.address}`}>
                                                    <Descriptions bordered={true} column={1}>
                                                        {getDescriptionsItems().map(item => <Descriptions.Item {...item} />)}
                                                    </Descriptions>
                                                </Card>
                                            }
                                        </>
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
}