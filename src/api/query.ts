import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const token = `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`;

export const apolloClient = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        authorization: token
    }
});

export const GET_REPOS = gql`
    query GetRepos($after: String, $before: String, $last: Int) {
        search(
            query: "is:public react", 
            type: REPOSITORY,
            last: $last, 
            before: $before, 
            after: $after
        ) {
            repositoryCount
            nodes {
                ... on Repository {
                    id
                    name
                    forkCount
                    stargazerCount
                    url
                }
            }
            pageInfo {
                endCursor
                startCursor
            }
        }
    }
`;
