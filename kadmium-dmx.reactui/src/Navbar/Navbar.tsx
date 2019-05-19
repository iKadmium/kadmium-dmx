import React from 'react'
import { useCurrentRoute, NavLink } from 'react-navi';
import { Menu, Icon } from 'antd';

export const Navbar: React.FunctionComponent = () =>
{
    const route = useCurrentRoute();
    return (
        <Menu theme="dark" mode="inline" selectedKeys={[route.url.pathname]}>
            <Menu.Item key="/">
                <NavLink href="/">
                    <Icon type="home" />
                    <span className="nav-text">Home</span>
                </NavLink>
            </Menu.Item>
            <Menu.Item key="/groups">
                <NavLink href="/groups">
                    <Icon type="unordered-list" />
                    <span className="nav-text">Groups</span>
                </NavLink>
            </Menu.Item>
            <Menu.Item key="/fixtures">
                <NavLink href="/fixtures">
                    <Icon type="bulb" />
                    <span className="nav-text">Fixture Definitions</span>
                </NavLink>
            </Menu.Item>
            <Menu.Item key="/venues">
                <NavLink href="/venues">
                    <Icon type="shop" />
                    <span className="nav-text">Venues</span>
                </NavLink>
            </Menu.Item>
            <Menu.Item key="/settings">
                <NavLink href="/settings">
                    <Icon type="setting" />
                    <span className="nav-text">Settings</span>
                </NavLink>
            </Menu.Item>
        </Menu>
    )
}
