import {Text} from "../../Atoms/Typography";
import {CategoryBtn} from "../../Atoms/CategoryBtn";
import {useSelector} from "react-redux";
import styled, {css} from "styled-components";
import {device} from "../../../helpers/styled_consts";

const Sidebar = () => {
    const categories = useSelector((state) => state.category.categories);
    const sidebar_active = useSelector((state) => state.app.sidebar_active);

    const StyledSidebar = styled.div`
      display: grid;
      grid-template-rows: max-content;
      justify-items: center;
      grid-area: sidebar;
      position: sticky;
      top: 0;
      height: 100vh;
      background-color: #212f3f;
      transition: 0.5s;

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

    return (
        <StyledSidebar>
            <Text margin={"42px 0 0 0"} fontSize={"24px"} fontWeight={"700"}>
                AxoDev Blog
            </Text>
            <Categories>
                {categories.map((category) => (
                    <a key={category._id} href={'/posts/categories/' + category.name}>
                      <CategoryBtn background={category.background} color={category.color}>{category.name}</CategoryBtn>
                    </a>
                ))}
            </Categories>
        </StyledSidebar>
    );
};

export default Sidebar;
