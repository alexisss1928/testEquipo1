import useForms from "components/useForms"
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import prueba from "assets/prueba.png"
import * as api from "api"
import style from "./style-sig.module.scss"
import Swal from "sweetalert2"
import Navbar from "components/Navbar"

export const SignUp = () => {
  const navigate = useNavigate()
  const initialValues = {
    email: "",
    password: "",
    password2: "",
    type_user: "1",
  }

  const [success, setSuccess] = React.useState("")
  const [error, setError] = React.useState("")

  const submitForm = async () => {
    try {
      const { status, data } = await api.registerUser({
        email,
        password,
        type_user,
      })

      if (status === 200) setSuccess(true)
      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Revisa tu correo para activar tu cuenta",
      })

      console.log(data)
    } catch (err) {
      setError(`Error(${err.status}): ${err.message}`)
      console.log(err)
    }
  }

  const { handleChange, handleFormSubmit, values, errors } = useForms(
    submitForm,
    initialValues
  )

  const { email, password, password2, type_user } = values

  useEffect(() => {
    if (success) navigate("/")
  }, [success, navigate])

  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.headers}>
            <h1 className={style.title}>Registro</h1>
            <h2 className={style.subtitle}>¡Manos a la obra!</h2>
          </div>
          <img
            className={style.imagen}
            src={prueba}
            alt="imagen representativa"
          />
        </div>
        {error && <div>{error}</div>}
        <form className={style.form} onSubmit={handleFormSubmit}>
          <div className={style.formRow}>
            <label className={style.label}>
              Correo Electronico
              <input
                className={style.input}
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className={style.error}>{errors.email}</p>}
            </label>
            <label className={style.label}>
              Roles
              <select
                placeholder="Seleccione un rol"
                className={style.inputSelect}
                name="type_user"
                value={type_user}
                onChange={handleChange}
                required
              >
                <option value="">
                  ------- Seleccione una opción -------
                </option>
                <option value="1">Solicitante</option>
                <option value="2">Empleador</option>
              </select>
            </label>
          </div>
          <div className={style.formRow}>
            <label className={style.label}>
              Contraseña
              <input
                className={style.input}
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
              {errors.password && (
                <p className={style.error}>{errors.password}</p>
              )}
            </label>
            <label className={style.label}>
              Confirmar Contraseña
              <input
                className={style.input}
                type="text"
                name="password2"
                value={password2}
                onChange={handleChange}
                required
              />
              {errors.password2 && (
                <p className={style.error}>{errors.password2}</p>
              )}
            </label>
          </div>
          <button type="submit" className={style.submit}>
            Registrarse
          </button>
          <span className={style.login}>
            ¿Ya tienes cuenta? <a href="../">Inicia Sesión</a>
          </span>
        </form>
      </div>
    </div>
  )
}
