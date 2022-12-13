import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './table.scss';
import { useDispatch } from 'react-redux'
import { open } from '../../features/popup/OpenSlice';
const columns = [
    { id: 'name', label: 'Name', minWidth: 170, bold: 600, },
    { id: 'batch', label: 'Batch No', minWidth: 170, bold: 600, color: '#02a550' },
    {
        id: 'location',
        label: 'Location',
        minWidth: 170,
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'experience',
        label: 'Experience',
        minWidth: 170,
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'contact',
        label: 'Contact No.',
        color: "#02a550",
        minWidth: 170,
        bold: 600
    },
];

function createData(name, batch, location, experience, contact) {
    return { name, batch, location, experience, contact };
}

const rows = [
    createData('Ashish kumar', 123456789, 'Hyderabad', '2 yrs', 1234567890),
    createData('Mohit Pathak', 123456789, 'Sonebhadra', '3 yrs', 1234567890),
    createData('Abhishek Shukla', 123456789, 'Varanasi', '4 yrs', 1234567890),
    createData('Anmol Dubey', 123456789, 'Hyderabad', '5 yrs', 1234567890),
    createData('Sonakshi Chauhan', 123456789, 'Sonebhadra', '6 yrs', 1234567890),
    createData('Ashish kumar', 123456789, 'Hyderabad', '7 yrs', 1234567890),
    createData('Mohit Pathak', 123456789, 'Sonebhadra', '8 yrs', 1234567890),
    createData('Abhishek Shukla', 123456789, 'Varanasi', '9 yrs', 1234567890),
    createData('Anmol Dubey', 123456789, 'Hyderabad', '10 yrs', 1234567890),
    createData('Sonakshi Chauhan', 123456789, 'Sonebhadra', '11 yrs', 1234567890),
];

export default function Tables() {
    const dispatch = useDispatch()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <>
            <div className="table-container d-flex justify-content-between mb-4 mt-4">
                <div className="top-left d-flex align-items-center justify-content-start">
                    <span className='me-3'>Show</span>
                    <input type="number" value={rowsPerPage} onChange={handleChangeRowsPerPage} min={1} />
                    <span className='ms-3'>entries</span>
                </div>
                <div className="top-right d-flex justify-content-between">
                    <div className="search-container d-flex justify-content-between align-items-center">
                        <input type="text" />
                        <i className="bi bi-search"></i>
                    </div>
                    <button className="add-new">
                        +Add new
                    </button>
                </div>
            </div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 'min-content' }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth,
                                        fontWeight: '600' }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.experience} style={{
                                            fontWeight: '600',
                                        }} onClick={() => dispatch(open({
                                            open: true,
                                            data: row
                                        }))}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} style={{
                                                        color: `${column.color}`,
                                                        fontWeight: `${column.bold}`,
                                                        cursor: 'pointer'
                                                    }}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            /> */}
            </Paper>
        </>
    );
}