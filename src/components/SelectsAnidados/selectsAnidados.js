import SelectList from "./selectList"
import React from "react"

const SelectsAnidados = ({estados,setEstados,setMunicipios}) => {

    const TOKEN ="e16e4a63-a2a0-4299-b29e-cff30ef3cd7a"

    return(
        <div>
            <br/>
            <SelectList 
            title="estado" 
            url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}
            //url={`https://api.copomex.com/query/get_estados?token=pruebas`}
            handleChange={(e) => {
            setEstados(e.target.value)}}/>
            <br/>       

            <SelectList 
            title="municipios" 
            url={`https://api.copomex.com/query/get_municipio_por_estado/${estados}?token=${TOKEN}`}
            //url={`https://api.copomex.com/query/get_municipio_por_estado/Aguascalientes?token=pruebas`}
            handleChange={(e) => {
                setMunicipios(e.target.value)}}/>
        </div>
    )
}

export default SelectsAnidados
