"use client";

import { assets, blog_data } from "@/Assets/assets";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";  // <-- correct import
import Image from "next/image";
import Footer from "@/components/Footer"; // if you have one

export default function BlogPage({ params }) {
  const [data, setData] = useState(null);

  const fetchBlogData = (id) => {
    const blog = blog_data.find((b) => b.id === Number(id));
    setData(blog || null);
  };

  useEffect(() => {
    fetchBlogData(params.id);
  }, [params.id]);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <Navbar />   {/* <-- THIS IS CORRECT */}

      <div className="text-center my-10">
        <h1>{data.title}</h1>

        <Image
          src={data.author_img}
          alt="author"
          width={50}
          height={50}
          className="rounded-full mx-auto my-2"
        />

        <p>By {data.author} | {data.date}</p>
      </div>

      <div className="px-5 md:px-20 lg:px-40 mb-10">
        <Image
          src={data.image}
          alt="blog image"
          width={800}
          height={400}
          className="w-full h-auto rounded-lg mb-5"
        />

        <h2>Introduction</h2>
        <p>{data.description}</p>

        <h3 className="my-5">Conclusion</h3>
        <p>{data.conclusion}</p>
      </div>

      <Footer />
    </>
  );
}
