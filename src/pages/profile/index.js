import React, { useState } from "react"
import Navbar from "components/Navbar"
import styled from "styled-components"
import Modal from "components/modals/Modal"
import { InformacionAcademica } from "pages/informacionacademica"
import { Video } from "pages/video"
import { Intereses} from "pages/intereses"
import { DatosPersonales } from 'pages/perfil/datosPersonales';

export const Profile = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(false)
  const [estadoModal2, cambiarEstadoModal2] = useState(false)
  const [estadoModal3, cambiarEstadoModal3] = useState(false)
  const [estadoModal4, cambiarEstadoModal4] = useState(false)


  return (
    <div>
      <Navbar />
      <ContenedorBotones>
        <Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>
          Datos personales
        </Boton>
        <Boton onClick={() => cambiarEstadoModal2(!estadoModal2)}>
          Informacion Academica
        </Boton>
        <Boton onClick={() => cambiarEstadoModal3(!estadoModal3)}>
          Video de presentación
        </Boton>      
        <Boton onClick={() => cambiarEstadoModal4(!estadoModal4)}>
          Intereses
        </Boton>                    
      </ContenedorBotones>

      {/*Modal 1*/}
      <Modal
        estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
        titulo="Datos Personales"
      >
        <Contenido>
          <DatosPersonales />
        </Contenido>
      </Modal>
      {/*Modal 2*/}
      <Modal
        estado={estadoModal2}
        cambiarEstado={cambiarEstadoModal2}
        titulo="Información Académica"
      >
        <Contenido>
          <InformacionAcademica/>
        </Contenido>
      </Modal>
      {/*Modal 3*/}
      <Modal
        estado={estadoModal3}
        cambiarEstado={cambiarEstadoModal3}
        titulo="Añadir video de presentación"
      >
        <ContenidoV>
          <Video/>
        </ContenidoV>
      </Modal>   
      {/*Modal 4*/}
      <Modal
        estado={estadoModal4}
        cambiarEstado={cambiarEstadoModal4}
        titulo="Intereses"
      >
        <Contenido>
          <Intereses/>
        </Contenido>
      </Modal>            
    </div>
  )
}

const ContenedorBotones = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  
`

const Boton = styled.button`
  display: block;
  padding: 40px 40px;
  border-radius: 100px;
  color: #fff;
  border: none;
  background: #3e698e;
  ;
  cursor: pointer;
  font-family: "Poppins" ;
  font-weight: 500;
  transition: 0.3s ease all;

  &:hover {
    background: #9EB4C6;
  }
`

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  width: 1250px;
  height: 350px;
  padding: 0px;
`

const ContenidoV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1250px;
  height: 350px;
  padding: 0px;
`
