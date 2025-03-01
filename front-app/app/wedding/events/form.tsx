import CustomField from "@/components/form/custom-field";
import CustomFormLabel from "@/components/form/custom-form-label";
import GridItem from "@/components/grid-item";
import SuspenseSkeleton from "@/components/suspense-skeleton";
import { findAllCustomers } from "@/services/customers.service";
import { createEvents } from "@/services/events.service";
import { findAllReceptions } from "@/services/receptions.service";
import { EventType } from "@/types/event.type";
import event from "@/validations/event";
import { faListOl } from '@fortawesome/free-solid-svg-icons';
import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import SkeletonEvent from "./skeleton";

export default function EventForm({ eventData, closeDialog }: { eventData: EventType; closeDialog: any }) {
    const [loading, setLoading] = useState(true);
    const [customers, setCustomers] = useState();
    const [receptions, setReceptions] = useState();

    useEffect(() => {
        Promise.all([findAllCustomers(), findAllReceptions()])
            .then(([customersList, receptionsList]) => {
                setCustomers(customersList);
                setReceptions(receptionsList);
            })
            .finally(() => setLoading(false));
    }, []);

    const createEvent = async (values: EventType) => {
        try {
            await createEvents(values);
            closeDialog();
        } catch (error: any) {
            console.log('Ocurrió un error al guardar el evento');
        }
    }

    return (
        <SuspenseSkeleton skeleton={<SkeletonEvent />} loading={loading}>
            <Formik
                initialValues={eventData}
                validationSchema={event}
                onSubmit={(values: EventType) => createEvent(values)}
                validateOnMount
            >
                {(formik) => (
                    <Form>
                        <Box sx={{ width: '100%' }}>
                            <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <Grid item xs={4} sm={4} md={6}>
                                    <GridItem>
                                        <Box>
                                            <CustomFormLabel htmlFor="customerId">Cliente</CustomFormLabel>
                                            <CustomField
                                                id="customerId"
                                                name="customerId"
                                                type="select"
                                                variant="outlined"
                                                options={customers}
                                                value={formik.values.customerId}
                                                fullWidth
                                            />
                                        </Box>
                                    </GridItem>
                                </Grid>
                                <Grid item xs={4} sm={4} md={6}>
                                    <GridItem>
                                        <Box>
                                            <CustomFormLabel htmlFor="receptionId">Recepción</CustomFormLabel>
                                            <CustomField
                                                id="receptionId"
                                                name="receptionId"
                                                type="select"
                                                variant="outlined"
                                                options={receptions}
                                                value={formik.values.receptionId}
                                                fullWidth
                                            />
                                        </Box>
                                    </GridItem>
                                </Grid>
                                <Grid item xs={4} sm={4} md={6}>
                                    <GridItem>
                                        <Box>
                                            <CustomFormLabel htmlFor="description">Descripción</CustomFormLabel>
                                            <CustomField
                                                id="description"
                                                name="description"
                                                type="text"
                                                placeholder="Boda con estilo rustico"
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
                                            <CustomFormLabel htmlFor="capacity">Capcidad</CustomFormLabel>
                                            <CustomField
                                                id="capacity"
                                                name="capacity"
                                                type="number"
                                                placeholder="10"
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
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <CustomFormLabel htmlFor="capacity">Fecha de Inicio</CustomFormLabel>
                                                <DatePicker
                                                    inputFormat="MM/dd/yyyy"
                                                    value={formik.values.startDate}
                                                    onChange={(value: any) => {
                                                        formik.setFieldValue('startDate', new Date(value));
                                                    }}
                                                    renderInput={(params: any) => <TextField {...params} variant="outlined" fullWidth />}
                                                />
                                            </LocalizationProvider>
                                        </Box>
                                    </GridItem>
                                </Grid>
                                <Grid item xs={4} sm={4} md={6}>
                                    <GridItem>
                                        <Box>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <CustomFormLabel htmlFor="capacity">Fecha de Fin</CustomFormLabel>
                                                <DatePicker
                                                    inputFormat="MM/dd/yyyy"
                                                    value={formik.values.endDate}
                                                    onChange={(value: any) => {
                                                        formik.setFieldValue('endDate', new Date(value));
                                                    }}
                                                    renderInput={(params: any) => (
                                                        <TextField
                                                            {...params}
                                                            fullWidth
                                                            error={formik.values.startDate > formik.values.endDate}
                                                            helperText={formik.values.startDate > formik.values.endDate ? 'Seleccione una fecha correcta' : ''}
                                                        />
                                                    )}
                                                />
                                            </LocalizationProvider>
                                        </Box>
                                    </GridItem>
                                </Grid>
                                <Grid item xs={4} sm={4} md={6}>
                                    <GridItem>
                                        <Box>
                                            <CustomFormLabel htmlFor="status">Estado del Evento</CustomFormLabel>
                                            <CustomField
                                                id="status"
                                                name="status"
                                                type="text"
                                                placeholder="Pendiente de confirmar"
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
                                <Button size="large" variant="text" color="error" type="button" onClick={() => closeDialog()}>
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