import { callAcademic } from "api/userAcademic"
import React, { useState } from "react"
//import Navbar from "components/Navbar"
import style from "./style-informacionacademica.module.scss"

export const InformacionAcademica = () => {
  const [form, setForm] = useState({
    nivel: "",
    nombre: "",
    institucion: "",
    duracion: "",
    estatus: "",
  })

  const submitForm = async () => {
    const response = await callAcademic({
      URL: "/applicant/academicdata/",
      method: "POST",
      data: form,
    })
    console.log(response)
    localStorage.setItem("accesstoken", response.data.tokens.access)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submitForm()
    alert("El formulario se ha enviado")
    console.log({ ...form })
  }
  return (
    <div className={style.container}>
      <pre>
        <div className={style.containerForm}>
          <form onSubmit={handleSubmit}>
            <p>Título</p>
            <input
              className={`${style.input1} `}
              required
              type="text"
              id="nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
            />
            <p>Institución educativa</p>
            <input
              className={`${style.input1} `}
              required
              type="text"
              id="institucion"
              name="institucion"
              value={form.institucion}
              onChange={handleChange}
            />
            <div className={style.columna}>
              <p>Duración</p>
              <input
                className={`${style.input} `}
                required
                type="text"
                id="duracion"
                name="duracion"
                value={form.duracion}
                onChange={handleChange}
              />
              <p>Nivel</p>
              <select
                className={`${style.inputSelect} `}
                required
                name="nivel"
                value={form.nivel}
                onChange={handleChange}
              >
                <option value="">- - - Selecciona una opción - - - </option>
                <option value="T">Carrera Técnica</option>
                <option value="U">Universidad</option>
                <option value="M"> Maestría</option>
                <option value="D"> Doctorado</option>
                <option value="C"> Curso</option>
                <option value="E"> Certificación</option>
              </select>
              <p>Estatus</p>
              <select
                className={`${style.inputSelect} `}
                required
                name="estatus"
                value={form.estatus}
                onChange={handleChange}
              >
                <option value="">- - - Selecciona una opción - - - </option>
                <option value="F">Finalizado</option>
                <option value="T">Trunco</option>
                <option value="E"> En curso</option>
              </select>
            </div>
            <p>Breve descripción</p>
            <textarea
              className={`${style.textarea} `}
              name="descripcion"
              rows="10"
              cols="180"
              value={form.descripcion}
              onChange={handleChange}
            ></textarea>
            <br />
            <input type="submit" className={style.buttonSubmit} />
          </form>
        </div>
      </pre>
    </div>
  )
}
