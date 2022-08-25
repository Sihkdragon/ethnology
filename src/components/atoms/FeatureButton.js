import React from "react";

const FeatureButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-choc-light border-2 my-shadow-sec border-white font-secondary text-white text-lg h-14 text-center rounded-md hover:bg-pastel-dark hover:text-xl duration-500"
    >
      {children}
    </button>
  );
};

export default FeatureButton;
