//const host = "https://testdeployviri.herokuapp.com" <- URL Sin validación de correo
const host = process.env.REACT_APP_API_HOST; //<- URL con validación de correo

export async function registerUser() {
  return await axios.post(`${host}/auth/signup/`, {
    email,
    password,
    type_user,
  })
}
