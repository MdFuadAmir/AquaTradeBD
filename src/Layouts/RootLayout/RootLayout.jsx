import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const RootLayout = () => {
    return (
        <div className="bg-slate-100">
            <Navbar/>
            <div className="min-h-[calc(100vh-64px)] max-w-[2520px] mx-auto md:px-10 lg:px-20">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default RootLayout;