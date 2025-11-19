import Navbar from "@/components/Navbar";
import { assets } from "@/Assets/assets";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <Navbar />

      <header className="py-6 px-5 md:px-12 lg:px-28">
        <div className="text-center mt-12">
          <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight">
            Latest Blog
          </h1>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <form className="flex flex-col sm:flex-row justify-center mt-6 gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md py-2 px-4 w-full sm:w-72"
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
    </>
  );
}
