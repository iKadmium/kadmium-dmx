import { Button, Card, Icon, Switch } from 'antd';
import { StatusStatistic } from 'Dashboard/StatusStatistic/StatusStatistic';
import { ListenerEnabledQuery } from 'generated/ListenerEnabledQuery';
import { ListenerEnableMutation, ListenerEnableMutationVariables } from 'generated/ListenerEnableMutation';
import { ListenerStatusSubscription } from 'generated/ListenerStatusSubscription';
import gql from 'graphql-tag';
import React from 'react';
import { Mutation, Query, Subscription } from 'react-apollo';
import { Link } from 'react-navi';

const listenerStatusSubscription = gql`
    subscription ListenerStatusSubscription {
        listenerStatus
        {
            statusCode
            message
        }
    }
`;

const listenerEnabledQuery = gql`
    query ListenerEnabledQuery {
        listenerEnabled
    }
`;

const listenerEnabledMutation = gql`
    mutation ListenerEnableMutation($enabled: Boolean!) {
        setListenerEnabled(enabled: $enabled)
    }
`;

export const ListenerDashboard: React.FunctionComponent<{}> = () =>
{
    const getActions = () =>
    {
        const actions: React.ReactNode[] = [
            <Mutation<ListenerEnableMutation, ListenerEnableMutationVariables> mutation={listenerEnabledMutation}>
                {(setListenerEnabled) =>
                {
                    return (
                        <Query<ListenerEnabledQuery> query={listenerEnabledQuery}>
                            {({ data: listenerEnabledData, loading }) =>
                            {
                                if (!loading)
                                {
                                    return (
                                        <Switch
                                            checkedChildren={<Icon type="check" />}
                                            unCheckedChildren={<Icon type="pause" />}
                                            defaultChecked={listenerEnabledData.listenerEnabled}
                                            onChange={(checked) => setListenerEnabled({ variables: { enabled: checked } })}
                                        />
                                    );
                                }
                                else
                                {
                                    return null;
                                }
                            }}
                        </Query>

                    );
                }}

            </Mutation>,

            <Link href="listener">
                <Button
                    type="primary"
                >
                    <Icon type="search" />Monitor
                </Button>
            </Link>
        ];
        return actions;
    };

    return (
        <Subscription<ListenerStatusSubscription> subscription={listenerStatusSubscription}>
            {({ data, loading }) =>
            {
                return (
                    <Card
                        loading={loading}
                        title="OSC Listener"
                        actions={getActions()}
                    >
                        {data &&
                            <StatusStatistic code={data.listenerStatus.statusCode} message={data.listenerStatus.message} />
                        }
                    </Card>
                );
            }}
        </Subscription>
    );
}