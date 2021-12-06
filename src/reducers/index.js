import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import appReducer from "./appReducer";
import categoryReducer from "./categoryReducer";


const rootReducer = combineReducers({
    user: userReducer,
    app: appReducer,
    category: categoryReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))