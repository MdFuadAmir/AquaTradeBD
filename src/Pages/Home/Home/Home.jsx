import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import LatestNews from "../LatestNews/LatestNews";
import Products from "../Products/Products";


const Home = () => {
    return (
        <div>
            <Banner/>
            <LatestNews/>
            <Category/>
            <Products/>
        </div>
    );
};

export default Home;