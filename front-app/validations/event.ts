import * as Yup from 'yup';

export default Yup.object({
  customerId: Yup.number()
    .required('Debe seleccionar un cliente'),
  receptionId: Yup.number()
    .required('Debe seleccionar una recepción'),
  description: Yup.string()
    .required('Debe ingresar una descripción del evento'),
  capacity: Yup.number()
    .required('Debe ingresar la capacidad del evento'),
  startDate: Yup.date()
    .required('Debe seleccionar una fecha de inicio'),
  endDate: Yup.date()
    .required('Debe seleccionar una fecha de finalización'),
  status: Yup.string()
    .required('Debe seleccionar un estado del evento'),
});
