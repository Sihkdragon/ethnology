import React from "react";

const FeatureButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-orange-light/75 border-2 my-shadow-sec border-white font-secondary text-white text-xs md:text-lg h-14 text-center rounded-md hover:bg-orange-light  duration-500"
    >
      {children}
    </button>
  );
};

export default FeatureButton;
