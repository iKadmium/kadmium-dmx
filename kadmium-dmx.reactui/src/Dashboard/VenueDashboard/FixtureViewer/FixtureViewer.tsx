import { useQuery, useSubscription, useMutation } from '@apollo/react-hooks';
import { Alert, Button, Card, Col, Row, message, Tabs } from 'antd';
import { FixtureViewerQuery, FixtureViewerQueryVariables } from 'generated/FixtureViewerQuery';
import { FixtureViewerSubscription, FixtureViewerSubscriptionVariables } from 'generated/FixtureViewerSubscription';
import gql from 'graphql-tag';
import { AddFixtures, IAddFixturesResult } from 'Popups/AddFixtures';
import React, { useState } from 'react';
import { FixturePreviewCard } from './FixturePreviewCard';
import { AddFixtureMutation, AddFixtureMutationVariables } from 'generated/AddFixtureMutation';

const fixtureViewerQuery = gql`
    query FixtureViewerQuery($universeId: Int!) {
        activeUniverse(universeId: $universeId) {
            name
            fixtures {
                address
                manufacturer
                model
                channels
                {
                    address
                    controlled
                    name
                    min
                    max
                }
                group
            }
        }

        groups {
            name
        }

        fixtures {
            manufacturer
            model
        }
}
`;

const fixtureViewerSubscription = gql`
    subscription FixtureViewerSubscription($universeId: Int!) {
        universeDmx(universeId: $universeId) {
            dmx
        }
    }
`;

const addFixtureMutation = gql`
    mutation AddFixtureMutation($universeId: Int!, $address: Int!, $quantity: Int!, $group: String!, $manufacturer: String!, $model: String!)
    {
        addFixture(universeId: $universeId, address: $address, quantity: $quantity, group: $group, manufacturer: $manufacturer, model: $model) {
            name
        }
    }
`;

export interface IFixtureViewerProps
{
    universeId: number;
}

export const FixtureViewer: React.FC<IFixtureViewerProps> = (props) =>
{
    const [addFixturesVisible, setAddFixturesVisible] = useState<boolean>(false);
    const { data: queryData, error: queryError, loading: queryLoading, refetch } = useQuery<FixtureViewerQuery, FixtureViewerQueryVariables>(fixtureViewerQuery, {
        variables: {
            universeId: props.universeId
        }
    });
    const { data: dmxData, error: subscriptionError, loading: subscriptionLoading } = useSubscription<FixtureViewerSubscription, FixtureViewerSubscriptionVariables>(fixtureViewerSubscription, {
        variables: {
            universeId: props.universeId
        }
    });
    const [addFixture] = useMutation<AddFixtureMutation, AddFixtureMutationVariables>(addFixtureMutation);

    const onVenueUpdate = () =>
    {
        refetch();
    }

    if (queryError || subscriptionError)
    {
        return (<Alert type="error" message={queryError ? queryError.message : subscriptionError.message} />);
    }
    if (queryLoading || subscriptionLoading)
    {
        return (<Card loading={queryLoading || subscriptionLoading}></Card>);
    }

    const handleAddFixtures = async (result: IAddFixturesResult) =>
    {
        setAddFixturesVisible(false);
        const mutationResult = await addFixture({
            variables: {
                address: result.address,
                group: result.group,
                quantity: result.quantity,
                universeId: props.universeId,
                manufacturer: result.fixtureType.manufacturer,
                model: result.fixtureType.model
            }
        });
        if (mutationResult.errors)
        {
            message.error(mutationResult.errors);
        }
        else
        {
            refetch();
        }
    };

    return (
        <>
            <h2>{queryData.activeUniverse.name} Fixtures</h2>
            <Tabs size="large">
                <Tabs.TabPane tab="Known" key="Known">
                    <Row>
                        {queryData.activeUniverse.fixtures.map(fixture =>
                            <Col lg={7} key={fixture.address}>
                                <FixturePreviewCard
                                    fixture={fixture}
                                    fixtures={queryData.fixtures}
                                    groups={queryData.groups.map(x => x.name)}
                                    dmx={dmxData.universeDmx.dmx}
                                    universeId={props.universeId}
                                    onUpdate={onVenueUpdate}
                                />
                            </Col>
                        )}
                    </Row>
                    <Button
                        size="large"
                        icon="plus"
                        type="primary"
                        onClick={() => setAddFixturesVisible(true)}
                    >Add</Button>
                    {addFixturesVisible && <AddFixtures
                        groups={queryData.groups.map(x => x.name)}
                        fixtures={queryData.fixtures}
                        onCancel={() => setAddFixturesVisible(false)}
                        onOk={handleAddFixtures}
                    />}
                </Tabs.TabPane>
                <Tabs.TabPane tab="Discover" key="Discover">
                    Discover!
                </Tabs.TabPane>
            </Tabs>
        </>
    );

}