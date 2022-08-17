import axios from "axios";

const host = process.env.REACT_APP_API_HOST; //<- URL con validación de correo

export async function perfilEmp(){
    const data = new FormData();
    data.append("nombre", "Empresa");
    data.append("descripcion", "Descripcion");
    data.append("logo", "logo");

    
    return await axios.get(`${host}/employer/profile/`,
        {
            data:{
                nombre:"",
                descripcion:"",
                logo:"",
            }

})
}

export async function callEmp({
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
                'Content-Type': 'multipart/form-data',
            }
        }
        const response = await axios.post(url, body, params)
        return response
    } 
    catch (error) {
        return error
    }
}