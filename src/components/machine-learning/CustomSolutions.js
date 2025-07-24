import HeadingHighlight from "../reusable/HeadingHighlight";
import { useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import { fadeSlideUp, titleVariants } from "../animations";
import SliderComponent from "../reusable/Slider";
import { slides } from "../../constant/data";

const CustomSolutions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: false,
    amount: 0.2,
    threshold: 0.1,
  });

  // Debug isInView state
  useEffect(() => {
    console.log("isInView:", isInView);
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      style={{
        backgroundImage: "url('/machine-learning/CustomSolutionsBg.jpg')",
      }}
      className="relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden bg-cover bg-no-repeat bg-center pt-32 lg:pt-32"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-black/40 absolute top-0 left-0 h-full w-full" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-60 -left-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 bottom-60 -right-40 opacity-70" />

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
            text="Custom"
            highlightText="Deep Learning / Machine Learning"
            subText="Solutions"
          />
          <p className="text-base md:text-lg xl:px-4 font-lato">
            We analyze your workflows, data structures, and business goals to
            choose the right machine learning or deep learning approach. Then,
            we design and develop intelligent models that deliver accurate
            predictions, automate tasks, and adapt to your evolving needs.
          </p>
        </motion.div>

        <motion.div
          className="w-full flex flex-col items-center justify-center"
          variants={fadeSlideUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{
            delay: 0.5,
          }}
          key={`flex-${isInView}`}
        >
          <SliderComponent slides={slides} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CustomSolutions;
