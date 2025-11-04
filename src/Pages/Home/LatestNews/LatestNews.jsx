import Marquee from "react-fast-marquee";
const LatestNews = () => {
    return (
        <div className="flex items-center">
            <h2 className="flex-1 bg-teal-600 px-4 py-3 text-white">News:</h2>
            <Marquee speed={100} pauseOnHover className="bg-teal-100 py-3 rounded-r text-gray-700 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore exercitationem accusamus modi totam debitis suscipit voluptas. Quo, quidem voluptas?
            </Marquee>
        </div>
    );
};

export default LatestNews;