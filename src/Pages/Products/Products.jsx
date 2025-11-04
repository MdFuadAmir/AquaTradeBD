import { useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const products = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Fish Product ${i + 1}`,
    price: (10 + i).toFixed(2),
    image: `https://picsum.photos/200/200?random=${i + 1}`,
  }));

  // Pagination logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="p-4">
      <SectionTitle
        title={"Our Products"}
        subTitle={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates itaque a impedit cumque saepe, reiciendis omnis repellat quas tenetur ipsam."
        }
      ></SectionTitle>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === i + 1
                  ? "bg-teal-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-teal-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;


