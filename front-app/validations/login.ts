import * as Yup from 'yup';

export default Yup.object({
  username: Yup.string()
    .email('El email ingresado es incorrecto')
    .required('Debe ingresar un correo electrónico'),
  password: Yup.string()
    .required('Debe ingresar una contraseña'),
});
