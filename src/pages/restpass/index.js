import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "components/Navbar"
import styles from "./style-forgotpass.module.scss"
import img6 from "assets/img 6.png"
import { callApi } from "api"


export const RestPass = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
  })

  const [loginSuccess, setLoginSuccess] = useState("")
  const [setLoginError] = useState("")
  const [loading, setLoading] = useState(false)

  const submitForm = () => {
    
    callApi({
      URL: "/auth/recovery/",
      method: "POST",
      data,
      setLoading: setLoading,
      setError: setLoginError,
      setSuccess: setLoginSuccess,
    })
    }
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    submitForm()
  }

  useEffect(() => {
    if (loginSuccess) navigate("/")
  }, [loginSuccess, navigate])


  return (
    <div>
      <Navbar />
      <h2 className={styles.title}>¿Olvidaste tu contraseña? </h2>
      <br/>
      <p className={styles.text}>
        Ingresa tu correo electrónico, para restablecer tu contraseña.
      </p>
      <br/>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          required
          className={styles.inputEmail}
          placeholder="nombre@ejemplo.com"
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <br/>
        <input type="submit" className={styles.btnSubmit} value={
            loading ? "Enviando correo ..." : "Enviar" } />
      </form>
      
      <img className={styles.img6} src={img6} alt=" "/>
    </div>
  )
}
