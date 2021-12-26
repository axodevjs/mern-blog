import axios from 'axios'
import {setUser} from "../reducers/userReducer";
import {API_URL} from "../config";

export const registration = async (username, password, setError) => {
    try {
        const response = await axios.post(`${API_URL}api/auth/registration`, {
            username,
            password
        })
        alert(response.data.message)
        return true;
    } catch (e) {
        setError(e.response.data.message)
    }
}

export const login = (username, password, setError) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${API_URL}api/auth/login`, {
                username,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            setError(e.response.data.message)
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}api/auth/auth`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}

export const haveAdmin = async () => {
    try {
        const response = await axios.get(`${API_URL}api/auth/haveAdmin`)
        return response.data
    } catch (e) {
        console.log(e)
    }

}


