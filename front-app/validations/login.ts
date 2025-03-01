import * as Yup from 'yup';

export const registrationValidationSchema = Yup.object({
    name: Yup.string().required('Nombre es requerido'),
    email: Yup.string().required('el correo electrónico es requerido'),
    password: Yup.string().required('La constraseña es requerida')
});

export const loginValidationSchema = Yup.object({
   email: Yup.string().email('El correo es requerido'),
   password: Yup.string().required('El correo es requerido'),
});