import * as yup from 'yup'


export const validationSchema = yup
    .object()
    .shape({
        task: yup.string().required('Please enter a task')
    })
    .required
