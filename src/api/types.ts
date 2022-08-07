export type Repository = {
    id: string;
    name: string;
    forkCount: number;
    stargazerCount: number;
    url: string;
}

type Search = {
    repositoryCount: number;
    nodes: Repository[];
    pageInfo: {
        endCursor: string;
        startCursor: string;
    }
}

export type RepositoryList = {
    search: Search;
}

export type QueryVariable = {
    before?: string;
    after?: string;
    last?: number;
};
