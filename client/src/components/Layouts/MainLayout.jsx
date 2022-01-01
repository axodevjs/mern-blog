import Sidebar from "../Molecules/Sidebar/Sidebar";
import Header from "../Molecules/Header";
import Content from "../Molecules/Content";

const MainLayout = ({ children }) => {
  return (
    <div className="App">
      <Sidebar />
      {/*<Header />*/}
      <Content>{children}</Content>
    </div>
  );
};

export default MainLayout;
