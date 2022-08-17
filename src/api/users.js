import axios from 'axios'

const host = process.env.REACT_APP_API_HOST;

export async function registerUser(data) {
    return await axios.post(`${host}/auth/signup/`, data)
}

export async function callApi({
    URL,
    method = 'GET',
    data = null,
    setLoading = null,
    setError = null,
    setSuccess = null,
}) {
    //return await axios.post(`${host}/auth/login/`, data)
    try {
        setLoading(true)
        const response = await axios({
            method,
            url: `${host}${URL}`,
            data,
        })
        setLoading(false)
        setSuccess(true)
        return response.data
    } 
    catch (error) {
        setLoading(false)
        setError(error)
        return error
    }
}
export async function userVerification(data) {
    return await axios.post(`${host}/auth/verify-email/?token=`, data)
}

export async function passRest(data) {
    return await axios.post(`${host}/auth/recovery/`, data)
}

export async function datosAcademic(data){
    return await axios.get(`${host}/applicant/academicdata/`,
    {
        data: {
            nivel:data.nivel,
            nombre:data.nombre,
            institucion:data.institucion,
            duracion:data.duracion,
            estatus:data.estatus,
        }
    })
}

export async function datosVideo(data){
    return await axios.get(`${host}/applicant/link/`,
    {
        data: {
            link:data.link,
        }
    })
}
