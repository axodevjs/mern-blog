import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminContent from "../AdminContent";
import styled from 'styled-components'
import {device} from "../../../helpers/styled_consts";
import AdminHeader from "../AdminHeader";

const AdminLayout = ({children}) => {
    const StyledLayout = styled.div`
      display: grid;
      grid-template-areas: "sidebar content";
      grid-template-columns: 300px auto;

      @media ${device.tablet} {
        grid-template-columns: 300px auto;
        grid-template-areas:
            "header header"
            "content content";
      }
    `

    return (
        <StyledLayout>
            <AdminSidebar/>
            <AdminHeader/>
            <AdminContent>{children}</AdminContent>
        </StyledLayout>
    );
};

export default AdminLayout;
