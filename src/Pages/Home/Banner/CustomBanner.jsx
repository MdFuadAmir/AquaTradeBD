
const CustomBanner = ({banner}) => {
  const {image,title,subtitle,stock,discount,location,offerDate} = banner; 
  return (
    <div className="relative w-full h-[300px] md:h-[300px] rounded-xl overflow-hidden shadow-lg">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-center items-start px-4 md:px-16 text-white">
        <h2 className="text-xl font-bold">Shop: {title}</h2>
        <p className="opacity-90">
         {subtitle}
        </p>
        <p className="opacity-90">
         Stock: {stock}
        </p>
        <p className="opacity-90">
         Discount: {discount}
        </p>
        <p className="opacity-90">
         Location: {location}
        </p>
        <p className="opacity-90">
         OfferTime : {offerDate}
        </p>
        <button className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg shadow-md transition-all">
          Visit Shop
        </button>
      </div>
    </div>
   
  )
};

export default CustomBanner;