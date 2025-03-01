'use client';

import BlankCard from "@/components/blank-card";
import Breadcrumb from "@/components/bread-crumb";
import PageContainer from "@/components/page-container";
import { findAllReceptions } from "@/services/receptions.service";
import { Box, Button, CardContent, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography, useTheme } from "@mui/material";
import { uniqueId } from "lodash";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const headCells: any[] = [
    {
        id: uniqueId(),
        numeric: false,
        disablePadding: false,
        label: 'Recepción',
    },
    {
        id: uniqueId(),
        numeric: false,
        disablePadding: false,
        label: 'Teléfono',
    },
    {
        id: uniqueId(),
        numeric: false,
        disablePadding: false,
        label: 'Email',
    },
    {
        id: uniqueId(),
        numeric: false,
        disablePadding: false,
        label: 'Dirección',
    },
    {
        id: uniqueId(),
        numeric: false,
        disablePadding: false,
        label: 'Precio por hora',
    },
];

const BCrumb = [
    {
        to: '/wedding/dashboard',
        title: 'Inicio',
    },
    {
        title: 'Recepciones',
    },
];

export default function CustomersPage() {
    const router = useRouter();
    const [receptions, setReceptions] = useState<any>([]);
    const [receptionsFilters, setReceptionsFilters] = useState<any>([]);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);
    const theme = useTheme();

    useEffect(() => {
        findAllReceptions()
            .then(receptions => {
                setReceptions(receptions);
                setReceptionsFilters(receptions
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage));
            })
    }, []);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
        setReceptionsFilters(receptions
            .slice(newPage * rowsPerPage, newPage * rowsPerPage + rowsPerPage));
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
        setReceptionsFilters(receptions.slice(0, parseInt(event.target.value, 10)));
    };

    const createReception = () => {
        router.push('/wedding/receptions/detail');
    }

    return (
        <PageContainer>
            <Breadcrumb title="Recepciones" items={BCrumb} />
            <Button variant="contained" color="primary" onClick={() => createReception()} style={{ float: 'right' }}>
                Crear Recepción
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
                                                {receptionsFilters
                                                    .map((row: any) => {
                                                        return (
                                                            <TableRow
                                                                hover
                                                                role="checkbox"
                                                                tabIndex={-1}
                                                                key={row.phone}
                                                            >
                                                                <TableCell>
                                                                    <Typography variant="subtitle1">
                                                                        {row.title}
                                                                    </Typography>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <Typography>
                                                                        {row.phone}
                                                                    </Typography>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <Typography>
                                                                        {row.emial}
                                                                    </Typography>
                                                                </TableCell>
                                                                <TableCell>
                                                                    {row.address}
                                                                </TableCell>
                                                                <TableCell>
                                                                    {`$ ${row.price}`}
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
                                        count={receptions.length}
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