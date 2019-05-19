import { Breadcrumb, PageHeader } from 'antd';
import React from 'react';
import { Link, useCurrentRoute } from 'react-navi';
import { Routing } from '../Routing/Routing';
import './BreadcrumbTrail.css';

interface RouteItem
{
    address: string;
    name: string;
}

export const BreadcrumbTrail: React.FunctionComponent<{}> = () =>
{
    const route = useCurrentRoute();
    const breadcrumbNameMap = Routing.getRoutes();

    const trail: RouteItem[] = [
        { address: '/', name: breadcrumbNameMap['/'] }
    ];

    const pathSnippets = route.url.pathname.split('/').filter(i => i);
    for (let i = 0; i < pathSnippets.length; i++)
    {
        const url = `/${pathSnippets.slice(0, i + 1).join('/')}`;
        const name = breadcrumbNameMap[url];
        trail.push({ address: url, name: name });
    }

    return (
        <PageHeader title={route.title} className="header">
            <Breadcrumb>
                {trail.map(item =>
                {
                    return (<Breadcrumb.Item key={item.address}>
                        <Link href={item.address}>{item.name}</Link>
                    </Breadcrumb.Item>)
                })}
            </Breadcrumb>
        </PageHeader>
    );
}
