import { ErrorMessage, Field, Form, Formik } from 'formik';

const validate = (values) => {
  const errors = {}
  if (!values.name) { errors.name = 'requerido' } else if (values.name.length < 5) {
    errors.name = 'El nombre es muy corto'
  }

  if (!values.lastname) { errors.lastname = 'requerido' } else if (values.lastname.length < 5) {
    errors.lastname = 'El apelido es muy corto'
  }

  if (!values.email) { errors.email = 'requerido' } else if (values.email.length < 5) {
    errors.email = 'El email es muy corto'
  }

  return errors
}
const App = () => {

  return (
    <Formik
      initialValues={ { name: '', lastname: '', email: '', } }
      validate={ validate }
      onSubmit={ values => console.log(values) }
    >
      <Form>
        <label>Nombre</label>
        <Field name='name' type='text' />
        <ErrorMessage name='name' />
        <br />
        <label>Apellido</label>
        <Field name='lastname' type='text' />
        <ErrorMessage name='lastname' />
        <br />
        <label>Email</label>
        <Field name='email' type='email' />
        <ErrorMessage name='email' />
        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  )
}

export default App
