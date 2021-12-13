import AdminLayout from "../../../components/Admin/Layouts/AdminLayout";
import * as S from "../StyledAdmin";
import {Heading, Text} from "../../../components/Atoms/Typography";
import ShortPost from "./ShortPost/ShortPost";

const AdminPosts = () => {
    return(
        <AdminLayout>
            <S.Header>
                <Heading level={2}>Posts</Heading>
                <Text cursor={"pointer"} fontSize={"18px"} fontWeight={"bold"}>+ Add new</Text>
            </S.Header>
            <S.Body>
                <ShortPost />
            </S.Body>
        </AdminLayout>
    )
}

export default AdminPosts