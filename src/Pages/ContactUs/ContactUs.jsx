import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import banner from "../../assets/about&contact/img-1.jpg"

const ContactUs = () => {
  return (
    <div className="min-h-screen text-gray-700">
      {/* Hero */}
      <section className="relative overflow-hidden h-[300px] md:h-[400px] flex items-center justify-center">
        <img
          src={banner}
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-teal-700/40"></div>
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white tracking-wide">
          Get in <span className="text-amber-300">Touch</span>
        </h1>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Info */}
        <div>
          <h2 className="text-3xl font-semibold text-teal-700 mb-6">
            We’d Love to Hear From You
          </h2>
          <p className="mb-6">
            Whether you have a question, feedback, or collaboration idea — reach
            out to us. Our support team is always ready to help you make your
            aquarium journey better.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaClock className="text-teal-600 text-xl" />
              <p>Open: Sat–Thu | 9:00 AM – 8:00 PM</p>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt color="red" />
              Kushtia Kataikhana mor, Kushtia, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              +880 1705470131
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              mdfuadamir@gmail.com
            </li>
          </ul>
        </div>

        {/* Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-teal-100">
          <h3 className="text-2xl font-semibold mb-6 text-teal-700">
            Send Us a Message
          </h3>
          <form className="space-y-5">
            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
