import { useEffect, useState } from "react"
import Navbar from "components/Navbar"
import styles from "./style-vacantes.module.scss"
import img12 from "assets/img12.png"
import axios from "axios"

export const Vacantes = () => {
  const [usuarios, setUsuarios] = useState([])
  const [tablaUsuarios, setTablaUsuarios] = useState([])
  const [busqueda, setBusqueda] = useState("")

  const peticionGet = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsuarios(response.data)
        setTablaUsuarios(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      } else if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
      return false;
    });
    setUsuarios(resultadosBusqueda);
  }

  const handleChange = (e) => {
    setBusqueda(e.target.value)
    filtrar(e.target.value)
  }

  useEffect(() => {
    peticionGet()
  }, [])

  return (
    <div>
      <Navbar />
      <p className={`${styles.title} `}>Mis vacantes</p>

      <div >
        <input className={`${styles.containerInput} `}
          value={busqueda}
          placeholder="Búsqueda por Nombre o Empresa"
          onChange={handleChange}
        />

      </div>
      
      <div className={`${styles.divtable} `}>
        <table className={`${styles.tableData} `}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Nombre de Usuario</th>
              <th>Correo</th>
              <th>Sitio Web</th>
              <th>Ciudad</th>
              <th>Empresa</th>
            </tr>
          </thead>
          <tbody>
            {usuarios &&
              usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.name}</td>
                  <td>{usuario.phone}</td>
                  <td>{usuario.username}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.website}</td>
                  <td>{usuario.address.city}</td>
                  <td>{usuario.company.name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <img className={styles.img12} src={img12} alt="imagen representativa" />
    </div>
  )
}
