/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeSlideUp, fadeSlideLeft, fadeSlideRight } from "../animations";
import { pioneerData } from "../../constant/data";

const PioneerSection = () => {
  return (
    <motion.main
      className="h-full relative flex flex-col gap-16 w-full xl:container mx-auto 2xl:max-w-[1280px] items-start md:items-center justify-start py-8 px-4 md:px-8 xl:px-12"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {pioneerData.map((item, index) => {
        const sectionRef = useRef(null);
        const isSectionInView = useInView(sectionRef, {
          triggerOnce: false,
          amount: 0.1,
          threshold: 0.05,
        });

        return (
          <motion.section
            ref={sectionRef}
            key={index}
            className={`w-full h-full flex ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } flex-col md:flex-col-reverse lg:flex-row items-start lg:items-center justify-start lg:justify-between rounded-3xl`}
            variants={fadeSlideUp}
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
          >
            {/* Left/Text Side */}
            <motion.div
              className="w-full lg:w-[47%] xl:w[45%] space-y-7 text-white"
              variants={index % 2 === 0 ? fadeSlideLeft : fadeSlideRight}
              initial="hidden"
              animate={isSectionInView ? "visible" : "hidden"}
            >
              {/* Title */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-[50px] leading-normal">
                <span className="text-[#DC00F9]">{item.highlight}</span>{" "}
                {item.title}
              </h3>
              <p className="text-base md:text-lg font-light text-justify">
                {item.description}
              </p>
              <div className="space-y-3">
                {item.details.map((point, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-3 text-base md:text-lg"
                  >
                    <img
                      src="/BulletCheck.svg"
                      alt="list icon"
                      width={22}
                      height={22}
                    />
                    <p className="font-light">{point}</p>
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right/Image Side */}
            <motion.div
              className="w-full hidden md:flex lg:w-[40%] xl:w-[45%] h-full"
              variants={index % 2 === 0 ? fadeSlideRight : fadeSlideLeft}
              initial="hidden"
              animate={isSectionInView ? "visible" : "hidden"}
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.section>
        );
      })}
    </motion.main>
  );
};

export default PioneerSection;
