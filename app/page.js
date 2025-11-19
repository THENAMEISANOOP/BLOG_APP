'use client';    // This is a client component(csr)

import BlogList from "@/Components/BlogList";
import Header from "@/Components/Header";


export default function Home() {
  return (
    <>
    <Header />
    <BlogList/>
    </>
  );
}
