import { useFormik } from 'formik'
function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
    },
    onSubmit: values => console.log(values),
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input
        name='name'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label>Apellido</label>
      <input
        name='lastname'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.lastname}
      />
      <label>Email</label>
      <input
        name='email'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default App
