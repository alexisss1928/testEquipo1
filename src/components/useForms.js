import { useState} from "react"
import valInfo from "./valInfo"

const useForms = (submitForm, initialValue) => {
  // Valores iniciales del form
  const [values, setValues] = useState(initialValue)
  // Errores
  const [errors, setErrors] = useState({})
  // Si la info es correcta
  //const [dataIsCorrect, setDataIsCorrect] = useState(false)
  // Cambia el estado de los valores
  const handleChange = (event) => {
    console.log("Field change:", event.target.name, event.target.value)
    
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }
  // Evento onSubmit del form
  const handleFormSubmit = (event) => {
    // Previenes que la pagina recarge
    event.preventDefault()

    const { errors, hasErrors } = valInfo(values)

    if (hasErrors) setErrors(errors)
    else submitForm(true)
  }
  //   Regresas funciones
  return { handleChange, handleFormSubmit, values, errors }
}

export default useForms
