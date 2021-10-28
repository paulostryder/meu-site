import * as yup from 'yup';


export default yup.object().shape({
    title: yup.string().required('Campo Obrigatorio'),
    url: yup.string().url('Url deve ser Válida').required('Campo Obrigatorio'),
    imageUrl: yup.string().url('Url deve ser Válida').required('Campo Obrigatorio'),
    price: yup.number().required('Campo Obrigatorio'),
});