import { FaFish, FaUsers, FaLeaf, FaGlobeAsia, FaHeart } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="text-gray-800">
      {/* ========== HERO SECTION ========== */}
      <section className="relative overflow-hidden h-[300px] md:h-[400px] flex items-center justify-center">
        <img
          src=""
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-teal-700/40"></div>
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white tracking-wide text-center">
          About <span className="text-amber-300">Aqua World</span>
        </h1>
      </section>
      
      {/* ========== OUR STORY ========== */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-teal-600">Our Story</h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Founded in 2024, <span className="font-semibold text-teal-600">AquaHaven</span> began
          as a small community of aquarium enthusiasts. Today, it’s a full-fledged platform that
          connects fish lovers, sellers, and breeders from all over Bangladesh. We believe in
          creating a sustainable ornamental fish culture with care, respect, and love for aquatic life.
        </p>
      </section>

      {/* ========== MISSION & VISION ========== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-teal-600 flex items-center gap-2">
              <FaLeaf className="text-teal-500" /> Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To promote ethical breeding and trading of ornamental fish, while encouraging
              awareness about aquatic biodiversity. We aim to empower local breeders and
              hobbyists to reach global markets.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-teal-600 flex items-center gap-2">
              <FaGlobeAsia className="text-teal-500" /> Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A sustainable and transparent digital marketplace where people can explore,
              learn, and celebrate aquatic beauty together — creating a positive environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* ========== OUR VALUES ========== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-10 text-teal-600">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all">
              <FaHeart className="text-4xl text-teal-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Passion</h3>
              <p className="text-gray-600">
                We’re passionate about aquatic life and the joy it brings to people.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all">
              <FaUsers className="text-4xl text-teal-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Community</h3>
              <p className="text-gray-600">
                Building a strong community of breeders, sellers, and hobbyists.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all">
              <FaLeaf className="text-4xl text-teal-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Supporting eco-friendly practices and sustainable fish breeding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUR TEAM ========== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10 text-teal-600">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Md. Fuad",
                role: "Founder & CEO",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Nadia Rahman",
                role: "Marketing Head",
                img: "https://randomuser.me/api/portraits/women/68.jpg",
              },
              {
                name: "Sabbir Ahmed",
                role: "Lead Developer",
                img: "https://randomuser.me/api/portraits/men/55.jpg",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-xl transition-all"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-16 bg-teal-600 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Our Community</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Be part of Bangladesh’s fastest-growing ornamental fish marketplace and experience
          a world full of color and creativity.
        </p>
        <button className="bg-white text-teal-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition-all">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
