import { Matcher, route, mount } from 'navi';
import { Dashboard } from 'Dashboard/Dashboard';
import React from 'react';
import { Venues } from 'Venues/Venues';
import { Settings } from 'Settings/Settings';
import { Groups } from 'Groups/Groups';
import { DmxViewer } from 'Dashboard/VenueDashboard/DmxViewer/DmxViewer';
import { FixtureViewer } from 'Dashboard/VenueDashboard/FixtureViewer/FixtureViewer';
import { BreadcrumbTrailItem } from 'BreadcrumbTrail/BreadcrumbTrail';
import { ListenerMessages } from 'Dashboard/ListenerDashboard/ListenerMessages/ListenerMessages';
import { FixtureController } from 'Dashboard/VenueDashboard/FixtureViewer/FixtureController/FixtureController';

interface Trail
{
    trail: BreadcrumbTrailItem[];
}

export class Routing
{
    public static getMatchers(): Matcher<{}, {}>
    {
        return mount({
            '/': route({
                title: 'Dashboard',
                view: <Dashboard />,
                data: {
                    trail: [
                        { address: '/', name: 'Dashboard' }
                    ]
                } as Trail
            }),
            '/listener': route({
                title: 'OSC Listener Messages',
                view: <ListenerMessages />,
                data: {
                    trail: [
                        { address: '/', name: 'Dashboard' },
                        { address: '/listener', name: 'Listener Messages' }
                    ]
                } as Trail
            }),
            '/venue/:universeId/dmx': route(req =>
            {
                let universeId = req.params.universeId;
                return {
                    title: 'DMX Viewer',
                    view: <DmxViewer universeId={parseInt(universeId)} />,
                    data: {
                        trail: [
                            { address: '/', name: 'Dashboard' },
                            { address: `/venue/${universeId}/dmx`, name: `Universe ${universeId} DMX` }
                        ]
                    } as Trail
                }
            }),
            '/venue/:universeId/fixtures': route(req =>
            {
                let universeId = req.params.universeId;
                return {
                    title: 'Fixture Viewer',
                    view: <FixtureViewer universeId={parseInt(universeId)} />,
                    data: {
                        trail: [
                            { address: '/', name: 'Dashboard' },
                            { address: `/venue/${universeId}/fixtures`, name: `Universe ${universeId} Fixtures` }
                        ]
                    } as Trail
                }
            }),
            '/venue/:universeId/fixtures/:address': route(req =>
            {
                let universeId = req.params.universeId;
                let fixtureAddress = req.params.address;
                return {
                    title: 'Fixture Viewer',
                    view: <FixtureController universeId={parseInt(universeId)} address={parseInt(fixtureAddress)} />,
                    data: {
                        trail: [
                            { address: '/', name: 'Dashboard' },
                            { address: `/venue/${universeId}/fixtures`, name: `Universe ${universeId} Fixtures` },
                            { address: `/venue/${universeId}/fixtures/${fixtureAddress}`, name: `Fixture ${fixtureAddress}` }
                        ]
                    } as Trail
                }
            }),
            '/venues': route({
                title: 'Venues', view: <Venues />
            }),
            '/settings': route({
                title: 'Settings', view: <Settings />
            }),
            '/groups': route({
                title: 'Groups', view: <Groups />
            })
        });

    }
}