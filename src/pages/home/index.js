import { useState, useEffect } from "react"
import { Link, useNavigate} from "react-router-dom"
import img1 from "assets/img1.png"
import styles from "./style-home.module.scss"
import { callApi } from "../../api"
import Swal from "sweetalert2"

const errorInitialState = {
  msg1: '',
  msg2: '',
  msg3: '',
}

export const Home = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const [loginSuccess, setLoginSuccess] = useState("")
  const [loginError, setLoginError] = useState("")
  const [loading, setLoading] = useState(false)


  const submitForm = async () => {
    /* Trying to login the user. */
    const response = await callApi({
      URL: "/auth/login/",
      method: "POST",
      data,
      setLoading: setLoading,
      setError: setLoginError,
      setSuccess: setLoginSuccess,
    })
    console.log(response)
    localStorage.getItem("accesstoken", response.tokens.access)
    //localStorage.setItem("refreshtoken", response.tokens.refresh)
  }
  /**
   * The handleChange function takes an event as an argument, and then sets the data state to the
   * current data state, plus the event target name and value
   * @param event - the event that triggered the function
   */
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    submitForm()
  }

  useEffect(() => {
   if (loginSuccess)navigate("/profile")
   }, [loginSuccess, navigate])


   useEffect(() => {
     if (loginError) {
       let errorMsg = errorInitialState
       for (let property in loginError.response.data) {
        //console.log(property)
         errorMsg = {
           ...errorMsg,
           [property]: loginError.response.data[property]
         }
       }
       if (errorMsg.msg3 !== '') {
         Swal.fire({
           icon: "error",
           title: "Oops...",
           text: errorMsg.msg3,
         });
       }
     }
   }, [loginError])


  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1 className={styles.title}>¡Bienvenido!</h1>
        <h3 className={styles.subtitle}>Por favor, inicia sesión.</h3>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <label>
            Correo:
            {/* A form input that is using the `useForm` hook to validate the input. */}
            <input
              className={styles.input}
              placeholder="Ingrese su correo electrónico"
              type="email"
              name="email"
              required
              value={data.email}
              onChange={handleChange}

            />
          </label>
          <br />
          <label>
            Contraseña:
            <input
              className={`${styles.input} ${styles.password}`}
              placeholder="Ingrese su contraseña"
              type="password"
              name="password"
              required
              /* Setting the value of the input to the value of the password property of the data
              state. */
              value={data.password}
              onChange={handleChange}
            />
           {loginError && (
              <p className={styles.error}>
                {loginError.response.data.msg1 || loginError.response.data.msg2}
              </p>
            )} 
          </label>
          <input className={styles.btnSubmit} type="submit" value={
            loading ? "Iniciando sesión..." : "Iniciar sesión"
          } />
        </form>
        <Link to="/restpass">¿Has olvidado tu contraseña?</Link>
        <span>¿No tienes una cuenta?</span>
        <Link to="/sign-up">Regístrate aquí.</Link>
        {/* <Link to="/profile">Perfil</Link>
        <Link to="/vacantes">Vista vacantes</Link> */}
      </div>
      <img className={styles.img1} src={img1} alt="imagen representativa" />
    </div>
  )
}
