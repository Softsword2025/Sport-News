import React, { useState } from "react";

interface PlanCardProps {
  src: string;
  title: string;
  price: string;
  features: string[];
  imgSize?: string; 
}

const PlanCard: React.FC<PlanCardProps> = ({ src, title, price, features, imgSize }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`
        bg-gray-700 rounded-xl p-6 flex flex-col items-center justify-evenly w-[20vw] min-w-[250px] mx-4
        transition-all duration-300 ease-in-out
        ${hover ? "translate-y-[-12px] shadow-[0_10px_20px_rgba(0,0,0,0.2)]" : "translate-y-0 shadow-[0_4px_10px_rgba(0,0,0,0.3)]"}
      `}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      >
      {/* Image */}
      <img
        src={src}
        alt={title}
        className={`mb-4 ${imgSize}`}
      />

      {/* Title */}
      <p className="text-white text-xl font-semibold mb-4 text-center">{title}</p>

      {/* Features */}
      <div className="flex flex-col w-full mb-6 gap-2 items-center">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-300">
            <span className="text-green-400">✓</span>
            <span className="flex-1">{feature}</span>
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="w-full flex justify-center mb-4">
        <span className="text-white text-2xl font-bold">{price}</span>
      </div>

      {/* Button */}
      <div className="w-full flex justify-center">
        <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow transition">
          Buy Now!
        </button>
      </div>
    </div>
  )
}

export default PlanCard