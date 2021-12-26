import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import appReducer from "./appReducer";
import categoryReducer from "./categoryReducer";
import {modalReducer} from "./modalReducer";
import {overWindowReducer} from "./overWindowReducer";
import postReducer from "./postReducer";


const rootReducer = combineReducers({
    user: userReducer,
    app: appReducer,
    modal: modalReducer,
    overWindow: overWindowReducer,
    category: categoryReducer,
    posts: postReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))