import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row mb-14 pt-20">
      <div className="flex-1 pl-20 mt-32">
        <h1 className="pt-7 text-5xl text-bold">Welcome to Daily Dose</h1>
        <p className="pt-7 text-2xl font-normal">
          The best social blog in the world
        </p>
        <p className="pt-7 text-xl">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not
          simply random text.
        </p>
        <Link to="/blog">
          <button className="inline-flex items-center justify-center bg-yellow-400 w-xl h-12 p-7 mt-7 mr-10 rounded-md text-xl hover:bg-yellow-300 ">
            Get Started
          </button>
        </Link>
      </div>

      <div className="flex-1 mt-28">
        <img
          src="https://img.freepik.com/free-vector/blogging-concept-illustration_114360-4480.jpg?size=626&ext=jpg&ga=GA1.2.507420265.1658291633"
          className=""
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
