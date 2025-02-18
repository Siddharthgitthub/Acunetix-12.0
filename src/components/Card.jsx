import React from "react";

const Card = ({ image, title, description, buttonText }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-transparent p-0.5 transition-all duration-300">
      {/* Transparent Background */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      {/* Card Content */}
      <div className="relative rounded-lg p-6 h-full flex flex-col">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-110"
        />

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

        {/* Description */}
        <p className="text-gray-400 mb-4 flex-grow">{description}</p>

        {/* Centered Button */}
        <div className="flex justify-center">
          <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-300">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;