import {Text} from "../../Atoms/Typography";
import {useDispatch, useSelector} from "react-redux";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {logout} from "../../../redux/reducers/userReducer";
import styled, {css} from "styled-components";
import {device} from "../../../helpers/styled_consts";

const AdminSidebar = () => {
    const sidebar_active = useSelector((state) => state.app.sidebar_active);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
        navigate("/");
    };

    const Styled = styled.div`
      display: grid;
      padding: 42px 0;
      grid-template-rows: max-content;
      justify-items: center;
      grid-area: sidebar;
      position: sticky;
      top: 0;
      height: calc(100vh - 84px);
      background-color: #212f3f;

      @media ${device.tablet} {
        position: fixed;
        top: 0;
        z-index: 99;
        transform: translateX(-100%);
        width: 300px;
      }

      @media ${device.mobileS} {
        width: 240px;
        padding: 0 20px 0 20px;
      }

      ${
              (sidebar_active) &&
              css`
                transform: translateX(0) !important;
              `
      }
    `;

    const Categories = styled.div`
      display: grid;
      align-self: start;
      grid-column-gap: 15px;
      grid-row-gap: 8px;
      grid-template-columns: 1fr 125px;
      margin-top: 46px;
    `;

    const NavBar = styled.nav`
      display: flex;
      text-align: center;
      flex-direction: column;
      justify-content: center;
      margin-top: 45px;
      font-size: 20px;
    `;

    const Nav = styled.div`
      margin-top: 37px;
      font-size: 20px;
      color: white;
    `;

    const Wrapper = styled.div`
      display: flex;
      align-items: center;
      flex-direction: column;
    `;

    const Logout = styled.div`
      display: grid;
      align-self: end;
    `;

    return (
        <Styled>
            <Wrapper>
                <Text fontSize={"24px"} fontWeight={"700"}>
                    Admin Panel
                </Text>
                <Text margin={"18px 0 0 0"} fontSize={"18px"}>
                    <Link to={"/"}>🏠 Back to site</Link>
                </Text>

                <NavBar>
                    <Nav>
                        <NavLink
                            to="/admin/posts"
                            className={({isActive}) => (isActive ? "active" : "inactive")}
                        >
                            Posts
                        </NavLink>
                    </Nav>

                    <Nav>
                        <NavLink
                            to="/admin/categories"
                            className={({isActive}) => (isActive ? "active" : "inactive")}
                        >
                            Categories
                        </NavLink>
                    </Nav>
                </NavBar>
            </Wrapper>
            <Logout>
                <Text
                    style={{cursor: "pointer"}}
                    onClick={() => logoutHandler()}
                    fontSize={"18px"}
                >
                    Logout
                </Text>
            </Logout>
        </Styled>
    );
};

export default AdminSidebar;
