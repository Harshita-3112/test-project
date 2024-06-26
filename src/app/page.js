"use client";
import React, { useState } from "react";
import Header from "./Header/Header";
import Link from "next/link";

const page = () => {
  const [user, setUser] = useState("Sarthak");
  const [editor, setEditor] = useState("Ayush");

  return (
    <div className="bg-red-500">
      <h1>This is Home Page</h1>
      <Link href="/About">About</Link>
      <Link href="/Products">Products</Link>
      <Link href="/Courses">Courses</Link>
    </div>
  );
  {
  }
};

export default page;
