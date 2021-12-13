const SET_CATEGORIES = "SET_CATEGORIES"
const ADD_CATEGORY = "ADD_CATEGORY"
const DELETE_CATEGORY = "DELETE_CATEGORY"
const UPDATE_CATEGORY = "UPDATE_CATEGORY"
const GET_CATEGORY = "GET_CATEGORY"

const CURRENT_CATEGORY = "CURRENT_CATEGORY"
const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY"

const defaultState = {
    categories: [],
    currentCategory: {}
}

export default function categoryReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CATEGORIES: return {...state, categories: action.payload}
        case ADD_CATEGORY: return {...state, categories: [...state.categories, action.payload]}
        case DELETE_CATEGORY: return {...state, categories: [...state.categories.filter(category => category._id != action.payload)]}
        case UPDATE_CATEGORY:
            const newCat = state.categories
            let foundIndex = newCat.findIndex(x => x._id == action.payload._id);

            newCat[foundIndex] = action.payload
            return {
                ...state,
                categories: newCat
            }

        case UPDATE_CURRENT_CATEGORY:
            return {...state, currentCategory: action.payload}

        default:
            return state
    }
}

export const setCategories = (categories) => ({type: SET_CATEGORIES, payload: categories})
export const addCategory = (category) => ({type: ADD_CATEGORY, payload: category})
export const deleteCategory = (id) => ({type: DELETE_CATEGORY, payload: id})
export const updateCategory = (data) => ({type: UPDATE_CATEGORY, payload: data})
export const updateCurrentCategory = (category) => ({type: UPDATE_CURRENT_CATEGORY, payload: category})
