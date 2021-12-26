import AdminLayout from "../../../components/Admin/Layouts/AdminLayout";
import * as S from "../StyledAdmin";
import {Heading, Text} from "../../../components/Atoms/Typography";
import ShortPost from "./ShortPost/ShortPost";
import OverWindow from "../../../components/Admin/OverWindows/OverWindow/OverWindow";
import {useDispatch, useSelector} from "react-redux";
import {showWindow, setWindow} from "../../../reducers/overWindowReducer";
import CreatePost from "../../../components/Admin/OverWindows/CreatePost";
import {useEffect} from "react";
import {getPosts} from "../../../actions/post";

const AdminPosts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    const categories = useSelector(state => state.category.categories)
    const loader = useSelector(state => state.app.loader)

    const addPostHandler = () => {
        dispatch(setWindow("Create a post", <CreatePost/>))
        dispatch(showWindow())
    }

    useEffect(() => {
        dispatch(getPosts())
    }, []);

    if (loader) {
        return (
            <div>
                loading
            </div>
        )
    }

    return(
        <AdminLayout>
            <S.Header>
                <Heading level={2}>Posts</Heading>
                <Text cursor={"pointer"} fontSize={"18px"} fontWeight={"bold"} onClick={addPostHandler}>+ Add new</Text>
            </S.Header>
            <S.Body>
                <OverWindow/>

                {posts.map(post => {

                    return(
                        <ShortPost key={post._id} post={post}/>
                    )
                })}
            </S.Body>
        </AdminLayout>
    )
}

export default AdminPosts