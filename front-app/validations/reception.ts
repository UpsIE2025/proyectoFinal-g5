import * as Yup from 'yup';

export default Yup.object({
  title: Yup.string()
    .min(4, 'Dene ingresar un nombre de recepción válido')
    .required('Debe ingresar el nombre de la recepción'),
  phone: Yup.string()
    .min(7, 'Debe ingresar un número de contacto válido')
    .required('Debe ingresar un número de contacto'),
  email: Yup.string()
    .email('Debe ingresar un correo electrónico válido')
    .required('Debe ingresar un correo electrónico'),
  address: Yup.string()
    .min(3, 'Debe ingresar una dirección válida')
    .required('Debe ingresar una dirección'),
  price: Yup.number()
    .required('Debe ingresar un precio de la recepción'),
});
