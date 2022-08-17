const host = process.env.REACT_APP_API_HOST;

export async function VerificationUser() {
    return await axios.post(`${host}/auth/verify-email/?token=`, {
        email
    })
}

