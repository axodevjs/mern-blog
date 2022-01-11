import styled from "styled-components";
import Input from "../Atoms/Input";
import Grid from "../Atoms/Grid";
import {useDispatch} from "react-redux";
import {showOverlay, showSidebar} from "../../redux/reducers/appReducer";
import {device} from "../../helpers/styled_consts";

const StyledHeader = styled.header`
  padding: 20px 40px 0 40px;
  align-content: center;
  grid-area: header;
  
  @media ${device.tablet} {
    display: grid !important;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
`;

const AdminHeader = () => {
    const dispatch = useDispatch();

    const menuHandler = (e) => {
        e.preventDefault();

        dispatch(showOverlay())
        dispatch(showSidebar())
    }

    return (
        <StyledHeader className={"header"}>
            <Wrapper>
                <Grid id={"menu_btn"} onClick={(e) => menuHandler(e)} alignContent={"center"}>
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M25.0625 13.75H4.9375C4.28166 13.75 3.75 14.2817 3.75 14.9375V15.0625C3.75 15.7183 4.28166 16.25 4.9375 16.25H25.0625C25.7183 16.25 26.25 15.7183 26.25 15.0625V14.9375C26.25 14.2817 25.7183 13.75 25.0625 13.75Z"
                            fill="#acadbc"
                        />
                        <path
                            d="M25.0625 20H4.9375C4.28166 20 3.75 20.5317 3.75 21.1875V21.3125C3.75 21.9683 4.28166 22.5 4.9375 22.5H25.0625C25.7183 22.5 26.25 21.9683 26.25 21.3125V21.1875C26.25 20.5317 25.7183 20 25.0625 20Z"
                            fill="#acadbc"
                        />
                        <path
                            d="M25.0625 7.5H4.9375C4.28166 7.5 3.75 8.03166 3.75 8.6875V8.8125C3.75 9.46834 4.28166 10 4.9375 10H25.0625C25.7183 10 26.25 9.46834 26.25 8.8125V8.6875C26.25 8.03166 25.7183 7.5 25.0625 7.5Z"
                            fill="#acadbc"
                        />
                    </svg>
                </Grid>
                <div/>
            </Wrapper>

        </StyledHeader>
    );
};

export default AdminHeader;
