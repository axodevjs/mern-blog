import axios from "axios";
import { API_URL } from "../../config";
import {addPost, deletePost, setPost, setPosts, updatePost} from "../reducers/postReducer";
import { hideLoader, showLoader } from "../reducers/appReducer";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await axios.get(`${API_URL}api/posts`);
      dispatch(setPosts(response.data));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(hideLoader());
    }
  };
};

export const getPostsbyCategory = (category_name) => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await axios.get(`${API_URL}api/posts/categories/${category_name}`);
      dispatch(setPosts(response.data));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(hideLoader());
    }
  };
};

export const getOnePost = (id) => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await axios.get(`${API_URL}api/posts/${id}`);
      dispatch(setPost(response.data));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(hideLoader());
    }
  };
};


export function createPost(data) {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_URL}api/posts`, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(addPost(response.data));
    } catch (e) {
      alert(e.response.data.message);
    }
  };
}

export function delPost(id) {
  return async (dispatch) => {
    try {
      await axios.delete(`${API_URL}api/posts/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(deletePost(id));
    } catch (e) {
      alert(e.response.data.message);
    }
  };
}

export function putPost(data) {
  return async (dispatch) => {
    try {
      await axios.put(`${API_URL}api/posts`, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(updatePost(data));
    } catch (e) {
      alert(e);
    }
  };
}