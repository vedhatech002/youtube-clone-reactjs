import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-3 py-0.5 bg-[#e5e5e5] rounded-md font-semibold text-sm">
      {name}
    </button>
  );
};

export default Button;
