import React, { useState } from "react"
import styles from "./style-intereses.module.scss"

export const Intereses = () => {
  const [form, setForm] = useState({})

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("El formulario se ha enviado")
    console.log({ ...form })
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}></div>
      <br />
      <form onSubmit={handleSubmit}>
        <p>Área</p>
        <input
          className={`${styles.input1} `}
          required
          type="area"
          id="area"
          name="area"
          value={form.area}
          onChange={handleChange}
        />
        <br />
        <p>Rol</p>
        <input
          className={`${styles.input1} `}
          type="text"
          id="rol"
          name="rol"
          value={form.rol}
          onChange={handleChange}
        />
        <br />
        <div className={styles.columna}>
          <p>Modalidad </p>
          <select
            className={`${styles.inputSelect} `}
            required
            name="modalidad"
            value={form.modalidad}
            onChange={handleChange}
          >
            <option value="">- - - Selecciona una opción - - - </option>
            <option value="homeoffice">Home Office</option>
            <option value="presencial">Presencial</option>
          </select>
          <br/>
          <p>Tipo de trabajo </p>
          <select
            className={`${styles.inputSelect} `}
            required
            name="tipo"
            value={form.tipo}
            onChange={handleChange}
          >
            <option value="">- - - Selecciona una opción - - - </option>
            <option value="medio">Medio tiempo</option>
            <option value="completo">Tiempo completo</option>
          </select>
        </div>
        <input type="submit" className={styles.buttonSubmit} />
      </form>
    </div>
  )
}
