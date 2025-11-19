"use client";

import Image from "next/image";
import { assets } from "@/Assets/assets";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-5">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src={assets.logo}
            alt="Logo"
            width={150}
            height={50}
            className="w-[130px] sm:w-[150px] object-contain"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {/* <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition">
            Login
          </button> */}

          <button className="flex items-center gap-2 px-5 py-2 bg-black text-white rounded-full hover:opacity-80 transition">
            Get Started
            <Image src={assets.arrow} alt="arrow" width={16} height={16} />
          </button>
        </div>

      </div>
    </nav>
  );
}
