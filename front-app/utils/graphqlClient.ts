import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('http://localhost:8000/graphql', {
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchGraphQL = async (query: string, variables = {}) => {
    return client.request(query, variables);
};
