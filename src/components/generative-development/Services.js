"use client";

import { Link } from "react-router-dom";
import { generativeServicesData } from "../../constant/data";
import Button from "../reusable/Button";
import HeadingHighlight from "../reusable/HeadingHighlight";
import { useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import {
  titleVariants,
  fadeSlideUp,
  fadeSlideLeft,
  fadeSlideRight,
} from "../animations";

// Separate component for each section to manage hooks
function ServiceSection({ current, index }) {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, {
    triggerOnce: false,
    amount: 0.1,
    threshold: 0.05,
  });

  // Debug isSectionInView state
  useEffect(() => {
    console.log(`isSectionInView-${index}:`, isSectionInView);
  }, [isSectionInView]);

  // Validate current object
  if (
    !current ||
    !current.title ||
    !current.description ||
    !Array.isArray(current.details) ||
    !current.imgSrc
  ) {
    console.warn(`Invalid data for service at index ${index}`);
    return null;
  }

  return (
    <motion.section
      ref={sectionRef}
      key={index}
      style={{
        backgroundImage: `url('/generative/Tabs-Bg.jpg')`,
      }}
      className={`w-full h-full flex ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } rounded-3xl p-4 md:p-7 lg:!p-10 2xl:!p-14 flex-col shadow-[0_8px_16px_0_#A234FD40] md:flex-col-reverse justify-start md:justify-between items-start gap-7 lg:items-center bg-cover bg-center bg-no-repeat lg:justify-between`}
      variants={fadeSlideUp}
      initial="hidden"
      animate={isSectionInView ? "visible" : "hidden"}
      // key={`section-${index}-${isSectionInView}`}
    >
      {/* Left Text Section */}
      <motion.div
        className="w-full lg:w-[47%] xl:w-1/2 space-y-7 text-white"
        variants={index % 2 === 0 ? fadeSlideLeft : fadeSlideRight}
        initial="hidden"
        animate={isSectionInView ? "visible" : "hidden"}
        // key={`text-${index}-${isSectionInView}`}
      >
        <HeadingHighlight text={current.title} variant="subHeading" />
        <p className="text-base md:text-lg text-justify font-lato">
          {current.description}
        </p>
        <div className="space-y-3">
          {current.details.map((point, i) => (
            <span
              key={i}
              className="flex items-center justify-start text-base md:text-lg gap-3 font-lato"
            >
              <img
                src="/generative/list-icon.svg"
                alt="list icon"
                width={24}
                height={20}
              />
              <p className="">{point}</p>
            </span>
          ))}
        </div>

        <div>
          <Link to="/contact">
            <Button text="Get Started With Us" variant="dark" />
          </Link>
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="w-full hidden md:flex lg:w-[40%] xl:w-[45%] h-full"
        variants={index % 2 === 0 ? fadeSlideRight : fadeSlideLeft}
        initial="hidden"
        animate={isSectionInView ? "visible" : "hidden"}
        // key={`image-${index}-${isSectionInView}`}
      >
        <img
          src={current.imgSrc}
          alt={current.title}
          className="w-full h-full object-contain"
        />
      </motion.div>
    </motion.section>
  );
}

export function Services() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, {
    triggerOnce: false,
    amount: 0.1,
    threshold: 0.05,
  });

  // Debug isTitleInView state
  useEffect(() => {
    console.log("isTitleInView:", isTitleInView);
  }, [isTitleInView]);

  // Check if generativeServicesData is valid
  if (!generativeServicesData || !Array.isArray(generativeServicesData)) {
    console.error("generativeServicesData is not an array or is undefined");
    return (
      <div className="text-white text-center py-16">
        <p>Error: Unable to load services data. Please try again later.</p>
      </div>
    );
  }

  return (
    <motion.div
      className="h-full relative flex flex-col gap-16 w-full xl:container mx-auto 2xl:max-w-[1280px] items-start md:items-center justify-start pt-20 py-8 lg:pt-28 lg:py-16 px-4 md:px-8 xl:px-12"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        ref={titleRef}
        className="flex flex-col gap-7 items-center justify-center text-center max-w-5xl text-white"
        variants={titleVariants}
        initial="hidden"
        animate={isTitleInView ? "visible" : "hidden"}
        // key={`title-${isTitleInView}`}
      >
        <HeadingHighlight
          text="End-to-End"
          highlightText="Generative AI Solutions"
          subText="for your Business"
        />
        <p className="text-base md:text-lg 2xl:text-xl xl:px-4 font-lato">
          At Robx.ai, we start by understanding how your team works, what data
          you use, and what your platform needs. Then we build smart AI
          tools—like chatbots and content generators—that give accurate results
          and help you work more efficiently.
        </p>
        <Link to={"/services"}>
          <Button text="See All Services" variant="dark" />
        </Link>
      </motion.div>
      <main className="space-y-16">
        {generativeServicesData.map((current, index) => (
          <ServiceSection key={index} current={current} index={index} />
        ))}
      </main>
    </motion.div>
  );
}
