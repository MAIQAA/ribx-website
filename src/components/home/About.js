import { useLocation } from "react-router-dom";
import HeadingHighlight from "../reusable/HeadingHighlight";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import {
  fadeSlideLeft,
  fadeSlideRight,
  titleVariants,
} from "../animations";

const AboutUs = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.2 });

  return (
    <section
      className={`relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden ${
        isHome
          ? "pt-24 md:pt-48 lg:pt-36 xl:pt-40"
          : "pt-24 lg:pt-36 xl:pt-32 2xl:pt-28"
      }`}
      id="about"
      name="about"
    >
      {/* Shapes */}
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-20 -left-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-80 -right-40 opacity-70" />

      {/* Main Content */}
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white">
        {/* Title */}
        <motion.span
          ref={ref}
          className="text-center"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <HeadingHighlight text="About Us" />
        </motion.span>

        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-7">
          {/* Left Text Section */}
          <motion.div
            ref={ref}
            className="text-white text-start w-full lg:w-[45%] 2xl:w-[42%] space-y-7"
            variants={fadeSlideLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Sub Heading */}
            <HeadingHighlight
              text="Delivering"
              highlightText="AI Solutions"
              subText="Since 2020"
              variant="subheading"
            />

            {/* Description */}
            <p className="text-base md:text-lg 2xl:text-xl max-w-2xl">
              At Robx.ai, we are committed to delivering reliable, transparent,
              and efficient software development services. Our client-centric
              approach ensures we understand your business challenges, crafting
              customized AI solutions that meet your expectations, deadlines,
              and budget.
            </p>

            {/* Stats */}
            <div className="mb-12">
              {[
                { label: "Artificial Intelligence", value: "81%" },
                { label: "Customer Satisfaction", value: "99%" },
                { label: "Quality", value: "76%" },
              ].map(({ label, value }, idx) => (
                <div className="text-base mb-7" key={idx}>
                  <p className="mb-1">{label}</p>
                  <div className="bg-[#131b26] h-2 rounded-full relative">
                    <div
                      className="absolute top-0 left-0 bg-[#7828d6] h-full rounded-full"
                      style={{ width: value }}
                    ></div>
                    <span className="absolute -top-7 right-8 !mb-1 translate-x-full text-white">
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Grid Section */}
          <motion.div
            ref={ref}
            className="w-full h-full lg:w-[45%] 2xl:w-[42%] grid grid-cols-1 md:grid-cols-2 gap-3"
            variants={fadeSlideRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Row 1 */}
            <div
              className="col-span-1 md:col-span-2 border-[0.6px] rounded-3xl h-[200px] 2xl:h-[235px]"
              style={{
                backgroundImage: "url('/home/about/About-Bg.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Row 2 Col 1 */}
            <div className="w-full col-span-1 col-start-1 col-end-2 md:col-start-1 md:col-end-1 border-[0.6px] bg-[#7311AB] p-3 rounded-3xl space-y-3">
              <img
                src="/home/about/Solution-Icon.svg"
                width="14"
                height={14}
                alt="Solution Icon"
                className="w-9 h-9 bg-[#535EE0] p-2 rounded-full"
              />

              <h3 className="text-base font-bold">AI Solutions</h3>

              <div className="bg-gradient-to-r from-[#080111] to-[#31155759] border-[0.6px] border-[#231A2D] p-2 rounded-xl">
                <div className="bg-[#080111] border-[0.6px] border-[#231A2D] px-6 py-3 rounded-xl space-y-3">
                  <h3 className="text-lg md:text-3xl lg:text-4xl">
                    99 <span className="text-[#535EE0]">%</span>
                  </h3>
                  <p className="text-xs">Full Solutions</p>
                </div>
              </div>
            </div>

            {/* Row 2 Col 2 */}
            <div className="w-full col-span-1 col-start-1 col-end-2 md:col-start-2 md:col-end-2 border-[0.6px] bg-[#7311AB] p-3 rounded-3xl space-y-3">
              <img
                src="/home/about/Automation-Icon.svg"
                width="14"
                height={14}
                alt="Solution Icon"
                className="w-9 h-9 bg-[#535EE0] p-2 rounded-full"
              />

              <h3 className="text-base font-bold">Automations</h3>

              <div className="bg-gradient-to-r from-[#080111] to-[#31155759] border-[0.6px] border-[#231A2D] p-2 rounded-xl">
                <div className="bg-[#080111] border-[0.6px] border-[#231A2D] px-6 py-3 rounded-xl space-y-3">
                  <h3 className="text-lg md:text-3xl lg:text-4xl">
                    98 <span className="text-[#535EE0]">%</span>
                  </h3>
                  <p className="text-xs">Full Services</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
