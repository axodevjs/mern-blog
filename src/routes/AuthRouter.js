import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const AuthRouter = ({children}) => {
    const isAuth = useSelector(state => state.user.isAuth)

    return isAuth ? children : <Navigate to={"/admin/login"}/>
}

export default AuthRouter