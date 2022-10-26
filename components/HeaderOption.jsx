import React from "react";

const HeaderOption = ({ Icon, title, selected }) => {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 cursor-pointer ${
        selected && "border-blue-500"
      }`}
    >
      <Icon className="h-4 " />
      <p className="hidden md:inline-flex">{title}</p>
    </div>
  );
};

export default HeaderOption;
