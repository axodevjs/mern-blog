import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts/Posts";
import AdminPosts from "../pages/Admin/AdminPosts/AdminPosts";
import Post from "../pages/Post/Post";
import Registration from "../pages/Admin/Auth/Registration";
import Login from "../pages/Admin/Auth/Login";
import {useEffect} from "react";
import {auth} from "../actions/user";
import {useDispatch} from "react-redux";
import AuthRouter from "./AuthRouter";

const AppRoutes = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])

    return (
        <Router>
                <Routes>
                    <Route exact path={"/"} element={<Posts/>}/>
                    <Route path={"/post"} element={<Post/>}/>)

                    <Route path={"/admin/login"} element={<Login/>}/>
                    <Route path={"/admin/registration"} element={<Registration/>}/>

                    <Route path={"/admin/posts"} element={
                        <AuthRouter>
                            <AdminPosts/>
                        </AuthRouter>
                    }
                    />

                    <Route path={"*"} element={<h1>404</h1>}/>
                </Routes>
            }
        </Router>
    );






    // const isAuth = useSelector(state => state.user.isAuth)
    // const dispatch = useDispatch()
    //
    // useEffect(() => {
    //     dispatch(auth())
    // }, [])
    //
    // return (
    //     <Router>
    //         {!isAuth ?
    //             <routes>
    //                 <Route exact path={"/"} element={<AdminPosts/>}/>
    //                 <Route path={"/post"} element={<Post/>}/>)
    //
    //                 <Route path={"/admin/login"} element={<Login/>}/>
    //                 <Route path={"/admin/registration"} element={<Registration/>}/>
    //
    //                 <Route path={"*"} element={<h1>404</h1>}/>
    //             </routes>
    //             :
    //             <>
    //                 <routes>
    //                     <Route exact path={"/"} element={<AdminPosts/>}/>
    //                     <Route path={"/post"} element={<Post/>}/>)
    //
    //                     <Route path={"/admin/posts"} element={<AdminPosts/>}/>
    //
    //                     <Route path={"*"} element={<h1>404</h1>}/>
    //                 </routes>
    //             </>
    //         }
    //     </Router>
    // );
}

export default AppRoutes;