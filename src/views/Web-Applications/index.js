import React from "react";
import Hero from "../../components/web-applications/Hero";
import BenefitsOfServices from "../../components/web-applications/BenefitsOfServices";
import ChooseServices from "../../components/web-applications/ChooseOurService";
import FAQs from "../../components/home/FAQs";
import { homeFAQs } from "../../constant/data";
import TabSection from "../../components/web-applications/TabsSection";

const index = () => {
  return (
    <div className="!overflow-x-clip">
      <Hero />
      <ChooseServices />
      <BenefitsOfServices />
      <TabSection />
      <FAQs faqs={homeFAQs} />
    </div>
  );
};

export default index;
