'use client';

import BlankCard from "@/components/blank-card";
import Breadcrumb from "@/components/bread-crumb";
import PageContainer from "@/components/page-container";
import { Box, CardContent, Grid, Typography } from "@mui/material";
import CustomerForm from "./form";

const BCrumb = [
    {
        to: '/wedding/dashboard',
        title: 'Inicio',
    },
    {
        to: '/wedding/customers',
        title: 'Mis clientes',
    },
    {
        to: '/wedding/customers/detail',
        title: 'Cliente',
    },
];

export default function CustomerDetailPage() {
    return (
        <PageContainer>
            <Breadcrumb title="Cliente" items={BCrumb} />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <BlankCard>
                        <Box sx={{ maxWidth: { xs: 320, sm: '100%' } }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <BlankCard>
                                        <CardContent>
                                            <Typography variant="h5" mb={1}>
                                                Información del Cliente
                                            </Typography>
                                            <Typography color="textSecondary" mb={3}>
                                                Para crear un nuevo cliente, debes ingresar correctamente la siguiente información.
                                            </Typography>
                                            <CustomerForm />
                                        </CardContent>
                                    </BlankCard>
                                </Grid>
                            </Grid>
                        </Box>
                    </BlankCard>
                </Grid>
            </Grid>
        </PageContainer>
    );
}