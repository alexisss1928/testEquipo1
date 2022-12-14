import axios from "axios";

const host = process.env.REACT_APP_API_HOST; //<- URL con validación de correo

export async function datosAcademic(){
    return await axios.get(`${host}/applicant/academicdata/`,
    {
        data: {
            nivel:"",
            nombre:"",
            institucion:"",
            duracion:"",
            estatus:"",
        }
})
}

export async function callAcademic({
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
