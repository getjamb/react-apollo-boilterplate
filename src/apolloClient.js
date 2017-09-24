import ApolloClient, {
  createNetworkInterface,
} from 'apollo-client';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost/graphql', batchInterval: 10}),
});

export default client;
