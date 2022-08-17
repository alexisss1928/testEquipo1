import axios from "axios";

const host = process.env.REACT_APP_API_HOST; //<- URL con validación de correo

export async function empRegister() {
    return await axios.get(`${host}/employer/vacante/`,
        {
            data: {
                area: "",
                rol: "",
                tipoTrabajo: "",
                modalidad: "",
                descripcion: "",
                requisitos: "",
                linkVideo: "",
                sueldo: "",
                preguntaUno: "",
                preguntaDos: "",
                preguntaTres: "",
                localidad: "",
            }
        })
}

export async function callRegister({
    URL,
    method = 'GET',
    data = null,
}) {
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
