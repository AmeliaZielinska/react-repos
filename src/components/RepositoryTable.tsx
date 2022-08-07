import { useState, useEffect, FC } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Repository } from 'api';
import { DataGridWrapper } from './styles';

type Props = {
    columns:  GridColDef[];
    rows: Repository[];
    rowCount: number;
    setPage: (page: number) => void;
    pageSize: number;
};

export const RepositoryTable: FC<Props> = ({ columns, rows, rowCount, setPage, pageSize }) => {
    const [rowCountState, setRowCountState] = useState(rowCount);

    //  As per MUI docs: https://mui.com/x/react-data-grid/pagination/#basic-implementation
    //  Since rowCount prop is used to compute the number of available pages, switching it to undefined during loading reset page to zero.
    //  To avoid this problem, we recommend to keep the previous value of rowCount while loading as follow:
    useEffect(() => {
        setRowCountState((prevRowCountState) =>
            rowCount !== undefined ? rowCount : prevRowCountState,
        );
    }, [rowCount, setRowCountState]);

    return (
        <DataGridWrapper>
            <DataGrid
                columns={columns}
                rows={rows}
                paginationMode='server'
                rowCount={rowCountState}
                onPageChange={setPage}
                pageSize={pageSize}
                rowsPerPageOptions={[10]}
            />
        </DataGridWrapper>
    );
}
