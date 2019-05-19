import { Matcher, route, mount } from 'navi';
import { Dashboard } from 'Dashboard/Dashboard';
import React from 'react';
import { Venues } from 'Venues/Venues';
import { Settings } from 'Settings/Settings';
import { Groups } from 'Groups/Groups';

interface KeyValue
{
    [key: string]: string
}

export class Routing
{
    public static getRoutes(): KeyValue
    {
        return {
            '/': 'Dashboard',
            '/venues': 'Venues',
            '/settings': 'Settings',
            '/groups': 'Groups'
        };
    }

    public static getMatchers(): Matcher<{}, {}>
    {
        return mount({
            '/': route({
                title: 'Dashboard', view: <Dashboard />
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