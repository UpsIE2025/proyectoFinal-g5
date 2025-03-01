import CustomField from "@/components/form/custom-field";
import CustomFormLabel from "@/components/form/custom-form-label";
import GridItem from "@/components/grid-item";
import SuspenseSkeleton from "@/components/suspense-skeleton";
import { findCustomerById } from "@/services/customers.service";
import { createReceptions } from "@/services/receptions.service";
import { ReceptionType, initialReception } from "@/types/reception.type";
import reception from "@/validations/reception";
import { faListOl } from '@fortawesome/free-solid-svg-icons';
import { Box, Button, Grid, Stack } from "@mui/material";
import { Form, Formik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SkeletonReception from "./skeleton";

export default function ReceptionForm() {
    const router = useRouter();
    const params = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [initialParams, setInitialParams] = useState(initialReception);

    useEffect(() => {
        const id = Number(params.get('id'));

        if (id) {
            findCustomerById(id)
                .then(params => {
                    setInitialParams(params);
                    setLoading(false);
                })
        } else {
            setLoading(false);
        }
    }, []);

    const createReception = async (values: ReceptionType) => {
        try {
            await createReceptions(values);
            router.push('/wedding/receptions')
        } catch (error: any) {
            console.log('Ocurrió un error al guardar la recepción');
        }
    }

    return (
        <SuspenseSkeleton skeleton={<SkeletonReception />} loading={loading}>
            <Formik
                initialValues={initialParams}
                validationSchema={reception}
                onSubmit={(values: ReceptionType) => createReception(values)}
                validateOnMount
            >
                {(formik) => (
                    <Form>
                        <Box sx={{ width: '100%' }}>
                            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <Grid item xs={4} sm={4} md={6}>
                                    <GridItem>
                                        <Box>
                                            <CustomFormLabel htmlFor="title">Nombre de la Recepción</CustomFormLabel>
                                            <CustomField
                                                id="title"
                                                name="title"
                                                type="text"
                                                placeholder="Recepciones el Rejón"
                                                variant="outlined"
                                                icon={faListOl}
                                                fullWidth
                                            />
                                        </Box>
                                    </GridItem>
                                </Grid>
                                <Grid item xs={4} sm={4} md={6}>
                                    <GridItem>
                                        <Box>
                                            <CustomFormLabel htmlFor="phone">Teléfono</CustomFormLabel>
                                            <CustomField
                                                id="phone"
                                                name="phone"
                                                type="text"
                                                placeholder="0984578931"
                                                variant="outlined"
                                                icon={faListOl}
                                                fullWidth
                                            />
                                        </Box>
                                    </GridItem>
                                </Grid>
                                <Grid item xs={4} sm={4} md={6}>
                                    <GridItem>
                                        <Box>
                                            <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                                            <CustomField
                                                id="email"
                                                name="email"
                                                type="text"
                                                placeholder="customer@custom.com"
                                                variant="outlined"
                                                icon={faListOl}
                                                fullWidth
                                            />
                                        </Box>
                                    </GridItem>
                                </Grid>
                                <Grid item xs={4} sm={4} md={6}>
                                    <GridItem>
                                        <Box>
                                            <CustomFormLabel htmlFor="address">Dirección</CustomFormLabel>
                                            <CustomField
                                                id="address"
                                                name="address"
                                                type="text"
                                                placeholder="El belén - San Antonio de Pichincha"
                                                variant="outlined"
                                                icon={faListOl}
                                                fullWidth
                                            />
                                        </Box>
                                    </GridItem>
                                </Grid>
                                <Grid item xs={4} sm={4} md={6}>
                                    <GridItem>
                                        <Box>
                                            <CustomFormLabel htmlFor="price">Precio por Hora</CustomFormLabel>
                                            <CustomField
                                                id="price"
                                                name="price"
                                                type="number"
                                                placeholder="300"
                                                variant="outlined"
                                                icon={faListOl}
                                                fullWidth
                                            />
                                        </Box>
                                    </GridItem>
                                </Grid>
                            </Grid>
                            <Stack direction="row" spacing={2} sx={{ justifyContent: 'end' }} mt={3}>
                                <Button size="large" variant="contained" color="primary" type="submit" disabled={!formik.isValid}>
                                    Guardar
                                </Button>
                                <Button size="large" variant="text" color="error" type="button" onClick={() => router.push('/wedding/receptions')}>
                                    Cancelar
                                </Button>
                            </Stack>
                        </Box>
                    </Form>
                )}
            </Formik>
        </SuspenseSkeleton>
    );
}