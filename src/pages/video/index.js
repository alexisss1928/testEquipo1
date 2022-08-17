import React, { useState } from "react"
import validator from "validator"
//import Navbar from "components/Navbar"
import style from "./style-video.module.scss"
import { callVideo } from "api/userVideo"

export const Video = () => {
  const [form, setForm] = useState({
    link: "",
  })

  const [errorMessage, setErrorMessage] = useState("")

  const submitForm = async () => {
    const response = await callVideo({
      URL: "/applicant/link/",
      method: "POST",
      data: form,
    })
    console.log(response)
    //localStorage.setItem("accesstoken", response.tokens.access)
  }

  const handleChange = (e) => {
    if (validator.isURL(e.target.value)) {
      setErrorMessage("")
    } else {
      setErrorMessage("URL inválida")
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submitForm()
    //alert("El video se ha guardado correctamente")
    console.log({ ...form })
    console.error(errorMessage)
  }


  // const validate = (value) => {
  //   if (validator.isURL(value)) {
  //     setErrorMessage(" ")
  //   } else {
  //     setErrorMessage("Lo sentimos, no es una URL válida.")
  //   }
  // }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <div className={style.containerTitle}>
        </div>
        <p className={style.subtitle}>
          Agregar la URL del video donde este alojado:
        </p>
        <input
          className={style.inputURL}
          type="text"
          id="link"
          name="link"
          value={form.link}
          onChange={handleChange}
        />
        <div className={style.divMensaje}>
          <span className={style.messageError}>{errorMessage}</span>
        </div>
        <input className={style.submit} type="submit" value="Guardar" />
      </form>  
    </div>
  )
}
