import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import LatestNews from "../LatestNews/LatestNews";
// import Products from "../../Products/Products";
import WhyChooseUs from "../WhyChoosUs/WhyChoosUs";
import Testimonials from "../Testimonials/Testimonials";
import Loading from "../../../Components/Loading/Loading";
import ErrorPage from "../../../Components/ErrorPage/ErrorPage";



const Home = () => {
    return (
        <div>
            <Banner/>
            <LatestNews/>
            <Category/>
            <WhyChooseUs/>
            <Testimonials/>
            <Loading/>
            <ErrorPage/>
            
            
        </div>
    );
};

export default Home;