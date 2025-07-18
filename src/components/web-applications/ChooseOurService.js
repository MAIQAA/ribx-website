import { webAppChooseServices } from "../../constant/data";
import HeadingHighlight from "../reusable/HeadingHighlight";
import { useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import { fadeSlideUp, titleVariants } from "../animations";
import { Link } from "react-router-dom";

const ChooseServices = () => {
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
      className="bg-[#16091F] relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden pt-32 lg:pt-32"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <img
        src="/home/WhyChooseUs/WhyChooseUsBg.png"
        alt="Background"
        className="absolute w-full h-fit object-cover bottom-0 opacity-50"
      />
      {/* Shapes */}
      <img
        src="/home/faq/FaqBg.svg"
        alt="FAQ Background"
        className="absolute -right-28 top-60 h-[70%] w-auto -z-10 opacity-80"
      />
      <div className="bg-[#431964] w-96 h-96 rounded-full absolute top-80 blur-[200px] z-0 -left-10" />
      <div className="bg-[#431964] w-96 h-96 rounded-full absolute top-80 blur-[200px] z-0 -right-10" />

      {/* Main Content */}
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white ">
        <motion.div
          className="flex flex-col items-center justify-center max-w-6xl text-center gap-7 relative z-10"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={`title-${isInView}`}
        >
          {/* Title */}
          <HeadingHighlight
            text="Choose Our"
            highlightText="Web Application Development"
            subText="Services"
          />
          <p className="text-base md:text-lg xl:px-4">
            At Robx.ai, we build fast, secure, and scalable web applications
            tailored to your business goals. Our expert team focuses on
            performance and user experience, helping you improve operations,
            engage customers, and grow with confidence.
          </p>
        </motion.div>

        <motion.div
          className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-start gap-7 gap-y-10"
          variants={fadeSlideUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{
            delay: 0.5,
          }}
          key={`grid-${isInView}`}
        >
          {webAppChooseServices.map((service, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-start  h-36 lg:h-48  
    ${
      service.id === 6
        ? " justify-between p-3 md:p-4 lg:p-6 xl:!p-8 rounded-xl"
        : " justify-start border-l-2 px-4 lg:px-6 xl:!px-7"
    } 
    space-y-3 overflow-hidden z-10`}
              style={
                service.bgSrc
                  ? {
                      backgroundImage: `url(${service.bgSrc})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : {}
              }
            >
              <h3 className="text-xl xl:text-2xl font-bold text-white">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm lg:text-base">
                {service.description}
              </p>

              {service.id === 6 && (
                <div className="w-full flex items-center justify-between">
                  <Link to={"/contact"}>
                    <img
                      src="/chatbot/Link.svg"
                      alt="Link Icon"
                      className="w-14 h-14"
                    />
                  </Link>

                  <img
                    src="/chatbot/Graph.png"
                    alt="Graph Icon"
                    className="w-14 h-14"
                  />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ChooseServices;
