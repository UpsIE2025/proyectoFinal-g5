import * as Yup from 'yup';

export default Yup.object({
  fullName: Yup.string()
    .min(4, 'Dene ingresar un nombre válido')
    .required('Debe ingresar su nombre y apellido'),
  idNumber: Yup.string()
    .min(10, 'Debe ingresar un número cédula válido')
    .required('Debe ingresar un número de cédula'),
  phone: Yup.string()
    .min(7, 'Debe ingresar un número de contacto válido')
    .required('Debe ingresar un número de contacto'),
  email: Yup.string()
    .email('Debe ingresar un correo electrónico válido')
    .required('Debe ingresar un correo electrónico'),
  address: Yup.string()
    .min(3, 'Debe ingresar una dirección válida')
    .required('Debe ingresar una dirección'),
});
