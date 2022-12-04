import React from "react";

export default function Avatar({ url, className }) {
  return (
    <img
      className={`h-10 inline-block rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      loading="lazy"
      src={url}
      alt="profilepic"
    />
  );
}
