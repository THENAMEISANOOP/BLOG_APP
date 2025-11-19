import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const BlogItem = ({title,description,category,image}) => {
  const item = blog_data[0];

  if (!item) return null; // Prevent SSR mismatch

  return (
    <div className="max-w-[330px] sm:max-w-[380px] bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-4 cursor-pointer">
      
      <div className="w-full h-48 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt="blog image"
          width={400}
          height={300}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      <div className="mt-4">
        {category && (
          <span className="text-xs bg-black text-white px-2 py-1 rounded-full">
            {category}
          </span>
        )}
        <h2 className="text-lg font-semibold mb-1">{title}</h2>
        <p className="text-gray-600 text-sm line-clamp-3">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-2 mt-4 text-black font-medium hover:opacity-70">
        <span>Read more</span>
        <Image
          src={assets.arrow}
          alt="arrow"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default BlogItem;
