import React from "react";
import Hero from "../../components/chatbot/Hero";
import ChooseServices from "../../components/chatbot/ChooseOurService";
import BenefitServices from "../../components/chatbot/BenefitsOfServices";
import { homeFAQs } from "../../constant/data";
import FAQs from "../../components/home/FAQs";
import Integrate from "../../components/chatbot/Integrate";

const index = () => {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <ChooseServices />
      <BenefitServices />
      <Integrate/>
      <FAQs faqs={homeFAQs} />
    </div>
  );
};

export default index;
