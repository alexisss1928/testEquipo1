import React, { useState } from "react"
import styles from "./style-formprofile.module.scss"
import SelectsAnidados from "components/SelectsAnidados/selectsAnidados"
import { callPerson } from "api/userData"
 
export const DatosPersonales = () => {
  const [form, setForm] = useState({    
  nombre: "",
  apellidoPaterno: "",
  apellidoMaterno: "",
  genero: "",
  fecha: "",
  edad: "",
  correo: "",
  estadoCivil: "",
  estados: "",
  municipios: "",
  residencia: "", 
})

  const [estados,setEstados] = useState("");
  const [municipios,setMunicipios] = useState("");


  const submitForm = async () => {
    const response = await callPerson({
      URL: "/applicant/personaldata/",
      method: "POST",
      data: form, 
    })
    console.log(response)
    localStorage.setItem("accesstoken", response.tokens.access)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await submitForm()
    alert("El formulario se ha enviado")
    console.log({...form, estados, municipios});
  }


  // useEffect(() => {
  //   if (loginSuccess) navigate("/profile")
  // }, [loginSuccess, navigate])

  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
       </div>
      <br />
      <form onSubmit={handleSubmit}>
        <div className={styles.columna}>
          <p>Nombre</p>
          <input
            className={`${styles.input} `}
            required
            type="text"
            id="nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
          <br />
          <p>Apellido Paterno</p>
          <input
            className={`${styles.input} `}
            required
            type="text"
            id="apellidoPaterno"
            name="apellidoPaterno"
            value={form.apellidoPaterno}
            onChange={handleChange}
          />
          <br />
          <p>Apellido Materno</p>
          <input
            className={`${styles.input} `}
            required
            type="text"
            id="apellidoMaterno"
            name="apellidoMaterno"
            value={form.apellidoMaterno}
            onChange={handleChange}
          />
          <p>Genero </p>
          <select
            className={`${styles.inputSelect} `}
            required
            name="genero"
            value={form.genero}
            onChange={handleChange}
          >
            <option value="">- - - Selecciona una opción - - - </option>
            <option value="F">Femenino</option>
            <option value="M">Masculino</option>
            <option value="O">Otro</option>
            <option value="N">Prefiero no decirlo</option>
          </select>
          <p>Fecha de Nacimiento </p>
          <input
            className={`${styles.input} `}
            required
            type="date"
            name="fecha"
            id="fecha"
            value={form.fecha}
            onChange={handleChange}
          />

          <p>Estado Civil </p>
          <select
            className={`${styles.inputSelect} `}
            required
            name="estadoCivil"
            value={form.estadoCivil}
            onChange={handleChange}
          >
            <option value="">- - - Selecciona una opción - - - </option>
            <option value="S">Soltero</option>
            <option value="C">Casado</option>
            <option value="V">Viudo</option>
            <option value="D">Divorciado</option>
            <option value="U">Unión Libre</option>
            <option value="N">Prefiero no decirlo</option>
          </select>
          <p>Edad </p>
          <input
            className={`${styles.input} `}
            required
            type="number"
            id="edad"
            name="edad"
            value={form.edad}
            onChange={handleChange}
          />
          <p>Correo </p>
          <input
            className={`${styles.input} `}
            type="email"
            id="correo"
            name="correo"
            value={form.correo}
            onChange={handleChange}
          />
          <p>Residencia Actual </p>
          <input
            className={`${styles.input} `}
            required
            type="text"
            id="residencia"
            name="residencia"
            value={form.residencia}
            onChange={handleChange}
          />
          <SelectsAnidados municipios={municipios} setMunicipios={setMunicipios} estados={estados} setEstados={setEstados} />
        </div>

        <input type="submit" className={styles.buttonSubmit} />
      </form>
    </div>
  )
}
