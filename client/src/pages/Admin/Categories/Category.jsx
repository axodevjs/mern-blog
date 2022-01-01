import { CategoryBtn } from "../../../components/Atoms/CategoryBtn";
import * as S from "./Styled";
import { setModal, showModal } from "../../../reducers/modalReducer";
import edit from "../../../assets/images/edit.svg";
import trash from "../../../assets/images/trash.svg";
import { useDispatch, useSelector } from "react-redux";
import { delCategory } from "../../../actions/category";
import EditCategory from "../../../components/Admin/Modals/EditCategory";
import { updateCurrentCategory } from "../../../reducers/categoryReducer";

const Category = (props) => {
  const dispatch = useDispatch();

  const EditHandler = () => {
    dispatch(updateCurrentCategory(props.category));
    dispatch(
      setModal("Edit category", <EditCategory _id={props.category._id} />)
    );
    dispatch(showModal());
  };

  return (
    <S.WrapperCategory id={props.category._id}>
      <CategoryBtn
        style={{ display: "inline-grid", justifySelf: "start" }}
        color={props.category.color}
        background={props.category.background}
      >
        {props.category.name}
      </CategoryBtn>
      <S.Actions>
        <S.Action background={"#3354FF"}>
          <img onClick={EditHandler} src={edit} alt="" />
        </S.Action>
        <S.Action
          onClick={(e) => {
            dispatch(delCategory(props.category._id));
          }}
          background={"#FF3333"}
        >
          <img src={trash} alt="" />
        </S.Action>
      </S.Actions>
    </S.WrapperCategory>
  );
};

export default Category;
