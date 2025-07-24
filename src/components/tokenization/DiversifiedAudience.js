/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { diversifiedAudiences } from "../../constant/data";
import HeadingHighlight from "../reusable/HeadingHighlight";
import { useInView } from "framer-motion";

const DiversifiedAudiences = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.2 });
  return (
    <section
      style={{
        backgroundImage: "url('/machine-learning/CustomSolutionsBg.jpg')",
      }}
      className=" relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden bg-cover bg-no-repeat bg-center pt-32 lg:pt-32"
    >
      {/* Background Elements */}
      <img
        src="/home/faq/FaqBg.svg"
        alt="FAQ Background"
        width={400}
        height={400}
        className="absolute -left-28 top-60 h-[70%] w-auto hidden md:block -scale-x-[1] opacity-80"
      />
      <div className="bg-black/40 absolute top-0 left-0 h-full w-full" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-20 -left-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-80 -right-40 opacity-70" />

      {/* Main Content */}
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white">
        <div
          ref={ref}
          className={`relative z-10 flex flex-col max-w-5xl items-center justify-center text-center gap-7 ${
            isInView ? "fade-slide-in-up" : "opacity-0"
          } `}
        >
          {/* Title */}
          <HeadingHighlight
            highlightText={"Diversified Audiences"}
            subText={"for tokenized real estate"}
          />

          <p className="text-base md:text-lg xl:px-4 font-lato">
            Tokenization makes real estate accessible to a wide range of
            investors—retail, global, institutional, and digital natives—by
            enabling fractional ownership, lower entry costs, and borderless
            participation.
          </p>
        </div>

        <div className="w-full flex flex-col justify-between items-start gap-10">
          <div
            ref={ref}
            className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center justify-start gap-7 ${
              isInView ? "fade-slide-in-right" : "opacity-0"
            } `}
          >
            {diversifiedAudiences.map((item) => (
              <div
                key={item.id}
                className="relative rounded-xl gradient-border-wrapper bg-[#110B15] p-4 lg:p-6 xl:!p-7 2xl:!p-8 space-y-3 overflow-hidden z-10 flex flex-col items-start justify-start h-80 md:h-64 lg:h-72 xl:h-[296px]"
              >
                <img src={item.imgSrc} alt={item.title} className="h-8 w-8" />
                <h3 className="text-xl xl:text-2xl font-bold text-white ">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base font-lato">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiversifiedAudiences;
