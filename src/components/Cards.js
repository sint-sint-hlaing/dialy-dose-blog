import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="flex flex-col items-center text-3xl mt-32  ">My Blogs</h1>
      <div className="m-10 ">
        {data?.map((post, index) => {
          return (
            <div className=" w-screen md:inline-block n md:w-2/4 lg:w-1/3 bg-grey-400 rounded-md shadow-lg p-10">
              <img
                src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.2.507420265.1658291633"
                className="object-fill h-64 w-full "
                alt=""
              />
              <h3 className="text-2xl text-bold text-center pt-10">
                {post.title}
              </h3>
              <p className="p-10">{post.body}</p>
              <div className="flex items-center justify-center">
                <Link to={`/blog/${post.id}`}>
                  <button className="inline-flex items-center justify-center bg-yellow-400 w-xl py-2 px-7 rounded-md text-lg md:hover:bg-yellow-300">
                    View
                  </button>
                </Link>
              </div>
            </div>
          );
        })}

        {/* {data?.map(()=>{
  return(
    <div>Hello</div>
  )
})} */}
      </div>
    </div>
  );
};

export default Cards;
