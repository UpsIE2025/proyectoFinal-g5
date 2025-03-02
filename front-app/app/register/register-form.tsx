'use client'
import {Form, Formik} from "formik";
import {Box} from "@mui/material";
import CustomFormLabel from "@/components/form/custom-form-label";
import CustomField from "@/components/form/custom-field";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {LoadingButton} from "@mui/lab";
import { useRouter } from 'next/navigation';
import {RegisterServiceGraph} from "@/services/registerGraph.services";
import {registrationValidationSchema} from "@/validations/login";
import {initialRegistrationValues, RegistrationValues} from "@/types/login.type"

export default  function RegisterForm(){
    const router = useRouter();
    const handleRegister = async (values: RegistrationValues) => {
        console.log('graphql1')
        await RegisterServiceGraph
            .getInstance()
            .registerUser(values).then(() => {
                router.push('/')
            }).catch(error => {
                router.push('/register')
            });
    }
    return (
        <Formik
            initialValues={initialRegistrationValues}
            validationSchema={registrationValidationSchema}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    await handleRegister(values);
                } finally {
                    setSubmitting(false);
                }
            }}
        >
            {({values, isValid, isSubmitting}) => (
                <Form>
                    <Box>
                        <CustomFormLabel htmlFor="name">Nombre de usuario</CustomFormLabel>
                        <CustomField
                            id="name"
                            name="name"
                            value={values.name}
                            type="text"
                            placeholder="Ingresa tu nombre"
                            variant="outlined"
                            icon={faUser}
                            fullWidth
                        />
                    </Box>
                    <Box>
                        <CustomFormLabel htmlFor="lastName">Apellido de usuario</CustomFormLabel>
                        <CustomField
                            id="lastName"
                            name="lastName"
                            value={values.lastName}
                            type="text"
                            placeholder="Ingresa tu apellido"
                            variant="outlined"
                            icon={faUser}
                            fullWidth
                        />
                    </Box>
                    <Box>
                        <CustomFormLabel htmlFor="userName">Nickname</CustomFormLabel>
                        <CustomField
                            id="userName"
                            name="userName"
                            value={values.userName}
                            type="text"
                            placeholder="Ingresa nickName del usuario"
                            variant="outlined"
                            icon={faUser}
                            fullWidth
                        />
                    </Box>
                    <Box>
                        <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                        <CustomField
                            id="email"
                            name="email"
                            value={values.email}
                            type="text"
                            placeholder="Ingresa tu correo electrónico"
                            variant="outlined"
                            icon={faUser}
                            fullWidth
                        />
                    </Box>
                    <Box mb={4}>
                        <CustomFormLabel htmlFor="password">Contraseña</CustomFormLabel>
                        <CustomField
                            id="password"
                            name="password"
                            value={values.password}
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            variant="outlined"
                            fullWidth
                        />
                    </Box>
                    <LoadingButton
                        color="primary"
                        variant="contained"
                        size="large"
                        fullWidth
                        type="submit"
                        disabled={!isValid || isSubmitting}
                    >
                        Registrar Usuario
                    </LoadingButton>
                </Form>
            )}
        </Formik>
    );
}
