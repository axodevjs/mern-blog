import styled, {css} from "styled-components";
import {device, size} from "../../helpers/styled_consts";
import {useDispatch, useSelector} from "react-redux";
import {hideOverlay, hideSidebar} from "../../redux/reducers/appReducer";

const StyledContent = styled.div`
  grid-area: content;
  padding: 60px 60px 0px 80px;
  transition: 0.5s;

  @media ${device.tablet} {
    padding: 40px 40px 0px 40px;
  }
`;

const Overlay = styled.div`
  width: 100%;
  display: none;
  transition: 0.5s;

  height: 100vh;
  opacity: 0.7;
  position: fixed;

  @media (min-width: ${size.tablet}) {
    display: none !important;
  }
  
  ${(props) =>
          props.active &&
          css`
        background-color: #000;
        display: flex !important;
    `}
`;

const Content = ({children}, props) => {
    const overlay_active = useSelector((state) => state.app.overlay_active);
    const dispatch = useDispatch();

    const overlayClickHandler = () => {
        dispatch(hideOverlay())
        dispatch(hideSidebar())
    }

    return (
        <>
            <Overlay active={overlay_active} onClick={overlayClickHandler}/>
            <StyledContent {...props}>{children}</StyledContent>
        </>
    );
};

export default Content;
