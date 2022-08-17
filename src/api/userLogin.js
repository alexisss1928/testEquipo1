//const host = "https://testdeployviri.herokuapp.com"
const host = process.env.REACT_APP_API_HOST;

export async function loginUser() {
  return await axios.post(`${host}/auth/login/`, {
    email,
    password,
  })
}