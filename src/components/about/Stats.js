import { useRef } from "react";
import { whyUsStats } from "../../constant/data";
import { useInView } from "framer-motion";

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.2 });
  return (
    <section
      className="w-full h-full flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center bg-[#07000E]"
      style={{
        backgroundImage: `url("/home/WhyChooseUs/Why-us-Stats-Bg.png")`,
      }}
    >
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full h-full text-white  px-10 lg:px-20 py-8 lg:py-12 grid grid-cols-1 md:grid-cols-3 lg:flex gap-3 lg:justify-between lg:items-center rounded-xl  z-20">
        {whyUsStats.map((stat, index) => (
          <div
            ref={ref}
            key={index}
            className={`cols-span-1 w-fit lg:w-1/3 flex items-center justify-center gap-4
              ${isInView ? " fade-slide-in-up" : ""}
              ${
                stat.id === 2
                  ? "lg:px-6 lg:border-l lg:border-r border-[#372C3D]"
                  : ""
              }`}
          >
            <img src="/Square.svg" width={24} height={24} alt="Square" />
            <div>
              <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-left">
                {stat.title}{" "}
                <span className="text-base md:text-lg xl:text-xl">+</span>
              </h2>
              <p className="text-sm md:text-base xl:text-lg text-white/70 font-lato">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
