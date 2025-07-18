import Hero from "../../components/contact/Hero.js";
import ContactCards from "../../components/contact/ContactDetails.js";
import ContactForm from "../../components/contact/ContactForm.js";
const Contactpage = () => {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <ContactCards />
      <ContactForm />
    </div>
  );
};
export default Contactpage;
