import AdminLayout from "../../../components/Admin/Layouts/AdminLayout";
import { Heading, Text } from "../../../components/Atoms/Typography";
import * as S from "../StyledAdmin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../../actions/category";
import { hideModal, showModal } from "../../../reducers/modalReducer";
import Modal from "../../../components/Admin/Modals/Modal/Modal";
import AddCategory from "../../../components/Admin/Modals/AddCategory";
import Category from "./Category";
import { setModal } from "../../../reducers/modalReducer";

const Categories = () => {
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.app.loader);
  const categories = useSelector((state) => state.category.categories);

  const modalShow = useSelector((state) => state.modal.show);
  const titleModal = useSelector((state) => state.modal.title);
  const componentModal = useSelector((state) => state.modal.component);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  if (loader) {
    return <div>loading</div>;
  }

  const AddHandler = () => {
    dispatch(setModal("Add category", <AddCategory />));
    dispatch(showModal());
  };

  return (
    <AdminLayout>
      <Modal
        showModal={modalShow}
        handleClose={() => dispatch(hideModal())}
        title={titleModal}
      >
        {componentModal}
      </Modal>
      <S.Header>
        <Heading level={2}>Categories</Heading>
        <Text
          onClick={AddHandler}
          cursor={"pointer"}
          fontSize={"18px"}
          fontWeight={"bold"}
        >
          + Add new
        </Text>
      </S.Header>
      <S.Body>
        {categories.map((category) => (
          <Category key={category._id} category={category} />
        ))}
      </S.Body>
    </AdminLayout>
  );
};

export default Categories;
