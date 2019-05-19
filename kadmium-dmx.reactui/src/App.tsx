import ApolloClient from 'apollo-boost';
import { Environment, EnvironmentProvider } from 'Environment/Environment';
import { ApolloProvider } from "react-apollo";
import React from 'react';
import './App.css';
import SiderLayout from './SiderLayout';

const App: React.FC = () =>
{
	const environment = Environment.getEnvironment();
	const apolloClient = new ApolloClient({
		uri: environment.graphQLEndpoint.href
	});

	return (
		<div className="App">
			<EnvironmentProvider value={environment}>
				<ApolloProvider client={apolloClient}>
					<SiderLayout />
				</ApolloProvider>
			</EnvironmentProvider>
		</div>
	);
}

export default App;
