import {ADD_POST, DELETE_POST, SET_POST, SET_POSTS, UPDATE_POST} from "../types/postTypes";

const defaultState = {
  posts: [],
  post: {},
  currentPost: {}
};

export default function postReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.payload };

    case SET_POST:
      return { ...state, post: action.payload };

    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };

    case DELETE_POST:
      return {
        ...state,
        posts: [
          ...state.posts.filter(
              (post) => post._id != action.payload
          ),
        ],
      };

    case UPDATE_POST:
      const newPost = state.posts;
      let foundIndex = newPost.findIndex((x) => x._id == action.payload._id);

      newPost[foundIndex] = action.payload;
      return {
        ...state,
        posts: newPost,
      };

    default:
      return state;
  }
}

export const setPosts = (posts) => ({ type: SET_POSTS, payload: posts });
export const setPost = (post) => ({ type: SET_POST, payload: post });
export const addPost = (category) => ({
  type: ADD_POST,
  payload: category,
});
export const deletePost = (id) => ({ type: DELETE_POST, payload: id });
export const updatePost = (data) => ({
  type: UPDATE_POST,
  payload: data,
});