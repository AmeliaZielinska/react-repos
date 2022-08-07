import { GridColDef } from '@mui/x-data-grid';
import { LinkCell } from 'components';

export const repositoryColumns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
        width: 300,
        renderCell: ({ row: { name, url} }) => (
            <LinkCell href={url}>{name}</LinkCell>
        )
    },
    {
        field: 'forkCount',
        headerName: '🍴 Forks 🍴',
        width: 150,
        headerAlign: 'center',
        align: 'center'
    },
    {
        field: 'stargazerCount',
        headerName: '🌟 Stars 🌟',
        width: 150,
        headerAlign: 'center',
        align: 'center'
    }
];