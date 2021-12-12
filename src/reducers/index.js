import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import appReducer from "./appReducer";
import categoryReducer from "./categoryReducer";
import {modalReducer} from "./modalReducer";


const rootReducer = combineReducers({
    user: userReducer,
    app: appReducer,
    modal: modalReducer,
    category: categoryReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))