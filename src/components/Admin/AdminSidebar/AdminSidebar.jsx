import * as S from "./Styled";
import {Text} from "../../Atoms/Typography";
import {useDispatch} from "react-redux";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {logout} from "../../../reducers/userReducer";
import Grid from "../../Atoms/Grid";

const AdminSidebar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        dispatch(logout())
        navigate('/')
    }

    return (
        <S.Styled>
            <S.Wrapper>
                <Text fontSize={"24px"} fontWeight={"700"}>Admin Panel</Text>
                <Text margin={"18px 0 0 0"} fontSize={"18px"}><Link to={"/"}>🏠 Back to site</Link></Text>

                <S.NavBar>
                    <S.Nav>
                        <NavLink
                            to="/admin/posts"
                            className={({isActive}) => (isActive ? 'active' : 'inactive')}
                        >
                            Posts
                        </NavLink>
                    </S.Nav>

                    <S.Nav>
                        <NavLink
                            to="/admin/categories"
                            className={({isActive}) => (isActive ? 'active' : 'inactive')}
                        >
                            Categories
                        </NavLink>
                    </S.Nav>
                </S.NavBar>
            </S.Wrapper>
            <S.Logout>
                <Text style={{cursor: "pointer"}} onClick={() => logoutHandler()} fontSize={"18px"}>Logout</Text>
            </S.Logout>
        </S.Styled>
    )
}

export default AdminSidebar;