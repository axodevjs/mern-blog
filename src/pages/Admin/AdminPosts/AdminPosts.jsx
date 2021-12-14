import AdminLayout from "../../../components/Admin/Layouts/AdminLayout";
import * as S from "../StyledAdmin";
import {Heading, Text} from "../../../components/Atoms/Typography";
import ShortPost from "./ShortPost/ShortPost";
import OverWindow from "../../../components/Admin/OverWindows/OverWindow/OverWindow";
import {useDispatch} from "react-redux";
import {showWindow, setWindow} from "../../../reducers/overWindowReducer";
import AddCategory from "../../../components/Admin/Modals/AddCategory";
import CreatePost from "../../../components/Admin/OverWindows/CreatePost";

const AdminPosts = () => {
    const dispatch = useDispatch()

    const addPostHandler = () => {
        dispatch(setWindow("Create a post", <CreatePost/>))
        dispatch(showWindow())
    }

    return(
        <AdminLayout>
            <S.Header>
                <Heading level={2}>Posts</Heading>
                <Text cursor={"pointer"} fontSize={"18px"} fontWeight={"bold"} onClick={addPostHandler}>+ Add new</Text>
            </S.Header>
            <S.Body>
                <OverWindow/>
                <ShortPost />
            </S.Body>
        </AdminLayout>
    )
}

export default AdminPosts