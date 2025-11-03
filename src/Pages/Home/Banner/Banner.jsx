import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CustomBanner from "./CustomBanner";


const banners = [
  {
    "id": "fish_001",
    "title": "Guppy Fish",
    "subtitle": "Colorful and easy to care freshwater fish",
    "image": "https://i.ibb.co/ZzR9B0y/guppy-fish.jpg",
    "stock": 120,
    "discount": 10,
    "location": "Dhaka, Bangladesh",
    "offerDate": "10-12,2025"
  },
  {
    "id": "fish_002",
    "title": "Goldfish",
    "subtitle": "Popular ornamental fish for aquariums",
    "image": "https://i.ibb.co/qkPpKzQ/goldfish.jpg",
    "stock": 85,
    "discount": 15,
    "location": "Chattogram, Bangladesh",
    "offerDate": "10-12,2025"
  },
  {
    "id": "fish_003",
    "title": "Betta Fish",
    "subtitle": "Vibrant color and elegant tail patterns",
    "image": "https://i.ibb.co/Q8snwFN/betta-fish.jpg",
    "stock": 60,
    "discount": 20,
    "location": "Sylhet, Bangladesh",
    "offerDate": "10-12,2025"
  }
]

const Banner = () => {
    
    return (
        <div className="mt-4">
            <Carousel infiniteLoop>
                {
                    banners.map(banner => <CustomBanner key={banner.id} banner={banner}/>)
                }
            </Carousel>
        </div>
    );
};

export default Banner;