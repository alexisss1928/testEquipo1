import axios from 'axios';

const host = process.env.REACT_APP_API_HOST;

export async function passRest() {
    return await axios.post(`${host}/auth/recovery/`, {
        email,
    })
}
