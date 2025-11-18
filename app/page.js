'use client';    // This is a client component(csr)

import BlogItem from "@/Components/BlogItem";
import Header from "@/Components/Header";


export default function Home() {
  return (
    <>
    <Header />
    <BlogItem />
    </>
  );
}
