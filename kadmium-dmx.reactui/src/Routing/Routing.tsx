import { Matcher, route, mount } from 'navi';
import { Dashboard } from 'Dashboard/Dashboard';
import React from 'react';
import { Venues } from 'Venues/Venues';
import { Settings } from 'Settings/Settings';
import { Groups } from 'Groups/Groups';
import { DmxViewer } from 'Dashboard/VenueDashboard/DmxViewer/DmxViewer';
import { BreadcrumbTrailItem } from 'BreadcrumbTrail/BreadcrumbTrail';
import { ListenerMessages } from 'Dashboard/ListenerDashboard/ListenerMessages/ListenerMessages';

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
                    title: 'DMX',
                    view: <DmxViewer />,
                    data: {
                        trail: [
                            { address: '/', name: 'Dashboard' },
                            { address: `/venue/${universeId}/dmx`, name: `Universe ${universeId} DMX` }
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