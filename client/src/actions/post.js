import axios from "axios";
import {API_URL} from "../config";
import {setPosts} from "../reducers/postReducer";
import {hideLoader, showLoader} from "../reducers/appReducer";

export const getPosts = () => {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await axios.get(`${API_URL}api/posts`)
            dispatch(setPosts(response.data))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(hideLoader())
        }
    }
}