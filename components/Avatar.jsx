import React from "react";

const Avatar = ({ url, className }) => {
  return (
    <img
      src={url}
      className={`h-10 inline-block rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      alt="image"
    />
  );
};

export default Avatar;
