import { Layout } from 'antd';
import React from 'react';
import { Router, View } from 'react-navi';
import { Navbar } from './Navbar/Navbar';
import { Routing } from './Routing/Routing';
import './SiderLayout.css';
import { Page } from 'Page/Page';

const { Sider, Footer } = Layout;

const routes = Routing.getMatchers();

const SiderLayout: React.FunctionComponent<{}> = () =>
{
	return (
		<Router routes={routes}>
			<Layout>
				<Sider
					style={{ minHeight: '100vh' }}
					breakpoint="lg"
					collapsedWidth="0"
				>
					<div className="logo">
						kadmium-dmx
					</div>
					<Navbar />
				</Sider>
				<Layout>
					<Page>
						<View />
					</Page>
					<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
				</Layout>
			</Layout>
		</Router>
	);

}

export default SiderLayout;