import axios from "axios";

const host = process.env.REACT_APP_API_HOST; //<- URL con validación de correo

export async function datosPersonales(){
    return await axios.get(`${host}/applicant/personaldata/`,
    {
        data: {
            nombre: "",
            apellidoPaterno: "",
            apellidoMaterno: "",
            genero: "",
            fecha: "",
            edad: "",
            correo: "",
            estadoCivil: "",
            estados: "",
            municipios: "",
            residencia: "",
        }
})
}

export async function callPerson({
    URL,
    method = 'GET',
    data = null,
}){
    try {
        // setLoading(true)
        const token = localStorage.getItem("accesstoken")
        const url = `${host}${URL}`
        const body = JSON.stringify(data)
        const params = {
             headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
             }
        }
        // console.log({url, body, params})
        const response = await axios.post(url, body, params)
        // setLoading(false)
        // setSuccess(true)
        return response
    } 
    catch (error) {
        // setLoading(false)
        // setError(error)
        return error
    }
}
