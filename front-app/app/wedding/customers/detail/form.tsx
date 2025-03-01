import CustomField from "@/components/form/custom-field";
import CustomFormLabel from "@/components/form/custom-form-label";
import GridItem from "@/components/grid-item";
import SuspenseSkeleton from "@/components/suspense-skeleton";
import { createCustomers, findCustomerById } from "@/services/customers.service";
import { CustomerType, initialCustomer } from "@/types/customer.type";
import customer from "@/validations/customer";
import { faListOl } from '@fortawesome/free-solid-svg-icons';
import { Box, Button, Grid, Stack } from "@mui/material";
import { Form, Formik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SkeletonCustomer from "./skeleton";

export default function CustomerForm() {
    const router = useRouter();
    const params = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [initialParams, setInitialParams] = useState(initialCustomer);

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

    const createCustomer = async (values: CustomerType) => {
        try {
            await createCustomers(values);
            router.push('/wedding/customers')
        } catch (error: any) {
            console.log('Ocurrió un error al guardar el cliente');
        }
    }

    return (
        <SuspenseSkeleton skeleton={<SkeletonCustomer />} loading={loading}>
            <Formik
                initialValues={initialParams}
                validationSchema={customer}
                onSubmit={(values: CustomerType) => createCustomer(values)}
                validateOnMount
            >
                {(formik) => (
                    <Form>
                        <Box sx={{ width: '100%' }}>
                            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <Grid item xs={4} sm={4} md={6}>
                                    <GridItem>
                                        <Box>
                                            <CustomFormLabel htmlFor="fullName">Nombre completo</CustomFormLabel>
                                            <CustomField
                                                id="fullName"
                                                name="fullName"
                                                type="text"
                                                placeholder="Nelson Tello"
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
                                            <CustomFormLabel htmlFor="idNumber">Número de cédula</CustomFormLabel>
                                            <CustomField
                                                id="idNumber"
                                                name="idNumber"
                                                type="text"
                                                placeholder="1718934501"
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
                            </Grid>
                            <Stack direction="row" spacing={2} sx={{ justifyContent: 'end' }} mt={3}>
                                <Button size="large" variant="contained" color="primary" type="submit" disabled={!formik.isValid}>
                                    Guardar
                                </Button>
                                <Button size="large" variant="text" color="error" type="button" onClick={() => router.push('/wedding/customers')}>
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