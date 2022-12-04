import Image from "next/image";
import React from "react";

const Avatar = ({ url, className }) => {
  return (
    <Image
      src={url}
      className={` inline-block rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      alt="image"
      width={40}
      height={40}
    />
  );
};

export default Avatar;
