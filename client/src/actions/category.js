import axios from 'axios';
import {API_URL} from "../config";
import {addCategory, deleteCategory, setCategories, updateCategory} from "../reducers/categoryReducer";
import {hideLoader, showLoader} from "../reducers/appReducer";

export const getCategories = () => {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await axios.get(`${API_URL}api/categories`)
            dispatch(setCategories(response.data))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(hideLoader())
        }
    }
}

export function createCategory(data) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/categories`, data, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(addCategory(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function delCategory(id) {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}api/categories/${id}`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(deleteCategory(id))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function putCategory(data) {
    return async dispatch => {
        try {
            const response = await axios.put(`${API_URL}api/categories`, data, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(updateCategory(data))
        } catch (e) {
            alert(e)
        }
    }
}