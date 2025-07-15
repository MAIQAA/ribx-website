import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import StarBadge from "./reusable/StarBadge";
import HeadingHighlight from "./reusable/HeadingHighlight";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="rounded-xl p-3 mb-4"
      style={{ border: "1px solid #f569dd" }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-semibold focus:outline-none"
      >
        <span>{question}</span>
        <IoIosArrowDropdownCircle
          size={28}
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <>
          <hr className="my-4 border-t-2" style={{ borderColor: "#7828d6" }} />
          <p className="text-sm mt-4 font-light !text-white">{answer}</p>
        </>
      )}
    </div>
  );
};

const Section8 = () => {
  return (
    <div className="mx-auto px-6 md:px-32 py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row text-white gap-16">
        <div className="w-full  lg:w-[68%] text-left mb-8 lg:mb-0">
          <StarBadge text="FAQs" />
          <HeadingHighlight
            text="Frequently Asked"
            highlightText={"Questions"}
          />
          <div className="mt-8 text-sm font-popin">
            <FAQItem
              question="What types of AI solutions does ROBX.AI offer?"
              answer="ROBX.AI offers a range of AI solutions, including natural language processing (NLP), machine learning (ML), computer vision, robotic process automation (RPA), speech recognition, and AI-powered analytics."
            />
            <FAQItem
              question="How can AI benefit my business?"
              answer="AI can streamline operations, improve decision-making, enhance customer experiences, and provide predictive insights. Whether you're looking to automate repetitive tasks, personalize customer interactions, or gain deeper insights from data, AI can help achieve these goals."
            />
            <FAQItem
              question="What industries does ROBX.AI serve?"
              answer="ROBX.AI serves a variety of industries, including healthcare, retail, finance, manufacturing, and more. Our solutions are tailored to meet the unique needs and challenges of each sector."
            />
            <FAQItem
              question="Do you offer custom AI solutions?"
              answer="Yes, we specialize in creating custom AI solutions tailored to your business's specific needs. Our team works closely with you to understand your requirements and develop AI models and systems that align with your goals."
            />
            <FAQItem
              question="How do I get started with implementing AI in my business?"
              answer="Getting started with AI involves understanding your business needs and identifying the right AI solutions. You can reach out to our team for a consultation, where we'll discuss your objectives and how our AI services can help you achieve them. We guide you through the entire process, from planning to deployment and ongoing support."
            />
          </div>
        </div>

        <div className="hidden w-[40%] h-full mx-auto lg:flex justify-center items-center mt-10 ">
          <img src="/images/FAQs.png" alt="FAQs" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Section8;
