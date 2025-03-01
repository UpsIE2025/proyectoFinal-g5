import CustomField from '@/components/form/custom-field';
import CustomFormLabel from '@/components/form/custom-form-label';
import { LoginType, initialLogin } from '@/types/login.type';
import validation from '@/validations/login';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/material';
import { Form, Formik, FormikProps } from 'formik';

export default function LoginForm({ submitForm }: { submitForm: any }) {
  return (
    <Formik
      initialValues={initialLogin}
      validationSchema={validation}
      onSubmit={(values: LoginType) => submitForm(values)}
    >
      {(formik: FormikProps<LoginType>) => (
        <Form>
          <Box>
            <CustomFormLabel htmlFor="username">Email</CustomFormLabel>
            <CustomField
              id="username"
              name="username"
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
            disabled={!formik.isValid}
            loading={formik.isSubmitting}
          >
            Ingresar
          </LoadingButton>
        </Form>
      )}
    </Formik>
  );
}
