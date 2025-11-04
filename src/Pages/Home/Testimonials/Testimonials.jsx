import { FaStar } from "react-icons/fa";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";


const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Rahim Uddin",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      comment: "Excellent service! Got healthy ornamental fish and quick delivery.",
    },
    {
      id: 2,
      name: "Ayesha Khatun",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
      comment: "Great variety of fish and very helpful support team.",
    },
    {
      id: 3,
      name: "Sabbir Hossain",
      photo: "https://randomuser.me/api/portraits/men/56.jpg",
      rating: 5,
      comment: "I love the eco-friendly approach of the sellers. Highly recommended!",
    },
  ];

  return (
    <section className="py-16 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title={'What Our Customers Say'}/>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-teal-100 p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300">
              <img
                src={review.photo}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
              <div className="flex justify-center mb-2">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400 mx-0.5" />
                ))}
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
