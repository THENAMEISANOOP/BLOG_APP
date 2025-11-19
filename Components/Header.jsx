import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";
import Navbar from "@/components/Navbar";


const Header = () => {
  return (
    <header className="py-6 px-5 md:px-12 lg:px-28">
      <Navbar />
      {/* Top Bar */}
      {/* <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          alt="Logo"
          width={180}
          height={50}
          className="w-[130px] sm:w-auto"
        />

        <button className="flex items-center gap-2 font-medium py-2 px-5 sm:px-7 border border-black rounded-full hover:bg-black hover:text-white transition">
          Get Started
          <Image src={assets.arrow} alt="Arrow" width={18} height={18} />
        </button>
      </div> */}

      {/* Hero Section */}
      <div className="text-center mt-12">
        <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight">
          Latest Blog
        </h1>

        <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Email Subscription */}
        <form className="flex flex-col sm:flex-row justify-center mt-6 gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md py-2 px-4 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-black/70"
          />

          <button
            type="submit"
            className="py-2 px-5 bg-black text-white font-medium rounded-md hover:opacity-80 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
