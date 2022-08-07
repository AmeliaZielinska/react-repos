import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Repositories } from 'components';
import { GET_REPOS } from 'api';

const mockResponse = [
    {
        request: {
            query: GET_REPOS,
            variables: { last: 10 }
        },
        result: {
            data: {
                search: {
                    repositoryCount: 0,
                    nodes: [],
                    pageInfo: {
                        endCursor: null,
                        startCursor: null
                    }
                }
            }
        }
    }
];


describe('Repositories view', () => {
    it('returns proper information when no records for query were found', async () => {
        render(
            <MockedProvider mocks={mockResponse}>
                <Repositories />
            </MockedProvider>
        );

        const noRecords = await screen.findByText(/No records/i);
        expect(noRecords).toBeInTheDocument();
    });
});