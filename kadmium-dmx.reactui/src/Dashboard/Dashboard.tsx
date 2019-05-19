import { Button, Card, Col, Divider, Dropdown, Icon, Menu, Row, Statistic } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import { KadmiumDmxQuery, Maybe, Universe, Venue, KadmiumDmxMutation, KadmiumDmxMutationLoadVenueArgs } from 'generated/graphql-types';
import gql from 'graphql-tag';
import React, { useState } from 'react';
import { Query, Mutation } from 'react-apollo';
import "./Dashboard.css";

const getVenuesQuery = gql`
    {
        venues
        {
            name
        }

        activeVenue
        {
            name
            universes
            {
                universeID
                name
                fixtures
                {
                    address
                }
            }
        }
    }
`;

const loadVenueMutation = gql`
    mutation LoadVenue($name: String)
    {
        loadVenue(name: $name)
        {
            name
        }
    }
`;

interface ContentMap
{
    [key: string]: JSX.Element;
}

interface TabDefinition
{
    key: string;
    tab: string;
}

export const Dashboard: React.FunctionComponent<{}> = () =>
{
    const [selectedUniverse, selectUniverse] = useState(0);



    const getVenueMenu = (venues: Maybe<Venue>[]) => 
    {
        const menuItems: JSX.Element[] = [];
        for (let venue of venues)
        {
            if (venue)
            {
                menuItems.push(<Menu.Item key={venue.name}>{venue.name}</Menu.Item>);
            }
        }
        return (
            <Mutation<KadmiumDmxMutation, KadmiumDmxMutationLoadVenueArgs> mutation={loadVenueMutation}>
                {(loadVenue) =>
                {
                    const handleMenuClick = (item: ClickParam) =>
                    {
                        loadVenue({ variables: { name: item.key } })
                    }
                    return (
                        <Menu onClick={handleMenuClick}>
                            {menuItems}
                        </Menu>
                    );
                }}
            </Mutation>
        );
    };

    const getTabList = (universes: Array<Maybe<Universe>>) => 
    {
        const tabs: TabDefinition[] = [];
        for (let universe of universes)
        {
            if (universe)
            {
                const tab = {
                    key: universe.universeID.toString(),
                    tab: universe.name
                };
                tabs.push(tab);
            }
        }
        return tabs;
    };

    const getContentMap = (universes: Array<Maybe<Universe>>) =>
    {
        const contentMap: ContentMap = {};
        for (let universe of universes)
        {
            if (universe)
            {
                contentMap[universe.name] = <>
                    <Statistic title="Status" value="Running" prefix={<Icon type="check-circle" />} />
                    <Statistic title="Fixtures" value={universe.fixtures ? universe.fixtures.length : "?"} prefix={<Icon type="bulb" />} />
                    <Statistic title="DMX Channels" value={universe.dmxChannels ? universe.dmxChannels : "?"} prefix={<Icon type="table" />} />
                </>
            }
        }
        return contentMap;
    };

    const getActions = (venues: Maybe<Venue>[]) =>
    {
        const actions: React.ReactNode[] = [
            <Dropdown
                overlay={getVenueMenu(venues)}
                trigger={['click']}
            >
                <Button type="primary"><Icon type="folder-open" />Load<Icon type="down" /></Button>
            </Dropdown>,
            <Button><Icon type="plus-circle" />Create</Button>
        ];
        return actions;
    };

    return (
        <Row>
            <Col lg={12} xs={24} >
                <Query<KadmiumDmxQuery, {}>
                    query={getVenuesQuery}
                >
                    {({ loading, error, data }) =>
                    {
                        if (!data || loading || !data.venues)
                        {
                            return (
                                <Card
                                    loading={loading}
                                    title="Venue"
                                />
                            );
                        }
                        if (data.activeVenue && data.activeVenue)
                        {
                            console.log(data.activeVenue);
                            const contentList = getContentMap(data.activeVenue.universes);
                            return (
                                <Card
                                    loading={loading}
                                    title="Venue"
                                    actions={getActions(data.venues)}
                                    tabList={getTabList(data.activeVenue.universes)}
                                    activeTabKey={selectedUniverse.toString()}
                                    onTabChange={key => selectUniverse(parseInt(key))}
                                >
                                    {contentList[selectedUniverse]}
                                    <Divider />
                                    <Button><Icon type="search" />Discover</Button>
                                </Card>
                            );
                        }
                        else
                        {
                            return (
                                <Card
                                    loading={loading}
                                    title="Venue"
                                    actions={getActions(data.venues)}
                                >
                                    No venue has been loaded
                                </Card>
                            )
                        }

                    }}
                </Query>
            </Col>
        </Row>
    );
}