import Hero from "../../components/home/Hero";
import About from "../../components/home/About";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Services from "../../components/home/Services";
import Projects from "../../components/home/Projects";
import Blog from "../../components/home/Blog";
import FAQs from "../../components/home/FAQs";
import { homeFAQs } from "../../constant/data";
const HomePage = () => {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Projects />
      <FAQs faqs={homeFAQs} />
      <Blog />
    </div>
  );
};

export default HomePage;
