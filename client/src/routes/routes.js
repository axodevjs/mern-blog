import { Navigate } from "react-router-dom";
import Posts from "../pages/Posts/Posts";
import Post from "../pages/Post/Post";
import AdminPosts from "../pages/Admin/AdminPosts/AdminPosts";
import Login from "../pages/Admin/Auth/Login";
import Page404 from "../components/Page404";
import Registration from "../pages/Admin/Auth/Registration";
import Categories from "../pages/Admin/Categories/Categories";

const routes = (isLoggedIn) => [
  { path: "/", element: <Navigate to={"/posts"} /> },
  { path: "/posts", element: <Posts /> },
  { path: "/posts/categories/:category_name", element: <Posts /> },
  { path: "/posts/:postId", element: <Post /> },
  { path: "*", element: <Page404 /> },

  {
    path: "/admin",
    element: isLoggedIn ? (
      <Navigate to="/admin/posts" />
    ) : (
      <Navigate to="/admin/login" />
    ),
  },

  {
    path: "/admin/login",
    element: isLoggedIn ? <Navigate to="/admin/posts" /> : <Login />,
  },
  {
    path: "/admin/registration",
    element: isLoggedIn ? <Navigate to="/admin/posts" /> : <Registration />,
  },

  {
    path: "/admin/categories",
    element: isLoggedIn ? <Categories /> : <Navigate to="/admin/login" />,
  },
  {
    path: "/admin/posts",
    element: isLoggedIn ? <AdminPosts /> : <Navigate to="/admin/login" />,
  },
];

export default routes;
