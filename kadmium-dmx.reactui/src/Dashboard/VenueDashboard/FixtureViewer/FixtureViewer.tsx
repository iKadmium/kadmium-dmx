import React from 'react';
import gql from 'graphql-tag';
import { Query, Subscription } from 'react-apollo';
import { FixtureViewerQuery, FixtureViewerQueryVariables } from 'generated/FixtureViewerQuery';
import { FixtureViewerSubscription, FixtureViewerSubscriptionVariables } from 'generated/FixtureViewerSubscription';
import { Alert, Card, Row, Col } from 'antd';
import { FixturePreviewCard } from './FixturePreviewCard';

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
            }
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

export interface IFixtureViewerProps
{
    universeId: number;
}

export class FixtureViewer extends React.Component<IFixtureViewerProps>
{

    public render(): JSX.Element
    {
        return (
            <Query<FixtureViewerQuery, FixtureViewerQueryVariables>
                query={fixtureViewerQuery}
                variables={{ universeId: this.props.universeId }}
            >
                {({ data: queryData, error: queryError, loading: queryLoading }) =>
                {
                    return (
                        <Subscription<FixtureViewerSubscription, FixtureViewerSubscriptionVariables>
                            subscription={fixtureViewerSubscription}
                            variables={{ universeId: this.props.universeId }}
                        >
                            {({ data: dmxData, error: subscriptionError, loading: subscriptionLoading }) =>
                            {
                                if (queryError || subscriptionError)
                                {
                                    return (
                                        <Alert type="error" message={queryError ? queryError.message : subscriptionError.message} />
                                    );
                                }
                                if (queryLoading || subscriptionLoading)
                                {
                                    return (
                                        <Card loading={queryLoading || subscriptionLoading}></Card>
                                    );
                                }
                                return (
                                    <Row>
                                        {queryData.activeUniverse.fixtures.map(fixture =>
                                            <Col lg={7} key={fixture.address}>
                                                <FixturePreviewCard fixture={fixture} dmx={dmxData.universeDmx.dmx} />
                                            </Col>
                                        )}
                                    </Row>
                                );
                            }}
                        </Subscription>
                    );
                }}
            </Query>
        );
    }
}