import "./App.css";
import { auth } from "./actions/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import routes from "./routes/routes";
import { useRoutes } from "react-router-dom";
import { getCategories } from "./actions/category";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const routing = useRoutes(routes(isAuth));

  useEffect(() => {
    dispatch(auth());
    dispatch(getCategories());
  }, []);
  return routing;
}

export default App;
