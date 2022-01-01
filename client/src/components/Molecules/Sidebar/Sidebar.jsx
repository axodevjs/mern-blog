import * as S from "./StyledSidebar";
import { Text } from "../../Atoms/Typography";
import { CategoryBtn } from "../../Atoms/CategoryBtn";
import {useEffect} from "react";
import {getCategories} from "../../../actions/category";
import {useDispatch, useSelector} from "react-redux";
import Category from "../../../pages/Admin/Categories/Category";

const Sidebar = () => {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.category.categories);

  return (
    <S.StyledSidebar>
      <Text margin={"42px 0 0 0"} fontSize={"24px"} fontWeight={"700"}>
        AxoDev Blog
      </Text>
      <S.Categories>
        {categories.map((category) => (
            <CategoryBtn key={category._id} background={category.background} color={category.color}>{category.name}</CategoryBtn>
        ))}
      </S.Categories>
    </S.StyledSidebar>
  );
};

export default Sidebar;
