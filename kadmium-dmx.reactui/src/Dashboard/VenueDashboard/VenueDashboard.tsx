import { useMutation, useQuery, useSubscription } from '@apollo/react-hooks';
import { Alert, Button, Card, Col, Divider, Dropdown, Icon, Menu, message, Modal, Row, Spin, Statistic, Tabs } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import { StatusStatistic } from 'Dashboard/StatusStatistic/StatusStatistic';
import { AddUniverse, AddUniverseVariables } from 'generated/AddUniverse';
import { DeleteUniverse, DeleteUniverseVariables } from 'generated/DeleteUniverse';
import { GetVenues } from 'generated/GetVenues';
import { LoadVenue, LoadVenueVariables } from 'generated/LoadVenue';
import { SubscribeVenueStatus } from 'generated/SubscribeVenueStatus';
import gql from 'graphql-tag';
import React, { useState } from 'react';
import { MutationFn } from 'react-apollo';
import { Link } from 'react-navi';
import { AddUniversePopup } from './AddUniversePopup';

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

const addUniverseMutation = gql`
    mutation AddUniverse($name: String!, $universeId: Int!)
    {
        addUniverse(name: $name, universeId: $universeId)
        {
            name
        }
    }
`;

const deleteUniverseMutation = gql`
    mutation DeleteUniverse($universeId: Int!)
    {
        deleteUniverse(universeId: $universeId)
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
    const [universeActionsMenuVisible, setUniverseActionsVisible] = useState<boolean>(false);
    const [activeUniverseId, setActiveUniverseId] = useState<number | null>(null);
    const [addUniverseModalVisible, setAddUniverseModalVisible] = useState<boolean>(false);
    const [addUniverse] = useMutation<AddUniverse, AddUniverseVariables>(addUniverseMutation);
    const [deleteUniverse] = useMutation<DeleteUniverse, DeleteUniverseVariables>(deleteUniverseMutation);

    if (venueStatusError || getVenuesError)
    {
        return (<Alert message={venueStatusError ? venueStatusError.message : getVenuesError.message} />);
    }
    if (!venueStatusData || venueStatusLoading || !getVenuesData || getVenuesLoading)
    {
        return (<Spin />);
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

    if (!venueStatusData.venueStatus.activeVenue)
    {
        return (
            <>
                <Card
                    loading={venueStatusLoading}
                    title="Venue"
                    actions={getActions()}
                >
                    {venueStatusData.venueStatus.message}
                </Card>
            </>
        );
    }

    if (!activeUniverseId)
    {
        setActiveUniverseId(venueStatusData.venueStatus.activeVenue!.universes[0].universeID);
        return;
    }

    const getActiveUniverse = () =>
    {
        const activeUniverse = venueStatusData.venueStatus.activeVenue.universes.find(x => x.universeID === activeUniverseId);
        if (!activeUniverse)
        {
            return venueStatusData.venueStatus.activeVenue.universes[0];
        }
        else
        {
            return activeUniverse;
        }
    }

    const deleteActiveUniverse = async () =>
    {
        const result = await deleteUniverse({
            variables: {
                universeId: getActiveUniverse().universeID
            }
        });
        if (result.errors)
        {
            message.error(result.errors);
        }
        else
        {
            const newUniverse = venueStatusData.venueStatus.activeVenue.universes.find(x => x.universeID !== activeUniverseId);
            setActiveUniverseId(newUniverse.universeID);
            return;
        }
    }

    const deleteUniverseClick = () =>
    {
        setUniverseActionsVisible(false);
        Modal.confirm({
            title: `Are you sure you want to delete ${getActiveUniverse().name}?`,
            okType: "danger",
            onOk: () => deleteActiveUniverse()
        });
    };

    const getActionsMenu = () =>
    {
        return (
            <Menu>
                <Menu.ItemGroup title={getActiveUniverse().name}>
                    <Menu.Item><Icon type="edit" />Edit</Menu.Item>
                    <Menu.Item><Icon type="search" />Discover</Menu.Item>
                    {venueStatusData.venueStatus.activeVenue.universes.length > 1 && <Menu.Item onClick={() => deleteUniverseClick()}><Icon type="delete" />Delete</Menu.Item>}
                </Menu.ItemGroup>
            </Menu>
        );
    }

    const getExtraTabActions = () =>
    {
        return (
            <Dropdown
                overlay={getActionsMenu()}
                visible={universeActionsMenuVisible}
            >
                <Button shape="round" type="primary" onClick={() => setUniverseActionsVisible(!universeActionsMenuVisible)}>
                    <Icon type="ellipsis" /> <Icon type="down" />
                </Button>
            </Dropdown>);
    }

    const handleAddUniverse = async (name: string, universeId: number) =>
    {
        setAddUniverseModalVisible(false);
        const result = await addUniverse({
            variables: {
                name: name,
                universeId: universeId
            }
        });

        if (result.errors)
        {
            message.error(result.errors);
        }
        else
        {
            setActiveUniverseId(universeId);
        }
    }

    const universeIds = venueStatusData.venueStatus.activeVenue.universes
        .map(x => x.universeID);
    const maxUniverseId = Math.max(...universeIds);

    return (
        <>
            {addUniverseModalVisible && <AddUniversePopup
                onOkClick={handleAddUniverse}
                onCancelClick={() => setAddUniverseModalVisible(false)}
                defaultUniverseNumber={maxUniverseId + 1}
            />}

            <Card
                title="Venue"
                actions={getActions()}
            >
                <StatusStatistic message={venueStatusData.venueStatus.message} code={venueStatusData.venueStatus.statusCode} />
                <Divider />
                <Tabs
                    tabBarExtraContent={getExtraTabActions()}
                    activeKey={activeUniverseId.toString()}
                    onChange={(key) => setActiveUniverseId(Number(key))}
                >
                    {venueStatusData.venueStatus.activeVenue!.universes.map(universe =>
                    {
                        return (
                            <Tabs.TabPane tab={universe.name} key={universe.universeID.toString()}>
                                <Row>
                                    <Col xs={12} sm={8}>
                                        <Link href={`venue/${universe.universeID}/fixtures`}>
                                            <Statistic title="Fixtures" value={universe.fixtures ? universe.fixtures.length : "?"} prefix={<Icon type="bulb" />} />
                                        </Link>
                                    </Col>
                                    <Col xs={12} sm={8}>
                                        <Link href={`venue/${universe.universeID}/dmx`}>
                                            <Statistic title="DMX Channels" value={universe.dmxChannels ? universe.dmxChannels : "?"} prefix={<Icon type="table" />} />
                                        </Link>
                                    </Col>
                                </Row>
                            </Tabs.TabPane>
                        );
                    })}
                </Tabs>
                <Button onClick={() => setAddUniverseModalVisible(true)}><Icon type="plus-circle" />Add</Button>
            </Card>
        </>
    );
}