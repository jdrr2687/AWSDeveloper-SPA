import axios from 'axios'

const BACKEND_URL = "http://ec2-3-135-238-199.us-east-2.compute.amazonaws.com"

export const SubirArchivo = async (files) => {
    debugger
    let formData = new FormData();
    formData.append("files", files[0])
    try {
        const response = await axios.post(`${BACKEND_URL}/api/Amazon/Upload`, formData)
        if (response.data.error) {
            return { data: [], error: true }
        } else {
            return { data: response.data.data, error: false }
        }
    } catch (e) {
        debugger
        return { data: [], error: true }
    }
}
export const EnviarEmail = async (request) => {
    let _request = {
        subject: request.subject,
        message: request.message,
        sendedEmail: request.sendedEmail
    }
    try {
        const response = await axios.post(`${BACKEND_URL}/api/Amazon/Email`, _request)
        if (response.data.error) {
            return { data: [], error: true }
        } else {
            return { data: response.data.data, error: false }
        }
    } catch (e) {
        return { data: [], error: true }
    }
}