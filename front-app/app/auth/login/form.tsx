'use client'
import CustomField from '@/components/form/custom-field';
import CustomFormLabel from '@/components/form/custom-form-label';
import validation from '@/validations/login';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/material';
import { Form, Formik, FormikProps } from 'formik';
import {LoginService} from "@/services/login.service";
import { useRouter } from 'next/navigation';
import { setAccessToken } from '@/redux/tokenSlice';
import { useDispatch } from 'react-redux';

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogin = async (values: {email: string; password: string}) => {
    await LoginService
        .getInstance()
        .loginUser(values).then((response) => {
          router.push('/wedding/dashboard');
          dispatch(setAccessToken(response.data.access_token))
        }).catch(error => {
          router.push('/');
        })
  }


  return (
    <Formik
      initialValues={{email:'',password:''}}
      validationSchema={validation}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await handleLogin(values);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({values, errors, touched, handleChange, handleBlur,handleSubmit, isValid, isSubmitting}) => (
        <Form>
          <Box>
            <CustomFormLabel htmlFor="username">Email</CustomFormLabel>
            <CustomField
              id="username"
              name="username"
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
