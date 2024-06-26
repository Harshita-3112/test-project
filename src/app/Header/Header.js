import React from "react";
import Link from "next/link";

const Header = (props) => {
  return (
    <div className="h-16 px-5 text-white bg-blue-500  justify-between flex items- center">
      <h2>Logo</h2>
      <div className="flex gap-8   justify-center ">
        <h4>About</h4>
        <h4>Career</h4>
        <h4>Blog</h4>
        <h4>{props.edit}</h4>
      </div>
    </div>
  );
};

export default Header;
