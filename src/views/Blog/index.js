import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { articles } from "../../constant/data";
const BlogPage = () => {
  return (
    <>
      {/* hero section start */}
      <div className="relative w-full h-[450px]  !text-white  text-center mx-auto  ">
        <div className="absolute w-full">
          <img
            src="/blog/bg.png"
            alt="Background Pic"
            className=" h-[450px] w-full "
          />
        </div>
        <div class="absolute inset-0 flex flex-col items-center justify-center md:mt-12">
          <h1 class="text-2xl md:text-4xl text-white font-bold">
            Latest News and Articles
          </h1>
          <div className="flex items-center gap-2 mt-6 ">
            <Link to="/">Home</Link>
            <FaChevronRight className="text-[10px] md:text-sm" />
            <Link to="/blog">Blog</Link>
          </div>
        </div>
      </div>
      {/* hero section end */}
      {/* cart section */}
      <div className=" container flex flex-col justify-center items-center gap-8 px-8 pt-12 pb-12 md:pb-48">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="relative overflow-hidden h-full rounded-sm shadow-lg group"
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover transition-all ease-in-out duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-end p-4">
                <p className="text-white text-sm">{article.date}</p>
                <h3 className="text-white text-lg font-semibold">
                  {article.title}
                </h3>
                {/* <a
                  href={article.link}
                  className="text-white text-sm mt-2 underline"
                >
                  Read More
                </  a> */}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mt-3">
          <button className="bg-[#7828d6] px-6 py-2 rounded-full min-w-[150px] min-h-[40px] flex items-center text-white justify-center mb-4 sm:mb-0 button-hover font-semibold">
            <Link to="/singleblog"> Explore More</Link>
          </button>
        </div> */}
      </div>
    </>
  );
};

export default BlogPage;
