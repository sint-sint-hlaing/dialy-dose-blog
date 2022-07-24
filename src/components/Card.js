import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Card = () => {
  let { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setData(res.data);
      });
  }, []);

  function render() {
    if (data) {
      return (
        <div className="w-screen mt-12 md:mt-32 md:w-1/2 m-auto my-5">
          <h1 className="text-xl mb-10 md:text-3xl text-bold text-center mb-5">
            {" "}
            {data.title}
          </h1>
          <img
            className="w-full mb-10"
            src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.2.507420265.1658291633"
            alt="blog"
          />
          <p className="break-normal mb-10 text-md md:text-xl">{data.body}</p>
          <Link to="/blog">
            <button className="bg-yellow-400 px-8 py-3 rounded-md text-lg hover:bg-yellow-300">
              Back
            </button>
          </Link>
        </div>
      );
    }
  }

  return <div className="py-10 px-3 md:p-10">{render()}</div>;
};

export default Card;
