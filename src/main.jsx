import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthProvider } from './context/authContext';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  split,
} from '@apollo/client';
// import { WebSocketLink } from 'graphql-ws';
import { HttpLink } from '@apollo/client/link/http';
// import { getMainDefinition } from '@apollo/client/utilities';

// import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
  uri: `${import.meta.env.VITE_API_URL}/graphql`,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://localhost:4000/graphql',
  })
);

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

// // Create a WebSocket link for subscriptions
// const wsLink = new WebSocketLink({
//   uri: `ws://${window.location.host}/graphql`, // Replace with your GraphQL WebSocket endpoint
//   options: {
//     reconnect: true, // Enable automatic reconnection
//   },
// });

// // Split links based on the operation type
// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink
// );

// Create the Apollo Client instance
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

// const client = new ApolloClient({
//   uri: `${import.meta.env.VITE_API_URL}/graphql`,
//   cache: new InMemoryCache(),
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
