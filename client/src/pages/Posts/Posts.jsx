import * as S from "./StyledPosts";
import ShortPost from "./ShortPost/ShortPost";
import MainLayout from "../../components/Layouts/MainLayout";
import {useEffect} from "react";
import {getPosts} from "../../actions/post";
import {useDispatch, useSelector} from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const categories = useSelector((state) => state.category.categories);
  const loader = useSelector((state) => state.app.loader);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (loader) {
    return <div>loading</div>;
  }

  return (
    <MainLayout>
      <S.Posts>
        {posts.map(post => {
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
