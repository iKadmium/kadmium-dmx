import { useQuery, useSubscription } from '@apollo/react-hooks';
import { Alert, Card, Collapse, Divider, Slider } from 'antd';
import { FixtureControllerQuery, FixtureControllerQueryVariables } from 'generated/FixtureControllerQuery';
import { FixtureControllerSubscription, FixtureControllerSubscriptionVariables } from 'generated/FixtureControllerSubscription';
import gql from 'graphql-tag';
import React from 'react';
import { AttributeSlider } from './AttributeSlider';
import { FixturePreviewWindow } from './FixturePreviewWindow';

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
                name,
                value
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

export const FixtureController: React.FC<IFixtureControllerProps> = (props) =>
{
    const { data: queryData, loading: queryLoading, error: queryError } = useQuery<FixtureControllerQuery, FixtureControllerQueryVariables>(
        fixtureControllerQuery,
        {
            variables: {
                universeId: props.universeId,
                address: props.address
            }
        }
    );
    const { data: subscriptionData, loading: subscriptionLoading, error: subscriptionError } = useSubscription<FixtureControllerSubscription, FixtureControllerSubscriptionVariables>(
        fixtureControllerSubscription,
        {
            variables: { universeId: props.universeId }
        }
    );

    const channelSteps = {
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

    if (queryError || subscriptionError)
    {
        return (<Alert message={queryError.message} />);
    }
    if (queryLoading || subscriptionLoading)
    {
        return (<Card loading={queryLoading} />);
    }

    return (
        <Card title={`${props.address} ${queryData.activeFixture.manufacturer} ${queryData.activeFixture.model}`}>

            <FixturePreviewWindow dmx={subscriptionData.universeDmx.dmx} fixture={queryData.activeFixture} />

            <Collapse>
                <Collapse.Panel key="DMX Channels" header="DMX Channels">
                    {queryData.activeFixture.channels.map(channel =>
                        <div key={channel.name}>
                            {channel.address} {channel.name} {channel.controlled && "(controlled)"}
                            <Slider min={channel.min} max={channel.max} disabled={channel.controlled} step={1} marks={channelSteps} />
                        </div>

                    )}
                </Collapse.Panel>
                <Divider />
                <Collapse.Panel key="Attributes" header="Attributes">
                    {queryData.activeFixture.attributes.map(attribute =>
                        <AttributeSlider
                            attribute={attribute}
                            universeId={props.universeId}
                            address={props.address}
                        />
                    )}
                </Collapse.Panel>
            </Collapse>
        </Card>
    );

}