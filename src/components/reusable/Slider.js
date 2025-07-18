"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import ErrorBoundary from "../ErrorBoundary";
const SliderComponent = ({ slides }) => {
  const swiperRef = useRef(null);

  return (
    <ErrorBoundary>
      <div className="relative w-full space-y-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={3}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
          className="pb-12"
        >
          {slides?.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[540px] lg:h-[570px] xl:h-[540px] gradient-border-wrapper bg-[#671399] p-2 space-y-4 cursor-pointer">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-60 object-cover rounded-lg"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://via.placeholder.com/800x400?text=Image+Not+Found")
                  }
                />
                <div className="w-full px-2 space-y-7">
                  <h3 className="text-white text-xl md:text-2xl xl:text-3xl font-bold">
                    {slide.title}
                  </h3>
                  <p className="text-base text-[#E7E7E7]">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows */}
        <div className="w-full flex items-center justify-center gap-7">
          <button
            className="z-20 bg-[#4F4F4F] hover:bg-[#DC00F9] text-white p-2 rounded-full transition"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <HiOutlineChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="z-20 bg-[#4F4F4F] hover:bg-[#DC00F9] text-white p-2 rounded-full transition"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <HiOutlineChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Optional custom pagination */}
        {/* <div className="custom-swiper-pagination flex justify-center gap-2 mt-4"></div> */}
      </div>
    </ErrorBoundary>
  );
};

export default SliderComponent;
