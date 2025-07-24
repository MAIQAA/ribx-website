import { Link } from "react-router-dom";
import Button from "../reusable/Button";
import { useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import { titleVariants } from "../animations";

const Hero = () => {
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
    <motion.main
      ref={ref}
      style={{
        backgroundImage: `url('/generative/Hero-Bg.svg')`,
      }}
      className="w-full relative h-full lg:h-[800px] bg-no-repeat bg-cover bg-center flex items-center justify-center z-10"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <section className="relative container w-full mx-auto h-full flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 xl:px-12 py-16 md:py-32">
        {/* Main Content */}
        <motion.div
          className="text-white flex flex-col items-center justify-center text-center w-full space-y-7"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={`main-content-${isInView}`}
        >
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-snug">
            Generative <span className="text-[#DC00F9]">AI Development</span>{" "}
            Solutions <br />
            <span className="text-[#DC00F9]">for Businesses</span>
          </h1>

          {/* Text */}
          <p className="text-base md:text-lg 2xl:text-xl max-w-3xl font-lato">
            At Robx.ai, we build Generative AI tools that help your business
            work faster and smarter. From writing content to answering
            questions, our AI solutions can automate tasks and improve the way
            you connect with customers. Let us create custom AI tools that fit
            your goals.
          </p>

          {/* Button */}
          <Link to="/contact">
            <Button
              text="Get a Free Consultation"
              variant="gradient"
              className="border-3"
            />
          </Link>
        </motion.div>
      </section>

      {/* Shapes After Hero */}
      <div className="w-[90%] self-center bg-[#A234FD] rounded-t-full h-10 absolute -bottom-10 !rotate-180 opacity-25" />
      <div className="w-[80%] self-center bg-[#5D00F7] rounded-t-full h-14 absolute -bottom-14 !rotate-180 opacity-25" />
    </motion.main>
  );
};

export default Hero;
