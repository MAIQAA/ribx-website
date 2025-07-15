import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { servicesData, servicesFAQs } from "../../constant/data";
import FAQs from "../../components/home/FAQs";

const ServicesPage = () => {
  return (
    <>
      {/* hero section start */}
      <div className="relative w-full h-[450px] !text-white  mx-auto  ">
        <div className="absolute w-full">
          <img
            src="/blog/bg.png"
            alt="Background Pic"
            className=" h-[450px] w-full  bg-contain"
          />
        </div>
        <div class="absolute inset-0 flex flex-col items-center justify-center md:mt-12">
          <h1 class="text-2xl md:text-4xl text-white font-bold">
            Explore Our Best Services
          </h1>
          <div className="flex items-center gap-2 mt-6 ">
            <Link to="/">Home</Link>
            <FaChevronRight className="text-[10px] md:text-sm" />
            <Link to="/services">Services</Link>
          </div>
        </div>
      </div>
      {/* hero section end */}

      {/* cart section start */}
      <div className="container mx-auto 2xl:max-w-[1280px] W-full py-12 px-4 lg:px-8 2xl:px-12 border-b border-gray-500 ">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 
        "
        >
          {servicesData.map((services, index) => (
            <div
              key={index}
              className={`flex flex-col items-start justify-start px-4 py-8 border !border-[#ffffff] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-white space-y-3 font-popin transition-all ease-in-out duration-500 hover:scale-105 hover:cursor-pointer ${
                index % 2 !== 0
                  ? "bg-gradient-to-b from-[#0f062c] to-[#1b0c4c] transition-all ease-in-out duration-500  hover:bg-gradient-to-b hover:from-[#0f072ac1] hover:to-[#1b0c4cc8]"
                  : "bg-gradient-to-tl from-[#1b0c4c] to-[#0f062c] transition-all ease-in-out duration-700 hover:bg-gradient-to-b hover:from-[#1b0c4cc8] hover:to-[#0f072ac1]"
              } `}
            >
              <img
                src={services.imageUrl}
                className="w-10 h-10"
                alt={services.title}
              ></img>
              <h3 className="text-base md:text-lg 2xl:text-xl font-normal  mb-1 ">
                {services.title}
              </h3>
              <p className="text-base">{services.description}</p>
              {/* <p>Read more</p> */}
            </div>
          ))}
        </div>
      </div>
      {/* cart section end  */}
      {/* FAQS */}
      <div className="mb-8 md:mb-32">
        {/* <Section8 /> */}
        <FAQs faqs={servicesFAQs} />
      </div>
    </>
  );
};

export default ServicesPage;
