import { useState, useRef, useEffect } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import HeadingHighlight from "../reusable/HeadingHighlight";
import { useInView, motion } from "framer-motion";
import { fadeSlideUp, titleVariants } from "../animations";

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      className={`rounded-lg p-4 transition-all duration-500 ease-in-out ${
        isOpen
          ? "bg-gradient-to-r from-[#F9B7BC] via-[#771A8B] to-[#A234FD] text-white"
          : "bg-white text-black"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full flex justify-between text-lg md:text-[22px] items-center text-left font-semibold focus:outline-none"
      >
        <span>{faq.question}</span>
        <IoIosArrowDropdownCircle
          size={28}
          className={`absolute top-0 -right-3 h-5 w-5 md:w-7 md:h-7 md:static transform transition-transform duration-500 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: `${height}px` }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <p
          className={`mt-3 text-lg font-normal transition-all duration-500 ease-in-out ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const FAQs = ({ faqs }) => {
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
      className="bg-[#110B15] relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 z-10"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* Background */}
      <img
        src="/home/WhyChooseUs/WhyChooseUsBg.png"
        alt="Background"
        className="absolute w-full h-fit object-cover bottom-0 opacity-50"
      />
      <div className="absolute bottom-40 -left-40 w-[378px] h-[378px] opacity-80 rounded-full bg-[#431964] blur-[150px] -z-0" />
      <div className="absolute -bottom-20 -right-40 w-[378px] h-[378px] opacity-80 rounded-full bg-[#431964] blur-[150px] -z-0" />

      {/* Main Content */}
      <div className="relative xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white z-10">
        {/* Title */}
        <motion.div
          className="flex items-center justify-center gap-3"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={`title-${isInView}`}
        >
          <HeadingHighlight text="FAQ" />
          <div className="space-y-2">
            <div className="bg-[#A234FD] w-14 h-[2px]" />
            <div className="bg-[#A234FD] w-7 h-[2px]" />
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="w-full space-y-7 text-sm"
          variants={fadeSlideUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={`list-${isInView}`}
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQs;
