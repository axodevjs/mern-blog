import Sidebar from "../Molecules/Sidebar/Sidebar";
import Content from "../Molecules/Content";
import Header from "../Molecules/Header";
import styled from 'styled-components'
import {device} from "../../helpers/styled_consts";

const MainLayout = ({children}) => {
    const StyledLayout = styled.div`
      display: grid;
      grid-template-areas: "sidebar content";
      grid-auto-columns: 350px auto;
      grid-template-rows: 110px auto;
      
      @media ${device.tablet} {
        grid-template-columns: 300px auto;
        grid-template-areas:
            "header header"
            "content content";
      }
    `;

    return (
        <StyledLayout>
            <Sidebar/>
            <Header/>
            <Content>{children}</Content>
        </StyledLayout>
    );
};

export default MainLayout;
