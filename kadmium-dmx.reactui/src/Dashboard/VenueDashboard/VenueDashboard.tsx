import { useMutation, useQuery, useSubscription } from '@apollo/react-hooks';
import { Alert, Button, Card, Col, Divider, Dropdown, Icon, Menu, Row, Spin, Statistic, Tabs } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import { StatusStatistic } from 'Dashboard/StatusStatistic/StatusStatistic';
import { GetVenues } from 'generated/GetVenues';
import { LoadVenue, LoadVenueVariables } from 'generated/LoadVenue';
import { SubscribeVenueStatus, SubscribeVenueStatus_venueStatus } from 'generated/SubscribeVenueStatus';
import gql from 'graphql-tag';
import React, { useState } from 'react';
import { MutationFn } from 'react-apollo';
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
    const { data: venueStatusData, loading: venueStatusLoading, error: venueStatusError } = useSubscription<SubscribeVenueStatus>(venueSubscription);
    const [loadVenue] = useMutation<LoadVenue, LoadVenueVariables>(loadVenueMutation);
    const { loading: getVenuesLoading, error: getVenuesError, data: getVenuesData } = useQuery<GetVenues>(getVenuesQuery);

    if (!venueStatusData || venueStatusLoading || !getVenuesData || getVenuesLoading)
    {
        return (<Spin />);
    }
    if (venueStatusError)
    {
        return (<Alert message={venueStatusError} />);
    }
    if (getVenuesError)
    {
        return (<Alert message={venueStatusError} />);
    }

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

    const getLoadedCard: (venueStatus: SubscribeVenueStatus_venueStatus) => JSX.Element = (venueStatus: SubscribeVenueStatus_venueStatus) =>
    {
        return (
            <Card
                title="Venue"
                actions={getActions()}
            >
                <StatusStatistic message={venueStatus.message} code={venueStatus.statusCode} />
                <Divider />
                <Tabs defaultActiveKey={venueStatus.activeVenue!.universes[0].universeID.toString()}>
                    {venueStatus.activeVenue!.universes.map(universe =>
                    {
                        return (
                            <Tabs.TabPane tab={universe.name} key={universe.universeID.toString()}>
                                <Row>
                                    <Col xs={12}>
                                        <Link href={`venue/${universe.universeID}/fixtures`}>
                                            <Statistic title="Fixtures" value={universe.fixtures ? universe.fixtures.length : "?"} prefix={<Icon type="bulb" />} />
                                        </Link>
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
        const handleMenuClick = (item: ClickParam, loadVenue: MutationFn<LoadVenue, LoadVenueVariables>) =>
        {
            loadVenue({ variables: { name: item.key } })
            setVenuesMenuVisible(false);
        }

        return (
            <Menu onClick={item => handleMenuClick(item, loadVenue)}>
                {getVenuesData.venues.map(venue => (<Menu.Item key={venue.name}>{venue.name}</Menu.Item>))}
            </Menu>
        );
    }


    if (venueStatusData.venueStatus.activeVenue)
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
}