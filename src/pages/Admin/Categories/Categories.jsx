import AdminLayout from "../../../components/Admin/Layouts/AdminLayout";
import {Heading, Text} from "../../../components/Atoms/Typography";
import * as S from './Styled';
import {CategoryBtn} from "../../../components/Atoms/CategoryBtn";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCategories} from "../../../actions/category";
import edit from '../../../assets/images/edit.svg';
import trash from '../../../assets/images/trash.svg';
import EditCategory from "../../../components/Admin/Modals/EditCategory";

const Categories = () => {
    const dispatch = useDispatch()

    const loader = useSelector(state => state.app.loader)
    const categories = useSelector(state => state.category.categories)

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    if(loader) {
        return (
            <div>
                loading
            </div>
        )
    }

    return(
        <AdminLayout>
            <S.HeaderCategories>
                <Heading level={2}>Categories</Heading>
                <Text cursor={"pointer"} fontSize={"18px"} fontWeight={"bold"}>+ Add new</Text>
            </S.HeaderCategories>
            <S.BodyCategories>
                {categories.map(file => (
                    <S.WrapperCategory key={file._id}>
                        <CategoryBtn style={{"display": "inline-grid", "justify-self": "start"}} color={file.color} background={file.background}>{file.name}</CategoryBtn>
                        <S.Actions>
                            <S.Action background={"#3354FF"}>
                                <img src={edit} alt=""/>
                            </S.Action>
                            <S.Action background={"#FF3333"}>
                                <img src={trash} alt=""/>
                            </S.Action>
                        </S.Actions>
                    </S.WrapperCategory>
                ))}
            </S.BodyCategories>
        </AdminLayout>
    )
}

export default Categories;