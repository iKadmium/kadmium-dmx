import { Breadcrumb, PageHeader } from 'antd';
import React from 'react';
import { Link, useCurrentRoute } from 'react-navi';
import './BreadcrumbTrail.css';

export interface BreadcrumbTrailItem
{
    address: string;
    name: string;
}

export const BreadcrumbTrail: React.FunctionComponent<{}> = () =>
{
    const route = useCurrentRoute();

    const trail: BreadcrumbTrailItem[] = route.data.trail || [];

    console.log(route);

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
