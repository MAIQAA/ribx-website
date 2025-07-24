import HeadingHighlight from "../reusable/HeadingHighlight";
import Button from "../reusable/Button";
import { WhyChooseUs, whyUsStats } from "../../constant/data";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.2 });
  return (
    <section className=" bg-[#16091F] relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16">
      <img
        src="/home/WhyChooseUs/WhyChooseUsBg.png"
        alt="Background"
        className="absolute w-full h-fit object-cover bottom-0 opacity-50"
      />
      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white">
        <div
          ref={ref}
          className={`flex items-center justify-center gap-3 ${
            isInView ? "fade-slide-in-up" : "opacity-0"
          } `}
        >
          <HeadingHighlight
            text="Why Should"
            highlightText={"You Choose"}
            subText={"?"}
          />

          <div className="hidden md:block space-y-2">
            <div className="bg-[#A234FD] w-14 h-[2px]" />
            <div className="bg-[#A234FD] w-7 h-[2px]" />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row-reverse justify-between items-start gap-7">
          {/* Left Text Section */}
          <div
            ref={ref}
            className={`text-white text-start w-full md:w-[47%] lg:w-[45%] 2xl:w-[42%] space-y-7 ${
              isInView ? "fade-slide-in-right" : "opacity-0"
            } `}
          >
            {/* <div className="flex items-center justify-start gap-7">
              <Button text="Features" variant="gradient" />
              <Button text="Our Value" variant="light" />
            </div> */}
            <HeadingHighlight
              text="Transform your online presence with"
              highlightText="AI website design."
              variant="subheading"
            />

            <p className="text-base md:text-lg 2xl:text-xl max-w-2xl font-lato">
              Choose Robx.ai for leading-edge AI solutions and dedicated
              support. We specialize in customized AI development, ensuring
              transformative results tailored to your business needs and
              supported 24/7.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-7">
              {WhyChooseUs.map((item, index) => (
                <li
                  style={{ listStyleType: "square" }}
                  className={`py-[14px] text-sm xl:text-base 2xl:text-lg font-lato marker:text-[#A234FD] border-[#D5D5D566] ${
                    index === 4 || index === 5
                      ? " border-t border-b "
                      : " border-t "
                  }`}
                  key={index}
                >
                  {item}
                </li>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div
            ref={ref}
            style={{
              backgroundImage: `url("/home/WhyChooseUs/Why-Us-Banner.svg")`,
            }}
            className={`relative w-full h-[470px] md:w-[47%] lg:w-[45%] 2xl:w-[42%] bg-cover bg-center bg-no-repeat rounded-3xl flex flex-col items-center justify-end ${
              isInView ? "fade-slide-in-left" : "opacity-0"
            } `}
          >
            <div className="w-fit flex flex-col items-center justify-center bg-white/10 rounded-3xl border p-6 xl:px-20 space-y-7 backdrop-blur-sm mb-7">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold">
                Get Started!
              </h3>
              <p className="text-sm md:text-base xl:text-lg font-lato text-white/70">
                Try Robx Services for free today
              </p>
              <Link to="/contact">
                <Button variant="default" text="Get a Free Consultation" />
              </Link>
            </div>
          </div>
        </div>

        <div
          className="-mb-32 w-full h-full bg-cover bg-no-repeat bg-center px-10 lg:px-20 py-8 lg:py-12 grid grid-cols-1 md:grid-cols-3 lg:flex gap-3 lg:justify-between lg:items-center rounded-xl bg-[#07000E] z-20"
          style={{
            backgroundImage: `url("/home/WhyChooseUs/Why-us-Stats-Bg.png")`,
          }}
        >
          {whyUsStats.map((stat, index) => (
            <div
              key={index}
              className={`cols-span-1 w-fit lg:w-1/3 flex items-center justify-center gap-4
                ${isInView ? "fade-slide-in-up" : ""}
                ${
                  stat.id === 2
                    ? " lg:px-6 lg:border-l lg:border-r border-[#372C3D]"
                    : " "
                }`}
            >
              <img src="/Square.svg" width={24} height={24} alt="Square" />
              <div>
                <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-left">
                  {stat.title}{" "}
                  <span className="text-base md:text-lg xl:text-xl">+</span>{" "}
                </h2>
                <p className="text-sm md:text-base xl:text-lg text-white/70 font-lato">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
