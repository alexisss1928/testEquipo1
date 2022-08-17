import React, { useState } from "react"
import styles from "./style-empleadorperfil.module.scss"
import NavbarE from "components/Navbar/indexE"
import img16 from "assets/img16.png"
import { callEmp } from "api/empPerfil"

export const Empleadorperfil = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    logo: "",
  })

  const submitForm = async () => {
    const response = await callEmp({
      URL: "/employer/profile/",
      method: "POST",
      data: data,
  })
  console.log(response)
  //localStorage.getItem("accesstoken", response.data.tokens.access)
}

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    submitForm()
    console.log({ ...data })
  }

  return (
    <div className={styles.container}>
      <NavbarE />
      <div className={styles.containerTitle}>Completa tu perfil</div>
      <br />
      <form onSubmit={handleSubmit}>
        <p>Nombre de la empresa</p>
        <input
          className={`${styles.input} `}
          required
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <br />
        <p>Descripción de la empresa</p>
        <textarea
          className={`${styles.textarea} `}
          name="description"
          rows="5"
          cols="150"
          value={data.description}
          onChange={handleChange}
        ></textarea>
        <br />
        <p>Sube tu logotipo aquí</p> <br />       
        <input
          type="file"
          className={`${styles.selectedFile} `}
          name="logo"
          value={data.logo}
          onChange={handleChange}
          id="inputFile"
        />
        <br />
        <input type="submit" className={styles.buttonSubmit} onClick = {handleChange}/>
      </form>
      <img className={styles.img16} src={img16} alt="imagen representativa" />
    </div>
  )
}
