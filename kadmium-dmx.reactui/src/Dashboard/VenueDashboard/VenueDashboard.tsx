import { Button, Card, Col, Divider, Dropdown, Icon, Menu, message, Row, Statistic, Tabs } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import { StatusStatistic } from 'Dashboard/StatusStatistic/StatusStatistic';
import { GetVenues, GetVenues_venues } from 'generated/GetVenues';
import { LoadVenue, LoadVenueVariables } from 'generated/LoadVenue';
import { SubscribeVenueStatus, SubscribeVenueStatus_venueStatus } from 'generated/SubscribeVenueStatus';
import gql from 'graphql-tag';
import React, { useState } from 'react';
import { Mutation, MutationFn, Query, Subscription } from 'react-apollo';
import { Link } from 'react-navi';

const getVenuesQuery = gql`
    query GetVenues {
        venues
        {
            name
        }
    }
`;

const loadVenueMutation = gql`
    mutation LoadVenue($name: String!)
    {
        loadVenue(name: $name)
        {
            name
        }
    }
`;

const venueSubscription = gql`
    subscription SubscribeVenueStatus {
        venueStatus {
            statusCode
            message
            activeVenue
            {
                name
                universes
                {
                    universeID
                    name
                    dmxChannels
                    fixtures
                    {
                        address
                    }
                }
            }
        }
    }
`;

export const VenueDashboard: React.FunctionComponent<{}> = () =>
{
    const [venuesMenuVisible, setVenuesMenuVisible] = useState(false);

    const getLoadedCard: (venueStatus: SubscribeVenueStatus_venueStatus) => JSX.Element = (venueStatus: SubscribeVenueStatus_venueStatus) =>
    {
        return (
            <Card
                title="Venue"
                actions={getActions()}
            >
                <StatusStatistic message={venueStatus.message} code={venueStatus.statusCode} />
                <Divider />
                <Tabs defaultActiveKey={venueStatus.activeVenue.universes[0].universeID.toString()}>
                    {venueStatus.activeVenue.universes.map(universe =>
                    {
                        return (
                            <Tabs.TabPane tab={universe.name} key={universe.universeID.toString()}>
                                <Row>
                                    <Col xs={12}>
                                        <Statistic title="Fixtures" value={universe.fixtures ? universe.fixtures.length : "?"} prefix={<Icon type="bulb" />} />
                                    </Col>
                                    <Col xs={12}>
                                        <Link href={`venue/${universe.universeID}/dmx`}>
                                            <Statistic title="DMX Channels" value={universe.dmxChannels ? universe.dmxChannels : "?"} prefix={<Icon type="table" />} />
                                        </Link>
                                    </Col>
                                </Row>

                                <Button><Icon type="search" />Discover</Button>
                            </Tabs.TabPane>
                        );
                    })}

                </Tabs>
            </Card>
        );
    }

    const getVenueMenu = () => 
    {
        const getMenuItems = (venues: GetVenues_venues[]) =>
        {
            const menuItems: JSX.Element[] = [];
            for (let venue of venues)
            {
                if (venue)
                {
                    menuItems.push(<Menu.Item key={venue.name}>{venue.name}</Menu.Item>);
                }
            }
            return menuItems;
        }

        const handleMenuClick = (item: ClickParam, loadVenue: MutationFn<LoadVenue, LoadVenueVariables>) =>
        {
            loadVenue({ variables: { name: item.key } })
            setVenuesMenuVisible(false);
        }

        return (
            <Mutation<LoadVenue, LoadVenueVariables> mutation={loadVenueMutation}>
                {(loadVenue) =>
                {
                    return (
                        <Query<GetVenues> query={getVenuesQuery}>
                            {({ loading, error, data }) =>
                            {
                                if (!loading)
                                {
                                    return (
                                        <Menu onClick={item => handleMenuClick(item, loadVenue)}>
                                            {getMenuItems(data.venues)}
                                        </Menu>
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
            </Mutation>
        );
    };

    const getActions = () =>
    {
        const actions: React.ReactNode[] = [
            <Dropdown
                overlay={getVenueMenu()}
                visible={venuesMenuVisible}
            >
                <Button
                    type="primary"
                    onClick={() => setVenuesMenuVisible(!venuesMenuVisible)}
                >
                    <Icon type="folder-open" />Load<Icon type="down" />
                </Button>
            </Dropdown>,
            <Button><Icon type="plus-circle" />Create</Button>
        ];
        return actions;
    };

    return (
        <Subscription<SubscribeVenueStatus> subscription={venueSubscription}>
            {(({ data: venueStatusData, loading: venueStatusLoading, error: venueStatusError }) => 
            {
                if (venueStatusError)
                {
                    message.error(venueStatusError);
                }
                else if (!venueStatusData || venueStatusLoading)
                {
                    return (
                        <Card
                            loading={venueStatusLoading}
                            title="Venue"
                        />
                    );
                }
                else if (venueStatusData.venueStatus.activeVenue)
                {
                    return getLoadedCard(venueStatusData.venueStatus);
                }
                else
                {
                    return (
                        <Card
                            loading={venueStatusLoading}
                            title="Venue"
                            actions={getActions()}
                        >
                            {venueStatusData.venueStatus.message}
                        </Card>
                    )
                }
            })}
        </Subscription>
    );
}