'use client';

import BlankCard from "@/components/blank-card";
import Breadcrumb from "@/components/bread-crumb";
import PageContainer from "@/components/page-container";
import { findAllCustomers } from "@/services/customers.service";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, CardContent, Grid, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Tooltip, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const headCells: any[] = [
    {
        id: 'idNumber',
        numeric: false,
        disablePadding: false,
        label: 'Identificación',
    },
    {
        id: 'customer',
        numeric: false,
        disablePadding: false,
        label: 'Cliente',
    },
    {
        id: 'phone',
        numeric: false,
        disablePadding: false,
        label: 'Teléfono',
    },
    {
        id: 'email',
        numeric: false,
        disablePadding: false,
        label: 'Email',
    },
    {
        id: 'address',
        numeric: false,
        disablePadding: false,
        label: 'Dirección',
    },
    {
        id: 'actions',
        numeric: false,
        disablePadding: false,
        label: 'Acciones',
    },
];

const BCrumb = [
    {
        to: '/wedding/dashboard',
        title: 'Inicio',
    },
    {
        title: 'Mis Clientes',
    },
];

export default function CustomersPage() {
    const [customers, setCustomers] = useState<any>([]);
    const [customersFilters, setCustomersFilters] = useState<any>([]);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);
    const theme = useTheme();
    const router = useRouter();

    useEffect(() => {
        findAllCustomers()
            .then(customers => {
                setCustomers(customers);
                setCustomersFilters(customers
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage));
            })
    }, []);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
        setCustomersFilters(customers
            .slice(newPage * rowsPerPage, newPage * rowsPerPage + rowsPerPage));
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
        setCustomersFilters(customers.slice(0, parseInt(event.target.value, 10)));
    };

    const createCustomer = () => {
        router.push('/wedding/customers/detail');
    }

    return (
        <PageContainer>
            <Breadcrumb title="Mis Clientes" items={BCrumb} />
            <Button variant="contained" color="primary" onClick={() => createCustomer()} style={{ float: 'right' }}>
                Crear Cliente
            </Button>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Box>
                        <BlankCard>
                            <CardContent>
                                <Typography color="red" mb={3} />
                                <Paper variant="outlined" sx={{ mx: 0, mt: 1, border: `1px solid ${theme.palette.divider}` }}>
                                    <TableContainer>
                                        <Table
                                            sx={{ minWidth: 750 }}
                                            aria-labelledby="tableTitle"
                                            size="medium"
                                        >
                                            <TableHead>
                                                <TableRow>
                                                    {headCells.map((headCell) => (
                                                        <TableCell
                                                            key={headCell.id}
                                                            align={headCell.numeric ? 'right' : 'left'}
                                                            padding={headCell.disablePadding ? 'none' : 'normal'}
                                                        >
                                                            <Typography variant="subtitle1" fontWeight={600}>
                                                                {headCell.label}
                                                            </Typography>
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {customersFilters
                                                    .map((row: any) => {
                                                        return (
                                                            <TableRow
                                                                hover
                                                                role="checkbox"
                                                                tabIndex={-1}
                                                                key={row.idNumber}
                                                            >
                                                                <TableCell>
                                                                    <Typography variant="subtitle1">
                                                                        {row.idNumber}
                                                                    </Typography>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <Typography>
                                                                        {row.fullName}
                                                                    </Typography>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <Typography>
                                                                        {row.phone}
                                                                    </Typography>
                                                                </TableCell>
                                                                <TableCell>
                                                                    {row.email}
                                                                </TableCell>
                                                                <TableCell>
                                                                    {row.address}
                                                                </TableCell>
                                                                <TableCell padding="checkbox" align="center">
                                                                    <Stack direction="row" gap={1} justifyContent={'center'}>
                                                                        <Tooltip title="Eitar">
                                                                            <IconButton
                                                                                color="primary"
                                                                                aria-label="primary-bell"
                                                                                onClick={() => router.push(`/wedding/customers/detail?id=${row.id}`)}
                                                                            >
                                                                                <FontAwesomeIcon icon={faPencil} fontSize="1rem" />
                                                                            </IconButton>
                                                                        </Tooltip>
                                                                    </Stack>
                                                                </TableCell>
                                                            </TableRow>
                                                        );
                                                    })
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25]}
                                        component="div"
                                        count={customers.length}
                                        rowsPerPage={rowsPerPage}
                                        labelRowsPerPage={'Registros por página'}
                                        page={page}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    />
                                </Paper>
                            </CardContent>
                        </BlankCard>
                    </Box>
                </Grid>
            </Grid>
        </PageContainer>
    );
}