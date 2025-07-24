import { Link } from "react-router-dom";
import StarBadge from "../reusable/StarBadge";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { cardVariants, mainContentVariants } from "../animations";

const Hero = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { triggerOnce: false, amount: 0.2 });
  const rightInView = useInView(rightRef, { triggerOnce: false, amount: 0.2 });

  return (
    <main
      style={{
        backgroundImage: `url('/home/hero/HeroBg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full relative h-full flex items-center justify-center"
    >
      <section className="relative container w-full mx-auto h-full flex flex-col justify-center px-4 md:px-8 xl:px-12 py-40 lg:py-60">
        {/* Main Content */}
        <motion.div
          ref={leftRef}
          className="text-white text-start w-full md:w-[75%] lg:w-2/3 space-y-7"
          variants={mainContentVariants}
          initial="hidden"
          animate={leftInView ? "visible" : "hidden"}
        >
          {/* Badge */}
          <StarBadge text="Creativity Unleashed" />

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-snug">
            Revolutionizing <br />
            <span className="text-[#DC00F9]">Your Business With AI</span>{" "}
            Solutions
          </h1>

          {/* Text */}
          <p className="text-base md:text-lg 2xl:text-xl max-w-2xl font-inter">
            ROBX.AI revolutionizes businesses with cutting-edge AI solutions. We
            streamline operations, enhance decision-making, and improve customer
            experiences. Partner with us to unlock the full potential of AI and
            shape a more innovative future for your business.
          </p>

          <div className="flex flex-row items-end justify-start gap-3 md:gap-5">
            {/* Button */}
            <Link to="/contact">
              <button
                style={{
                  backgroundImage: `url('/home/GradientBackground.svg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-fit bg-[#542294] text-sm md:text-lg font-bold p-2 px-4 rounded-full border !border-white/40"
              >
                Explore Now
              </button>
            </Link>

            {/* Text */}
            <div className="flex flex-col items-center justify-center gap-1">
              <b className="text-3xl lg:text-4xl 2xl:text-5xl text-[#188EFF] italic font-playfair">
                300+
              </b>
              <span className="text-base md:text-lg 2xl:text-xl">
                Trusted Companies
              </span>
            </div>
          </div>
        </motion.div>

        {/* CUSTOMERS Card on Hero's end */}
        <motion.div
          ref={rightRef}
          className="hidden relative md:absolute -bottom-[150px] md:right-4 w-[300px] h-[250px] rounded-3xl p-6 md:flex items-center justify-center z-10"
          style={{
            backgroundImage: `url('/home/hero/WhiteBg.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          variants={cardVariants}
          initial="hidden"
          animate={rightInView ? "visible" : "hidden"}
        >
          {/* Circle on right */}
          <img
            src="/home/hero/WhiteCircle.svg"
            width={77}
            height={77}
            alt="Circle"
            className="absolute top-0 right-0"
          />

          {/* Left Content */}
          <div className="w-10/12 lg:w-2/3 space-y-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#0863F1] font-bold">
              20k+
            </h2>
            <h4 className="text-base md:text-lg uppercase text-black">
              Customers
            </h4>
            <p className="text-[#716F73] text-base md:text-lg">
              Download our Apps to enjoy ai magic!
            </p>

            {/* Avatars */}
            <div className="flex items-center">
              {[
                "/home/hero/Avatar1.svg",
                "/home/hero/Avatar2.svg",
                "/home/hero/Avatar3.svg",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Avatar"
                  className={`w-12 h-12 rounded-full border-4 border-[#28093B] shadow-md ${
                    index > 0 ? "-ml-3" : ""
                  }`}
                />
              ))}

              <span className="bg-gradient-to-r from-[#D700FA] via-[#28093B] to-[#6800EE] text-transparent bg-clip-text font-bold ml-3">
                more+
              </span>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Shapes After Hero */}
      <div className="w-[90%] self-center bg-[#A234FD] rounded-t-full h-10 absolute -bottom-10 !rotate-180 opacity-25" />
      <div className="w-[80%] self-center bg-[#5D00F7] rounded-t-full h-14 absolute -bottom-14 !rotate-180 opacity-25" />
    </main>
  );
};

export default Hero;
