import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    return (
        <div>
            <Outlet />
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default MainLayout;