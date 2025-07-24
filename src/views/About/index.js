import React from "react";
import Hero from "../../components/about/Hero";
import About from "../../components/home/About";
// import Projects from "../../components/home/Projects";
import FAQs from "../../components/home/FAQs";
import { homeFAQs } from "../../constant/data";
import Stats from "../../components/about/Stats";

const index = () => {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <About />
      <Stats />
      {/* <Projects /> */}
      <FAQs faqs={homeFAQs} />
    </div>
  );
};

export default index;
