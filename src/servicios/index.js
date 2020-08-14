import axios from 'axios'

const BACKEND_URL = "http://ec2-3-135-238-199.us-east-2.compute.amazonaws.com"

export const SubirArchivo = async (files) => {
    let formData = new FormData();
    formData.append("files", files)
    try {
        const response = await axios.post(`${BACKEND_URL}/api/Amazon/Upload`, formData)
        debugger
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

export const EnviarEmail = async () => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/Amazon/Email`)
        if (response.data.error) {
            return { data: [], error: true }
        } else {
            return { data: response.data.data, error: false }
        }
    } catch (e) {
        return { data: [], error: true }
    }
}