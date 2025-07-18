import GradeTokenization from "../../components/tokenization/GradeTokenization";
import Hero from "../../components/tokenization/Hero";
import Pioneer from "../../components/tokenization/Pioneer";
import Blog from "../../components/home/Blog";
import { homeFAQs } from "../../constant/data";
import FAQs from "../../components/home/FAQs";
import DiversifiedAudiences from "../../components/tokenization/DiversifiedAudience";
import Tokenization from "../../components/tokenization/Tokenization";

const index = () => {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <GradeTokenization />
      <Pioneer />
      <DiversifiedAudiences />
      <Tokenization />
      <Blog />
      <FAQs faqs={homeFAQs} />
    </div>
  );
};

export default index;
