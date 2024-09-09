import { Outlet } from "react-router-dom";


const AdminLayout = () => {
    return (
        <div>
            <h2>Navbar in AdminLayout</h2>
            <Outlet/>
        </div>
    );
};

export default AdminLayout;