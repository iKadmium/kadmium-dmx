import { Button, Card, Col, Divider, Dropdown, Icon, Menu, message, Row, Statistic, Tabs } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import { GetVenues, GetVenues_venues } from 'generated/GetVenues';
import { LoadVenue, LoadVenueVariables } from 'generated/LoadVenue';
import { SubscribeVenueStatus } from 'generated/SubscribeVenueStatus';
import gql from 'graphql-tag';
import React, { useState } from 'react';
import { useMutation, useQuery, useSubscription } from 'react-apollo-hooks';
import { Link } from 'react-navi';
import "./VenueDashboard.css";

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
    const { data: getVenuesData, loading: getVenuesLoading } = useQuery<GetVenues>(getVenuesQuery);
    const { data: venueStatusData, loading: venueStatusLoading, error: venueStatusError } = useSubscription<SubscribeVenueStatus>(venueSubscription);
    const loadVenue = useMutation<LoadVenue, LoadVenueVariables>(loadVenueMutation);

    const getVenueMenu = (venues: GetVenues_venues[]) => 
    {
        const menuItems: JSX.Element[] = [];
        for (let venue of venues)
        {
            if (venue)
            {
                menuItems.push(<Menu.Item key={venue.name}>{venue.name}</Menu.Item>);
            }
        }

        const handleMenuClick = (item: ClickParam) =>
        {
            loadVenue({ variables: { name: item.key } })
            setVenuesMenuVisible(false);
        }
        return (
            <Menu onClick={handleMenuClick}>
                {menuItems}
            </Menu>
        );
    };

    const getActions = (venues: any[]) =>
    {
        const actions: React.ReactNode[] = [
            <Dropdown
                overlay={getVenueMenu(venues)}
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

    if (venueStatusError)
    {
        message.error(venueStatusError);
    }
    else if (!venueStatusData || venueStatusLoading || !getVenuesData || getVenuesLoading)
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
        return (
            <Card
                loading={venueStatusLoading}
                title="Venue"
                actions={getActions(getVenuesData.venues)}

            >
                <Statistic title="Status" value={venueStatusData.venueStatus.message} prefix={<Icon type="check-circle" />} />
                <Divider />
                <Tabs defaultActiveKey={venueStatusData.venueStatus.activeVenue.universes[0].universeID.toString()}>
                    {venueStatusData.venueStatus.activeVenue.universes.map(universe =>
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
    else
    {
        return (
            <Card
                loading={venueStatusLoading}
                title="Venue"
                actions={getActions(getVenuesData.venues)}
            >
                {venueStatusData.venueStatus.message}
            </Card>
        )
    }

}