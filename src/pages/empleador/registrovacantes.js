import React, { useState } from "react"
import NavbarE from "components/Navbar/indexE"
import styles from "./style-registrovacantes.module.scss"
import recurso11 from "assets/recurso11.png"
import validator from "validator"
import { callVacantes } from "api/empVacantes"

export const Registrovacantes = () => {
  const [form, setForm] = useState({
    area:"",
    rol:"",
    tipoTrabajo:"",
    modalidad:"",
    descripcion:"",
    requisitos:"",
    linkVideo:"",
    sueldo:"",
    preguntaUno:"",
    preguntaDos:"",
    preguntaTres:"",
    localidad:"",
  })

const submitForm = async () => {
  const response = await callVacantes({
    URL: "/employer/vacante/",
    method: "POST",
    data: form,
  })
  console.log(response)
  localStorage.getItem("accesstoken", response.tokens.access)
}

  const handleChange = (e) => {
    if (validator.isURL(e.target.value)) {
      setErrorMessage(" ")
    } else {
      setErrorMessage("Lo sentimos, no es una URL válida.")
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submitForm()
    //alert("El formulario se ha enviado")
    console.log({ ...form })
  }

  const [errorMessage, setErrorMessage] = useState("")

  return (
    <div>
      <NavbarE />
      <div className={styles.containerTitle}>Registro vacante</div>
      <br />
      <form onSubmit={handleSubmit}>
      <div className={styles.columna}>        
        <p>Área</p>
        <input
          className={`${styles.input} `}
          required
          type="text"
          id="area"
          name="area"
          value={form.area}
          onChange={handleChange}
        />
        <br />
        <p>Rol</p>
        <input
          className={`${styles.input} `}
          required
          type="text"
          id="rol"
          name="rol"
          value={form.rol}
          onChange={handleChange}
        />
        <br />
        <p>Tipo de trabajo</p>
        <select
          className={`${styles.inputSelect} `}
          required
          name="tipoTrabajo"
          value={form.tipoTrabajo}
          onChange={handleChange}
        >
          <option value="">- - - Selecciona una opción - - - </option>
          <option value="M">Medio tiempo</option>
          <option value="C">Tiempo completo</option>
        </select>
        <p>Modalidad</p>
        <select
          className={`${styles.inputSelect} `}
          required
          name="modalidad"
          value={form.modalidad}
          onChange={handleChange}
        >
          <option value="">- - - Selecciona una opción - - - </option>
          <option value="P">Presencial</option>
          <option value="V">Virtual</option>
        </select>
        </div>
        <p>Descripción del puesto</p>
        <textarea
          className={`${styles.textarea} `}
          name="descripcion"
          rows="5"
          cols="150"
          value={form.descripcion}
          onChange={handleChange}
        ></textarea>
        <br />
        <p>Requisitos</p>
        <textarea
          className={`${styles.textarea} `}
          name="requisitos"
          rows="5"
          cols="150"
          value={form.requisitos}
          onChange={handleChange}
        ></textarea>
        <br />
        <div className={styles.columna}>        
        <pre>
          <p>Sube tu video</p>
          <input
            className={styles.inputURL}
            type="text"
            onChange={handleChange}
            id="linkVideo"
            name="linkVideo"
            value={form.linkVideo}
          />
          <div className={styles.divMensaje}>
            <span className={styles.messageError}>{errorMessage}</span>
          </div>
        </pre>
        <br />
        <br />
        <p>Sueldo</p>
        <input
          className={`${styles.input} `}
          required
          type="text"
          id="sueldo"
          name="sueldo"
          value={form.sueldo}
          onChange={handleChange}
        />
        </div>
        <p>Pregunta 1 (opcional)</p>
        <input
          className={`${styles.input2} `}
          type="text"
          id="preguntaUno"
          name="preguntaUno"
          value={form.preguntaUno}
          onChange={handleChange}
        />
        <p>Pregunta 2 (opcional)</p>
        <input
          className={`${styles.input2} `}
          type="text"
          id="preguntaDos"
          name="preguntaDos"
          value={form.preguntaDos}
          onChange={handleChange}
        />
        <p>Pregunta 3 (opcional)</p>
        <input
          className={`${styles.input2} `}
          type="text"
          id="preguntaTres"
          name="preguntaTres"
          value={form.preguntaTres}
          onChange={handleChange}
        />
        <p>Localidad (opcional)</p>
        <input
          className={`${styles.input2} `}
          type="text"
          id="Localidad"
          name="Localidad"
          value={form.localidad}
          onChange={handleChange}
        />
        <input type="submit" className={styles.buttonSubmit} />
      </form>
      <img
        className={styles.recurso11}
        src={recurso11}
        alt="imagen representativa"
      />
    </div>
  )
}
