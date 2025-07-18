import Hero from "../../components/machine-learning/Hero";
import FAQs from "../../components/home/FAQs";
import { homeFAQs } from "../../constant/data";
import CustomSolutions from "../../components/machine-learning/CustomSolutions";
import WhatOurCompanyCanDo from "../../components/machine-learning/WhatOurCompanyCanDo";
import TechStack from "../../components/machine-learning/TechStacks";

const index = () => {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <CustomSolutions />
      <WhatOurCompanyCanDo />
      <TechStack />
      <FAQs faqs={homeFAQs} />
    </div>
  );
};

export default index;
