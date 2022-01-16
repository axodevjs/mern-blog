import * as S from "./StyledPosts";
import ShortPost from "./ShortPost/ShortPost";
import MainLayout from "../../components/Layouts/MainLayout";
import { useEffect } from "react";
import { getPosts, getPostsbyCategory } from "../../redux/actions/post";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Heading } from "components/Atoms/Typography";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const categories = useSelector((state) => state.category.categories);
  const loader = useSelector((state) => state.app.loader);
  const params = useParams();

  useEffect(() => {
    if (params.category_name === undefined) {
      dispatch(getPosts());
    } else {
      dispatch(getPostsbyCategory(params.category_name))
    }
  }, []);

  if (loader) {
    return <div>loading</div>;
  }

  return (
    <MainLayout>
      <S.Posts>
        { params.category_name && (
          <Heading level={2} padding={"0 0 50px 0"}>Posts in the {params.category_name} category</Heading>
        )}

        {posts.map((post) => {
          const category = categories.filter(
            (category) => category._id === post.category_id
          );

          if (post.content.length >= 255) {
            post.content = post.content.slice(0, 255);
            post.content += "...";
          }

          return (
            <ShortPost key={post._id} category={category[0]} post={post} />
          );
        })}
      </S.Posts>
    </MainLayout>
  );
};

export default Posts;
