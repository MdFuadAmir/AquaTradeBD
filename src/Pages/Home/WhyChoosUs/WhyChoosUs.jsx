import { FaCheckCircle, FaLeaf, FaHeadset, FaFish } from "react-icons/fa";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaCheckCircle className="text-teal-500 text-4xl mb-4" />,
      title: "Verified Sellers",
      description:
        "All our sellers are verified to ensure safe and authentic fish trading.",
    },
    {
      icon: <FaLeaf className="text-teal-500 text-4xl mb-4" />,
      title: "Eco-friendly Practices",
      description:
        "We promote sustainable breeding and eco-friendly aquarium maintenance.",
    },
    {
      icon: <FaHeadset className="text-teal-500 text-4xl mb-4" />,
      title: "Customer Support",
      description:
        "Our support team is always ready to help you with your queries.",
    },
    {
      icon: <FaFish className="text-teal-500 text-4xl mb-4" />,
      title: "Wide Variety",
      description:
        "Choose from a large collection of ornamental fish for every aquarium.",
    },
  ];

  return (
    <section className="py-16 text-center">
      <div className="px-6">
        <SectionTitle title={'Why Choose Us'}/>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {features.map((feature, idx) => (
            <div
              key={idx}x
              className="bg-teal-100 p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300"
            >
                
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
