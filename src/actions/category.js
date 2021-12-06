import axios from 'axios';
import {API_URL} from "../config";
import {setCategories} from "../reducers/categoryReducer";
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