import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminContent from "../AdminContent";

const AdminLayout = ({ children }) => {
  return (
    <div className="App-admin">
      <AdminSidebar />
      <AdminContent>{children}</AdminContent>
    </div>
  );
};

export default AdminLayout;
