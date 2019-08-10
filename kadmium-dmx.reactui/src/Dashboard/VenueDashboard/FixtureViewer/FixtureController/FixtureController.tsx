import React from 'react';
import { Card, Alert, Slider, Divider, Collapse } from 'antd';
import gql from 'graphql-tag';
import { Query, Subscription } from 'react-apollo';
import { FixtureControllerQueryVariables, FixtureControllerQuery } from 'generated/FixtureControllerQuery';
import { FixtureRenderer } from '../FixtureRenderer/FixtureRenderer';
import { FixturePreviewWindow } from './FixturePreviewWindow';
import { FixtureControllerSubscription, FixtureControllerSubscriptionVariables } from 'generated/FixtureControllerSubscription';

const fixtureControllerQuery = gql`
    query FixtureControllerQuery($universeId: Int!, $address: Int!) {
        activeFixture(universeId: $universeId, address: $address) {
            address,
            manufacturer,
            model,
            channels {
                controlled,
                address,
                name,
                min,
                max
            },
            attributes {
                controlled,
                name
            }
        }
    }
`;

const fixtureControllerSubscription = gql`
    subscription FixtureControllerSubscription($universeId: Int!) {
        universeDmx(universeId: $universeId) {
            dmx
        }

    }
`;

export interface IFixtureControllerProps
{
    universeId: number;
    address: number;
}

export class FixtureController extends React.Component<IFixtureControllerProps>
{
    private fixtureRenderer: FixtureRenderer;
    private canvasRef: React.RefObject<HTMLCanvasElement>;

    constructor(props)
    {
        super(props);
        this.canvasRef = React.createRef<HTMLCanvasElement>();
    }

    private static attributeSteps = {
        0: "0",
        0.1: "0.1",
        0.2: "0.2",
        0.3: "0.3",
        0.4: "0.4",
        0.5: "0.5",
        0.6: "0.6",
        0.7: "0.7",
        0.8: "0.8",
        0.9: "0.9",
        1: "1.0"
    };

    private static channelSteps = {
        0: "0",
        32: "32",
        64: "64",
        96: "96",
        128: "128",
        160: "160",
        192: "192",
        224: "224",
        255: "255"
    };

    public render(): JSX.Element
    {
        return (
            <Query<FixtureControllerQuery, FixtureControllerQueryVariables>
                query={fixtureControllerQuery}
                variables={{ universeId: this.props.universeId, address: this.props.address }}
            >
                {({ data: queryData, loading: queryLoading, error: queryError }) =>
                {
                    if (queryError)
                    {
                        return (
                            <Alert message={queryError.message} />
                        );
                    }
                    if (queryLoading)
                    {
                        return (
                            <Card loading={queryLoading}></Card>
                        );
                    }

                    return (
                        <Card title={`${this.props.address} ${queryData.activeFixture.manufacturer} ${queryData.activeFixture.model}`}>
                            <Subscription<FixtureControllerSubscription, FixtureControllerSubscriptionVariables>
                                subscription={fixtureControllerSubscription}
                                variables={{ universeId: this.props.universeId }}
                                onSubscriptionData={(options) =>
                                {

                                }}
                            >
                                {({ data: subscriptionData, loading: subscriptionLoading, error: subscriptionError }) =>
                                {
                                    if (subscriptionLoading)
                                    {
                                        return <div>Loading preview</div>
                                    }
                                    else if (subscriptionError)
                                    {
                                        return <Alert message={subscriptionError.message} />
                                    }
                                    else
                                    {
                                        return <FixturePreviewWindow dmx={subscriptionData.universeDmx.dmx} fixture={queryData.activeFixture} />
                                    }

                                }}
                            </Subscription>

                            <Collapse>
                                <Collapse.Panel key="DMX Channels" header="DMX Channels">
                                    {queryData.activeFixture.channels.map(channel =>
                                        <div key={channel.name}>
                                            {channel.address} {channel.name} {channel.controlled && "(controlled)"}
                                            <Slider min={channel.min} max={channel.max} disabled={channel.controlled} step={1} marks={FixtureController.channelSteps} />
                                        </div>

                                    )}
                                </Collapse.Panel>
                                <Divider />
                                <Collapse.Panel key="Attributes" header="Attributes">
                                    {queryData.activeFixture.attributes.map(attribute =>
                                        <div key={attribute.name}>
                                            {attribute.name}
                                            <Slider min={0} max={1} disabled={attribute.controlled} step={0.01} marks={FixtureController.attributeSteps} />
                                        </div>
                                    )}
                                </Collapse.Panel>
                            </Collapse>
                        </Card>
                    );
                }
                }

            </Query>
        );
    }
}