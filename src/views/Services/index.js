import { servicesFAQs } from "../../constant/data";
import FAQs from "../../components/home/FAQs";
import Hero from "../../components/services/Hero";
import Services from "../../components/home/Services";

const ServicesPage = () => {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <Services />
      <FAQs faqs={servicesFAQs} />
    </div>
  );
};

export default ServicesPage;
