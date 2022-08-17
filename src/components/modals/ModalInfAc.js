import React from "react"
import styled from "styled-components"

const ModalInfAc = ({ children, estado2, cambiarEstado2, titulo }) => {
  return (
    <>
      {estado2 && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <div>
                <h3>{titulo}</h3>
              </div>
            </EncabezadoModal>
            <BotonCerrar onClick={() => cambiarEstado2(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </BotonCerrar>
            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  )
}

export default ModalInfAc

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  padding: 40px;
 
`

const ContenedorModal = styled.div`
  width: 1300px;
  height: 500px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 40px;
`

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;

  h3 {
    padding-left: 5rem;
    text-transform: uppercase;
    padding-top: 0rem;
    color: #ffffff;
    padding-bottom: 0rem;
  }
  div {
    border-radius: 10px;
    background-color: #b7cadb;
    width: 1400px;
    margin-left: 10px;
    margin-right: 25px;
    height: 60px;
  }
`

const BotonCerrar = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #000000;

  &:hover {
    background: #f2f2f2;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`
