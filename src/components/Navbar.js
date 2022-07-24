import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex w-screen h-15 items-center fixed">
      <div className=" flex-1 p-10 text-4xl ml-10 items-start font-logo text-yellow-400">
        <Link to="/">Daily Dose</Link>
      </div>

      <Link to="/blog">
        <button className=" flex-1 inline-block justify-center  bg-yellow-400 w-40 py-4 mr-10 rounded-md text-2xl hover:bg-yellow-300 ">
          Blog
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
