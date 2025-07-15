import { Benefits } from "../../components/generative-development/Benefits";
import Hero from "../../components/generative-development/Hero";
import { Services } from "../../components/generative-development/Services";
import FAQs from "../../components/home/FAQs";
import { homeFAQs } from "../../constant/data";

const index = () => {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <Services />
      <Benefits />
      <FAQs faqs={homeFAQs} />
    </div>
  );
};

export default index;
