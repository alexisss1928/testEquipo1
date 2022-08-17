import axios from "axios";

const host = process.env.REACT_APP_API_HOST; //<- URL con validación de correo

export async function EmpVantates(){
    return await axios.get(`${host}/employer/vacante/`,
    {
        data: {
            area:"",
            rol:"",
            tipoTrabajo:"",
            modalidad:"",
            descripcion:"",
            requisitos:"",
            linkVideo:"",
            sueldo:"",
            preguntaUno:"",
            preguntaDos:"",
            preguntaTres:"",
            localidad:"",
        }
})
}

export async function callVacantes({
    URL,
    method = 'GET',
    data = null,
}){
    try {
        const token = localStorage.getItem("accesstoken")
        const url = `${host}${URL}`
        const body = JSON.stringify(data)
        const params = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        }
        const response = await axios.post(url, body, params)
        return response
    } 
    catch (error) {
        return error
    }
}
