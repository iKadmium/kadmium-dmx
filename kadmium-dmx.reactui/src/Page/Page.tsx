import { Layout } from 'antd';
import React, { Component } from 'react';
import { BreadcrumbTrail } from '../BreadcrumbTrail/BreadcrumbTrail';

export class Page extends Component<{}>
{
    public render()
    {
        return (
            <>
                <BreadcrumbTrail />
                <Layout.Content style={{ margin: '24px 16px 0' }}>

                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        {this.props.children}
                    </div>

                </Layout.Content>
            </>
        );
    }
}