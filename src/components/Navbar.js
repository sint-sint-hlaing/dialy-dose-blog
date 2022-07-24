import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="backdrop-blur-md bg-white/30 h-14 md:h-20 flex w-screen  items-center fixed">
      <div className=" flex-1  py-7 text-xl  md:text-4xl ml-10 items-start font-logo text-yellow-400 md:p-10">
        <Link to="/">Daily Dose</Link>
      </div>

      <Link to="/blog">
        <button className=" flex-1 inline-block justify-center bg-yellow-400 text-md py-2 px-6 md:px-10 md:py-4 mr-10 md:mr-16 rounded-md md:text-2xl hover:bg-yellow-300 ">
          Blog
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
