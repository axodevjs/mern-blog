import * as S from "./StyledSidebar";
import {Text} from "../../Atoms/Typography";
import {CategoryBtn} from "../../Atoms/CategoryBtn";

const Sidebar = () => {
    return (
        <S.StyledSidebar>
            <Text margin={"42px 0 0 0"} fontSize={"24px"} fontWeight={"700"}>AxoDev Blog</Text>
            <S.Categories>
                <CategoryBtn color={"#61DAFB"} background={"#222222"} align={"self-start"}>React</CategoryBtn>
                <CategoryBtn color={"#000000"} background={"#F7E018"} align={"self-start"}>JavaScript</CategoryBtn>
                <CategoryBtn color={"#FFFFFF"} background={"#FF3333"} align={"self-start"}>Express</CategoryBtn>
                <CategoryBtn color={"#FFFFFF"} background={"#3354FF"} align={"self-start"}>Next</CategoryBtn>
                <CategoryBtn color={"#FFFFFF"} background={"#0FB229"} align={"self-start"}>MongoDB</CategoryBtn>
            </S.Categories>
        </S.StyledSidebar>
    )
}

export default Sidebar;