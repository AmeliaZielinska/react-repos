import { FC, useState } from 'react';
import { useQuery } from '@apollo/client';
import { RepositoryTable } from 'components';
import { RepositoryList, QueryVariable, GET_REPOS } from 'api';
import { repositoryColumns } from './tableConfig';
import { RepositoryView } from './styles';

const pageSize = 10;

export const Repositories: FC = () => {
    const [page, setPage] = useState(0);
    const { loading, error, data, fetchMore } = useQuery<RepositoryList, QueryVariable>(GET_REPOS, {
        variables: { last: pageSize }
    });

    const fetchRepositories = (variables: QueryVariable) => {
        fetchMore({
            variables,
            updateQuery: (_, { fetchMoreResult }) => (
                fetchMoreResult
            )
        });
    }

    const onPageChange = (pageNum: number) => {
        const variables: QueryVariable = (pageNum > page
                ? { after: data?.search.pageInfo.endCursor }
                : { before: data?.search.pageInfo.startCursor }
        );
        fetchRepositories(variables);
        setPage(pageNum);
    }

    if (loading) return <>Loading...</>;
    if (error) return <>Error: {error.message}</>;

    const repoList = data?.search.nodes ?? [];
    const rowCount = data?.search.repositoryCount || 0;

    if (rowCount < 1) return <div data-testid="noRecords">No records for this query</div>;

    return (
        <RepositoryView>
            <RepositoryTable
                rows={repoList}
                columns={repositoryColumns}
                rowCount={rowCount}
                setPage={onPageChange}
                pageSize={pageSize}
            />
        </RepositoryView>
    );
}