import { integrateData } from "../../constant/data";
import HeadingHighlight from "../reusable/HeadingHighlight";
import { useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import { fadeSlideUp, titleVariants } from "../animations";

const Integrate = () => {
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
      className="bg-[#16091FB2] relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden pt-32 lg:pt-32"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* Shapes */}
      <img
        src="/home/faq/FaqBg.svg"
        alt="FAQ Background"
        className="absolute -left-28 top-60 h-[70%] w-auto scale-x-[-1] opacity-80"
      />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-80 -left-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-80 -right-40 opacity-70" />

      {/* Main Content */}
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white">
        <motion.div
          className="flex items-center justify-center max-w-6xl text-center gap-3"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={`title-${isInView}`}
        >
          {/* Title */}
          <HeadingHighlight
            text="Integrate Our"
            highlightText="Chatbot Across Multiple"
            subText="Platforms"
          />
        </motion.div>

        <motion.div
          className="w-full grid grid-cols-1 lg:grid-cols-2 items-center justify-start gap-7"
          variants={fadeSlideUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={`grid-${isInView}`}
        >
          {integrateData.map((service, index) => (
            <div
              key={index}
              className="relative bg-[#110B15] border-l-[5px] border-[#DC00F9] shadow-[0_0_15px_rgba(120,0,149,0.5)] hover:shadow-[0_0_15px_rgba(120,0,149,0.8)] transition-shadow duration-300 p-4 space-y-3 md:gap-7 overflow-hidden z-10 flex flex-col md:flex-row items-center justify-center"
            >
              <img
                src={service.imgsrc}
                alt={service.title}
                className="h-10 w-10"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm lg:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Integrate;
