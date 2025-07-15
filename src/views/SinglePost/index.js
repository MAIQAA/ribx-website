import React from "react";
import { FaChevronRight, FaQuoteLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { latestPost, popularTags, postData } from "../../constant/data";
import { FiSearch } from "react-icons/fi";

const SingleBlog = () => {
  return (
    <>
      {/* hero section start */}
      <div className=" relative w-screen h-[400px]  md:h-[700px] !text-white  text-center  ">
        <div className="absolute">
          <img
            src="/singleblog/bg.png"
            alt="Background Pic"
            className=" h-[400px]  md:h-[650px] bg-contain"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-4xl text-white font-bold">
            Transforming Industries & Changing Lives With AI
          </h1>
          <div className="flex items-center gap-2 mt-6 ">
            <Link to="/">Home</Link>
            <FaChevronRight className="text-[10px] md:text-sm" />
            <Link to="/blog">Blog</Link>
            <FaChevronRight className="text-[10px] md:text-sm" />
            <Link to="/blog">Transforming Industries</Link>
          </div>
        </div>
      </div>
      {/* hero section end */}

      {/* post section start */}
      <section className="text-white font-popin">
        <div className="container py-10 md:py-24  flex flex-wrap justify-center">
          {/* left section */}
          <div className="lg:w-3/5 md:w-1/2">
            {postData.map((item, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg overflow-hidden flex flex-col gap-4"
              >
                <h2 className="text-2xl font-bold mb-2">{item.title1}</h2>
                <img
                  className="w-full h-auto object-cover"
                  src={item.image}
                  alt="AI"
                />
                <div className="">
                  <p className="text-sm mb-4">{item.date}</p>
                  <p className="mb-4">{item.text}</p>
                  <blockquote className="border !border-[rgba(120,40,214,1)] border-l-4 border-purple-500 p-4 italic mb-4">
                    <FaQuoteLeft
                      size={30}
                      className="text-[rgba(120,40,214,1)]"
                    />
                    {item.quote}
                  </blockquote>

                  <img
                    className="w-full h-auto object-cover mb-4"
                    src={item.vrImage}
                    alt="VR"
                  />
                  <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                  {/* <p>{item.description}</p> */}
                  <p className="mb-4">{item.paragraphs[0]}</p>
                  <ul className="list-disc pl-5 mb-4">
                    <li>{item.paragraphs[1]}</li>
                    <li>{item.paragraphs[2]}</li>
                    <li>{item.paragraphs[3]}</li>
                  </ul>
                  <p>{item.paragraphs[4]}</p>
                </div>
              </div>
            ))}
          </div>

          {/* right section */}
          <div className="lg:w-2/6 md:w-1/2 bg-[#211b36] rounded-lg p-4 md:p-8  flex flex-col md:ml-auto w-full mt-10 md:mt-0 h-[960px] text-white overflow-y-auto">
            {/* search  */}

            <div className="relative space-y-4 ">
              <h2 className="text-lg font-medium title-font">Search Here</h2>
              <input
                type="text"
                className="rounded-md  py-3 pl-3 pr-12 w-full border-1 bg-[#0f062c] border-none outline-none"
                placeholder="search"
              />

              <button type="submit" className="absolute right-4 top-11 ">
                <FiSearch className="text-white text-2xl" />
              </button>
            </div>
            {/* search end */}

            <hr className="my-8 !text-white" />
            {/* single post section */}
            <div className="relative flex flex-col ">
              <h2 className="text-lg font-medium title-font">Latest Post</h2>
              {latestPost.map((post, index) => {
                return (
                  <>
                    <div className="flex gap-3 my-4 " key={index}>
                      <div className="flex w-48 h-24">
                        <img src={post.imageUrl} alt="post-image"></img>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p>{post.title}</p>
                        <p>{post.date}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <hr className="my-8" />
            {/* Tag section start */}
            <div className="relative ">
              <h2 className="text-lg font-medium title-font">Popular Tags</h2>
              <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start ">
                {popularTags.map((post, index) => {
                  return (
                    <>
                      <button
                        key={index}
                        className="bg-[#7828d6] px-3 py-2.5 rounded-full  text-white text-xs md:text-sm button-hover  flex justify-center font-popin font-medium items-center "
                      >
                        {post.tag}
                      </button>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leave a comment section */}
      <div className="w-full px-2 md:px-0 md:w-1/2 mx-auto mb-16 md:mb-48 space-y-8 ">
        <h2 className="text-2xl font-popin text-white"> Leave a Comment</h2>
        <div className="p-2 md;p-6 bg-[#211b36] text-white rounded-md shadow-xl ">
          <form
            novalidate=""
            className=" w-full max-w-xl p-2 md:p-8 mx-auto space-y-6"
          >
            <div>
              <label for="name" className="block mb-1 ml-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                required=""
                className="bg-[#0f062c] block w-full p-3 rounded focus:outline-none focus:ring-1 focus:ring-opacity-25 focus:dark:ring-violet-600 "
              />
            </div>
            <div>
              <label for="email" className="block mb-1 ml-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                required=""
                className="block w-full p-3 rounded focus:outline-none focus:ring-1 focus:ring-opacity-25 focus:dark:ring-violet-600 bg-[#0f062c]"
              />
            </div>
            <div>
              <label for="message" className="block mb-1 ml-1">
                Message
              </label>
              <textarea
                id="message"
                type="text"
                rows={4}
                placeholder="Message..."
                className="bg-[#0f062c] block w-full p-3 rounded autoexpand focus:outline-none focus:ring-1 focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-[#7828d6] px-6 py-2 rounded-full min-w-[150px] min-h-[40px] flex items-center text-white justify-center mt-3 md:mt-6 sm:mb-0 button-hover font-semibold">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
