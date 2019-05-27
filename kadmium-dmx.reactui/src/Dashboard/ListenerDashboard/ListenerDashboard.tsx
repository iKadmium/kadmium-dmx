import { Button, Card, Icon } from 'antd';
import { StatusStatistic } from 'Dashboard/StatusStatistic/StatusStatistic';
import { ListenerDashboardSubscription } from 'generated/ListenerDashboardSubscription';
import gql from 'graphql-tag';
import React from 'react';
import { Subscription } from 'react-apollo';
import { Link } from 'react-navi';

const dashboardSubscription = gql`
    subscription ListenerDashboardSubscription {
        listenerStatus
        {
            statusCode
            message
        }
    }
`;

export const ListenerDashboard: React.FunctionComponent<{}> = () =>
{
    const getActions = () =>
    {
        const actions: React.ReactNode[] = [
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
        <Subscription<ListenerDashboardSubscription> subscription={dashboardSubscription}>
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