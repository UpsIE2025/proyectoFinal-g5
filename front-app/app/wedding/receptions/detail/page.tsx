'use client';

import BlankCard from "@/components/blank-card";
import Breadcrumb from "@/components/bread-crumb";
import PageContainer from "@/components/page-container";
import { Box, CardContent, Grid, Typography } from "@mui/material";
import ReceptionForm from "./form";

const BCrumb = [
    {
        to: '/wedding/dashboard',
        title: 'Inicio',
    },
    {
        to: '/wedding/receptions',
        title: 'Recepciones',
    },
    {
        to: '/wedding/receptions/detail',
        title: 'Recepción',
    },
];

export default function ReceptionDetailPage() {
    return (
        <PageContainer>
            <Breadcrumb title="Recepción" items={BCrumb} />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <BlankCard>
                        <Box sx={{ maxWidth: { xs: 320, sm: '100%' } }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <BlankCard>
                                        <CardContent>
                                            <Typography variant="h5" mb={1}>
                                                Información de la recepción
                                            </Typography>
                                            <Typography color="textSecondary" mb={3}>
                                                Para crear una nueva recepción, debes ingresar correctamente la siguiente información.
                                            </Typography>
                                            <ReceptionForm />
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