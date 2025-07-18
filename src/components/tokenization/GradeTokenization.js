import HeadingHighlight from "../reusable/HeadingHighlight";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { fadeSlideUp, titleVariants } from "../animations";
import { FaCheck } from "react-icons/fa6";
import { gradeTokenizationData } from "../../constant/data";

const GradeTokenization = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: true,
    amount: 0.2,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      className="relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden pt-32 lg:pt-32"
    >
      {/* Background Elements */}
      <img
        src="/home/faq/FaqBg.svg"
        alt="FAQ Background"
        width={400}
        height={400}
        className="absolute -left-28 top-60 h-[70%] w-auto hidden md:block -scale-x-[1] opacity-80"
      />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-60 -left-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 bottom-60 -right-40 opacity-70" />

      {/* Content Container */}
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white">
        {/* Heading */}
        <motion.div
          className="relative flex flex-col items-center justify-center max-w-5xl text-center gap-7 z-10"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <HeadingHighlight
            text="Enterprise"
            highlightText="Grade Tokenization"
            subText="Made Simple"
          />
          <p className="text-base md:text-lg xl:px-4">
            We assess your asset structure, compliance needs, and business goals
            to design a secure, scalable tokenization framework. From real
            estate to fractional ownership models, we simplify the tokenization
            process while ensuring full transparency, security, and regulatory
            alignment.
          </p>
        </motion.div>

        {/* Benefits List */}
        <motion.ul
          className="relative w-full flex items-center justify-center gap-7 z-10 flex-wrap"
          variants={fadeSlideUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        >
          {[
            "Attract broader investors",
            "Streamline fundraising processes",
            "White-label",
            "No code & API-ready",
          ].map((text, index) => (
            <li key={index} className="flex items-center gap-3">
              <FaCheck className="text-[#DC00F9]" size={20} />
              <p className="text-white 2xl:text-[#8D99A3] text-base md:text-lg">{text}</p>
            </li>
          ))}
        </motion.ul>

        {/* Cards */}
        <motion.div
          className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-7 z-10"
          variants={fadeSlideUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
        >
          {gradeTokenizationData.map((item) => (
            <div
              key={item.id}
              className="w-full flex flex-col items-center justify-center h-[500px] gradient-border-wrapper bg-[#110B15] text-white shadow-[0_8px_16px_0_#2998FF40] p-4 md:p-6 2xl:p-8"
            >
              <h3 className="text-xl lg:text-2xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-sm lg:text-[15px] text-center">
                {item.description}
              </p>
              <img
                src={item.imgSrc}
                width={315}
                height={315}
                alt={item.title}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GradeTokenization;
