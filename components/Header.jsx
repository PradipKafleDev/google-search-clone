import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white ">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex flex-grow px-6 py-3 mr-5 ml-10 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            type="text"
            className="flex-grow w-full focus:outline-none"
            ref={searchInputRef}
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-700 cursor-pointer transition duration-100 hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden md:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden md:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://pbs.twimg.com/profile_images/1548552331825819649/g_ne0ZNp_400x400.jpg"
        />
      </div>

      {/* HeaderOption */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
