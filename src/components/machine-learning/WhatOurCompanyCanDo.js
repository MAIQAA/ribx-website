import HeadingHighlight from "../reusable/HeadingHighlight";
import { useRef, useEffect, useState } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { fadeSlideUp, titleVariants } from "../animations";
import { tabs } from "../../constant/data";

const WhatOurCompanyCanDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: false,
    amount: 0.2,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  // Debug isInView state
  useEffect(() => {
    console.log("isInView:", isInView);
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      className="relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden bg-[#130B18] pt-32 lg:pt-32"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* Shapes */}
      <img
        src="/home/faq/FaqBg.svg"
        alt="FAQ Background"
        className="absolute -right-28 top-60 h-[70%] w-auto hidden md:block opacity-80"
      />
      <div className="bg-black/40 absolute top-0 left-0 h-full w-full" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute top-60 -left-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute bottom-60 -right-40 opacity-70" />

      {/* Main Content */}
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white">
        <motion.div
          className="relative flex flex-col items-center justify-center max-w-5xl text-center gap-7 z-10"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={`title-${isInView}`}
        >
          {/* Title */}
          <HeadingHighlight
            text="What Our"
            highlightText="Machine Learning / Deep Learning"
            subText="Company Can Do"
          />
          <p className="text-base md:text-lg xl:px-4">
            At Robx.ai, we design intelligent ML and Deep Learning systems that
            automate processes, predict outcomes, and drive smarter decisions.
            Whether it&apos;s optimizing workflows or uncovering hidden
            insights, our solutions are tailored to meet your business goals.
          </p>
        </motion.div>

        <motion.div
          className="w-full flex flex-col gap-10 items-center justify-center relative z-10"
          variants={fadeSlideUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{
            delay: 0.5,
          }}
        >
          {/* Tab Headers */}
          <div className="w-full flex gap-4 flex-wrap md:justify-center max-w-5xl overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`py-2 px-3 text-sm md:text-base lg:text-lg text-white border-1 border-[#4F4F4F] rounded-lg whitespace-nowrap transition-all 
        ${
          activeIndex === index
            ? "bg-[#242424] shadow-md"
            : " hover:text-pink-400"
        }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div
            key={activeIndex}
            className="gradient-border-wrapper bg-[#671399] text-white p-4 md:p-6 xl:p-8 w-full flex flex-col lg:flex-row items-start justify-between gap-10"
          >
            {/* LEFT SECTION : TITLE */}
            <div className="text-xl md:text-2xl x:text-3xl font-bold w-full lg:w-[30%]">
              {tabs[activeIndex]?.title}
            </div>

            {/* SEPARATION LINE */}
            <hr className="w-full h-[2px] lg:h-64 lg:w-[2px] bg-white" />

            {/* RIGHT SECTION : CONTENT */}
            <div className="text-base xl:text-lg w-full lg:w-[68%] space-y-3">
              <p>{tabs[activeIndex]?.content}</p>
              <ul className="list-disc pl-3 grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-2">
                {tabs[activeIndex]?.details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhatOurCompanyCanDo;
