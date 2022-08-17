import React from "react"
import Navbar from "components/Navbar"
import styles from "./style-cuentaActivada.module.scss"
import {useNavigate } from "react-router-dom"

export const CuentaActivada = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Navbar />
      <p className={`${styles.title} `}>Cuenta exitosamente verificada</p>
      <br/><br/><br/>
      <div>
        <button
          type="submit"
          className={styles.buttonSubmit}
          onClick={() => navigate("/")}
        >Aceptar</button>
      </div>
    </div>
  )
}
