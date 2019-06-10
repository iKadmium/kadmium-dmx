import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink, split } from 'apollo-link';
import { Environment, EnvironmentProvider } from 'Environment/Environment';
import React from 'react';
import './App.css';
import SiderLayout from './SiderLayout';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { ApolloProvider } from 'react-apollo';

const App: React.FC = () =>
{
	const environment = Environment.getEnvironment();

	const wsLink = new WebSocketLink({
		uri: environment.graphQLWebSocketsEndpoint.href,
		options: {
			reconnect: true
		}
	});

	const httpLink = new HttpLink({
		uri: environment.graphQLEndpoint.href
	});

	const link = split(
		({ query }) =>
		{
			const definition = getMainDefinition(query);
			return (
				definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
			);
		},
		wsLink,
		httpLink
	);

	const client = new ApolloClient({
		link: ApolloLink.from([
			onError(({ graphQLErrors, networkError }) =>
			{
				if (graphQLErrors)
					graphQLErrors.map(({ message, locations, path }) =>
						console.log(
							`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
						),
					);
				if (networkError) console.log(`[Network error]: ${networkError}`);
			}),
			link
		]),
		cache: new InMemoryCache()
	});

	return (
		<div className="App">
			<EnvironmentProvider value={environment}>
				<ApolloHooksProvider client={client}>
					<ApolloProvider client={client}>
						<SiderLayout />
					</ApolloProvider>
				</ApolloHooksProvider>
			</EnvironmentProvider>
		</div>
	);
}

export default App;
