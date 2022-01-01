import * as S from "./StyledPost";
import {Link, useParams} from "react-router-dom";
import { Text } from "../../components/Atoms/Typography";
import MainLayout from "../../components/Layouts/MainLayout";
import {useEffect} from "react";
import {getOnePost, getPosts} from "../../actions/post";
import {useDispatch, useSelector} from "react-redux";

function Post() {
  const dispatch = useDispatch()
  const loader = useSelector((state) => state.app.loader);
  const post = useSelector((state) => state.posts.post);
  let params = useParams();

  useEffect(() => {
    dispatch(getOnePost(params.postId));
  }, []);

  if (loader) {
    return <div>loading</div>;
  }

  return (
    <MainLayout>
      <S.StyledPost>
        <Link to={"/"}>
          <Text fontSize={"18px"} align={"center"}>
            🏠 Back to homepage
          </Text>
        </Link>
        <S.TitleWrapper>
          <Text
            fontSize={"36px"}
            fontWeight={"bold"}
            color={"white"}
            padding={"0 15px"}
            background={"#473BF0"}
          >
            {post.title}
          </Text>
        </S.TitleWrapper>
        {/*<Text margin={"29px 0 0 0"} color={"#818181"} fontSize={"18px"}>*/}
        {/*  Published Jul 24 2019*/}
        {/*</Text>*/}
        <div className="article">
          {post.content}
        </div>
      </S.StyledPost>
    </MainLayout>
  );
}

export default Post;
