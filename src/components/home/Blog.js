import { FaStar } from "react-icons/fa6";
import Button from "../reusable/Button";
import HeadingHighlight from "../reusable/HeadingHighlight";
import { articles } from "../../constant/data";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";

const Blog = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftInView = useInView(leftRef, {
    triggerOnce: true,
    amount: 0.2,
  });
  const RightInView = useInView(rightRef, { triggerOnce: true, amount: 0.2 });
  return (
    <section className=" relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16">
      {/* Shapes */}
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-20 -left-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-80 -right-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 bottom-20 -left-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 bottom-80 -right-40 opacity-70" />

      {/*
       Main Content */}
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white">
        <div className="relative h-full w-full flex flex-col lg:flex-row justify-between items-start gap-7">
          {/* Left Text Section */}
          <div
            ref={leftRef}
            className={`lg:sticky top-24 text-white flex flex-col items-start text-start w-full lg:w-[35%] space-y-7 ${
              leftInView ? "fade-slide-in-left" : ""
            } `}
          >
            {/* Title */}
            <div className="flex items-center justify-center gap-3">
              <HeadingHighlight text="Latest" highlightText={"Blog"} />

              <div className="space-y-2">
                <div className="bg-[#A234FD] w-14 h-[2px]" />
                <div className="bg-[#A234FD] w-7 h-[2px]" />
              </div>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg 2xl:text-xl max-w-2xl">
              Each blog highlights our expertise and the transformative impact
              of our services
            </p>

            {/* Button */}
            <Link to={"/blog"}>
              <Button text="More Blogs" variant="default" />
            </Link>

            <div className="flex items-center justify-start gap-4">
              <div className="flex items-center gap-0">
                {[
                  "/home/hero/Avatar1.svg",
                  "/home/hero/Avatar2.svg",
                  "/home/hero/Avatar3.svg",
                  "/home/hero/Avatar2.svg",
                ].map((src, index) => (
                  <img
                    src={src}
                    alt="Avatar"
                    className={`w-12 h-12 rounded-full border-4 border-[#28093B] shadow-md ${
                      index > 0 ? "-ml-3" : ""
                    }`}
                  />
                ))}
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-0 justify-start text-yellow-500">
                  <FaStar size={18} />
                  <FaStar size={18} />
                  <FaStar size={18} />
                  <FaStar size={18} />
                  <FaStar size={18} />
                </div>

                <p className="text-[#DC00F9]">Trusted by 20k+ clients</p>
                {/* Avatars */}
              </div>
            </div>
          </div>

          {/* Right Blogs Section */}
          <div
            ref={rightRef}
            className={`w-full h-full lg:w-[60%] xl:w-[50%] flex flex-col items-center justify-start gap-7 transition-all duration-700 ease-out ${
              RightInView ? "fade-slide-in-right" : "opacity-0 -translate-x-10"
            }`}
          >
            {articles.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full bg-[#F7F1FC] p-6 flex flex-col md:flex-row items-start justify-between gap-4 rounded-xl"
                >
                  <img
                    alt={item.title}
                    src={item.imageUrl}
                    className="h-40 md:h-52 w-full md:w-1/3 xl:w-[30%] rounded-xl object-fill"
                  />

                  <div className="w-full md:w-2/3 xl:w-[70%] space-y-4 text-black">
                    <h3 className="text-lg md:text-xl lg:text-2xl  font-bold line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-base lg:text-lg text-[#716F73] line-clamp-3">
                      {item.description}
                    </p>

                    <div className="flex flex-col xl:flex-row items-start xl:items-center gap-3 justify-between">
                      {/* Author */}
                      <div className="flex items-center justify-start gap-2">
                        {/* <img
                          src={item.avatar}
                          alt="Avatar"
                          className="rounded-full border-2 border-[#28093B]"
                        /> */}
                        <span className="text-base font-semibold italic">
                          by {item.author}
                        </span>
                      </div>
                      <div className="w-full xl:w-fit flex items-center justify-between gap-3 xl:gap-5">
                        {/* Date */}
                        <b>{item.date}</b>

                        {/* Tag */}
                        <p className="text-white bg-gradient-to-r from-[#D700FA] via-[#28093B] to-[#6800EE] p-2 rounded font-bold uppercase">
                          {item.tag}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
