import * as S from './StyledPosts';
import ShortPost from "./ShortPost/ShortPost";
import MainLayout from "../../components/Layouts/MainLayout";

const Posts = () => {
    return (
        <MainLayout>
            <S.Posts>
                <ShortPost/>
                <ShortPost/>
                <ShortPost/>
                <ShortPost/>
                <ShortPost/>
                <ShortPost/>
                <ShortPost/>
                <ShortPost/>
                <ShortPost/>
            </S.Posts>
        </MainLayout>
    );
}

export default Posts;