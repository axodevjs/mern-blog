const SET_CATEGORIES = "SET_CATEGORIES"

const defaultState = {
    categories: []
}

export default function categoryReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CATEGORIES: return {...state, categories: action.payload}
        default:
            return state
    }
}

export const setCategories = (categories) => ({type: SET_CATEGORIES, payload: categories})