"use client";

import { GenerativeBenefits } from "../../constant/data";
import HeadingHighlight from "../reusable/HeadingHighlight";
import { useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import { titleVariants, fadeSlideLeft, fadeSlideRight } from "../animations";

export function Benefits() {
  const titleRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const isTitleInView = useInView(titleRef, {
    triggerOnce: false,
    amount: 0.1,
    threshold: 0.05,
  });
  const isLeftColumnInView = useInView(leftColumnRef, {
    triggerOnce: false,
    amount: 0.1,
    threshold: 0.05,
  });
  const isRightColumnInView = useInView(rightColumnRef, {
    triggerOnce: false,
    amount: 0.1,
    threshold: 0.05,
  });

  // Check if GenerativeBenefits is valid
  if (!GenerativeBenefits || !Array.isArray(GenerativeBenefits)) {
    console.error("GenerativeBenefits is not an array or is undefined");
    return (
      <div className="text-white text-center py-16">
        <p>Error: Unable to load benefits data. Please try again later.</p>
      </div>
    );
  }

  return (
    <motion.section
      className="bg-[#16091F] relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <img
        src="/home/WhyChooseUs/WhyChooseUsBg.png"
        alt="Background"
        className="absolute w-full h-fit object-cover bottom-0 opacity-50"
      />
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white">
        <motion.div
          ref={titleRef}
          className="flex flex-col gap-7 items-center justify-center text-center max-w-5xl text-white"
          variants={titleVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
          // key={`title-${isTitleInView}`}
        >
          <HeadingHighlight
            text="Benefits of Acquiring "
            highlightText="Generative AI"
            subText="Development"
          />
          <p className="text-base md:text-lg 2xl:text-xl xl:px-4">
            At Robx.ai, we analyze your workflows and data needs to choose the
            right AI tools. Then, we build tailored solutions like smart
            chatbots that deliver fast, accurate responses and help your
            business work more efficiently.
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start justify-start">
          <motion.div
            ref={leftColumnRef}
            className="w-full flex flex-col items-center justify-start gap-7"
            variants={fadeSlideLeft}
            initial="hidden"
            animate={isLeftColumnInView ? "visible" : "hidden"}
            // key={`left-column-${isLeftColumnInView}`}
          >
            {GenerativeBenefits.slice(0, 3).map((benefit) => (
              <div
                key={benefit.id}
                className="flex items-start justify-between gap-3 pt-10 border-t-2 border-white/50"
              >
                <div className="text-white text-sm lg:text-base">
                  {benefit.id}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-white text-sm lg:text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            ref={rightColumnRef}
            className="w-full flex flex-col items-center justify-start gap-7 lg:mt-28"
            variants={fadeSlideRight}
            initial="hidden"
            animate={isRightColumnInView ? "visible" : "hidden"}
            // key={`right-column-${isRightColumnInView}`}
          >
            {GenerativeBenefits.slice(3, 6).map((benefit) => (
              <div
                key={benefit.id}
                className="flex items-start justify-start gap-3 pt-10 border-t-2 border-white/50"
              >
                <div className="text-white text-sm lg:text-base">
                  {benefit.id}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-white text-sm lg:text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
