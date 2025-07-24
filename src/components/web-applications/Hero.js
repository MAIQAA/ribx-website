import { Link } from "react-router-dom";
import Button from "../reusable/Button";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.2 });

  return (
    <main className="bg-[#16091F] w-full relative h-full lg:h-[800px] flex items-center justify-center z-10">
      {/* SHAPES */}
      <div className="absolute w-[780px] h-[720px] bg-[#4C1766]  rounded-full -left-[-139px] -bottom-[134px] blur-[300px] opacity-80" />
      <div className="absolute w-[427px] h-[415px] bg-[#535EE0]  rounded-full -left-60 bottom-[134px] blur-[200px] opacity-70" />
      <div className="absolute w-[628px] h-[600px] bg-[#7500FF]  rounded-full -right-96 bottom-[75px] blur-[300px] opacity-80" />
      <div className="absolute w-[592px] h-[594px] bg-[#D63EF1]  rounded-full -right-10 -top-20 blur-[300px] opacity-80" />

      <section className="relative container w-full mx-auto h-full flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:px-8 xl:px-12 py-16 md:py-32">
        {/* Left Text Section */}
        <div
          ref={ref}
          className={`text-white text-start w-full lg:w-[43%] space-y-10 z-10 ${
            isInView ? "fade-slide-in-left" : "opacity-0"
          } `}
        >
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-snug">
            Web Applications <br className="hidden lg:block" />
            <span className="text-[#DC00F9]">Development</span> Services
          </h1>

          {/* Text */}
          <p className="text-base md:text-lg 2xl:text-xl max-w-2xl font-lato">
            At Robx.ai, we build powerful, user-friendly web applications
            tailored to your business goals. From streamlining internal
            operations to enhancing customer experiences, our custom solutions
            help you work smarter, grow faster, and stay ahead in the digital
            world.
          </p>

          <div className="flex flex-row items-end justify-start gap-3 md:gap-5">
            {/* Button */}
            <Link to="/contact">
              <Button
                text="Get a Free Consultation"
                variant="gradient"
                className="border-2"
              />
            </Link>
          </div>
        </div>

        {/* Right Graphic Section */}
        <div
          ref={ref}
          className={`w-full lg:w-[50%] flex flex-col items-center justify-center mt-10 lg:mt-0 relative ${
            isInView ? "fade-slide-in-right" : "opacity-0"
          }`}
        >
          <img
            src="/web-applications/AI-Chatbot-Development-Services.png"
            alt="AI-Chatbot-Development-Services"
            className="h-full w-auto"
          />
        </div>
      </section>
      {/* Shapes After Hero */}
      <div className="w-[90%] self-center bg-[#A234FD] rounded-t-full h-10 absolute -bottom-10 !rotate-180 opacity-25 z-10" />
      <div className="w-[80%] self-center bg-[#5D00F7] rounded-t-full h-14 absolute -bottom-14 !rotate-180 opacity-25 z-10" />
    </main>
  );
};

export default Hero;
