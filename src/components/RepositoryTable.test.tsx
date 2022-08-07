import { render, screen } from '@testing-library/react';
import { RepositoryTable } from 'components';
import { repositoryColumns } from './tableConfig';

const mockData = {
    data: {
        search: {
            nodes: [
                {
                    id: 'id1',
                    name: 'test name 1',
                    forkCount: 1,
                    stargazerCount: 10,
                    url: 'http://test1.com'
                },
                {
                    id: 'id2',
                    name: 'test name 2',
                    forkCount: 2,
                    stargazerCount: 20,
                    url: 'http://test2.com'
                },
                {
                    id: 'id3',
                    name: 'test name 3',
                    forkCount: 3,
                    stargazerCount: 30,
                    url: 'http://test3.com'
                }
            ],
            repositoryCount: 3
        }
    }
}

const rowCount = mockData.data.search.repositoryCount;
const rows = mockData.data.search.nodes;
const mockedSetPageFn = jest.fn();

describe('Repository Table', () => {
    it('renders headers as expected', () => {
        render(<RepositoryTable
            columns={repositoryColumns}
            rows={rows}
            rowCount={rowCount}
            setPage={mockedSetPageFn}
            pageSize={10}
        />);
        const expectedHeaders = ['Name', '🍴 Forks', '🌟 Stars'];
        const headers = screen.getAllByRole('columnheader');

        expect(headers).toHaveLength(3);
        headers.map((header, i) =>
            expect(header).toHaveTextContent(expectedHeaders[i])
        );
    });

    it('renders proper number of rows', () => {
        render(<RepositoryTable
            columns={repositoryColumns}
            rows={rows}
            rowCount={rowCount}
            setPage={mockedSetPageFn}
            pageSize={10}
        />);

        const renderedRows = screen.getAllByRole('row');
        const expectedCount = rowCount + 1; //  because header also has role="row"
        expect(renderedRows).toHaveLength(expectedCount);
    });

    it('renders proper numbers of cells', () => {
        render(<RepositoryTable
            columns={repositoryColumns}
            rows={rows}
            rowCount={rowCount}
            setPage={mockedSetPageFn}
            pageSize={10}
        />);

        const renderedCells = screen.getAllByRole('cell');
        expect(renderedCells).toHaveLength(9);
    });

    it('renders proper numbers in pagination', () => {
        render(<RepositoryTable
            columns={repositoryColumns}
            rows={rows}
            rowCount={rowCount}
            setPage={mockedSetPageFn}
            pageSize={10}
        />);

        const pagination = screen.getByText('1–3 of 3');
        expect(pagination).toBeInTheDocument();
    });
});
