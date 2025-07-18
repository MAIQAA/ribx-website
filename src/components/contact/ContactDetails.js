"use client";

import { ContactUs } from "../../constant/data.js";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { fadeSlideUp } from "../animations.js";

const ContacDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={fadeSlideUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative w-full xl:container mx-auto 2xl:max-w-[1280px] px-4 md:px-8 xl:px-12 my-8 lg:my-16 mt-24 md:mt-48 lg:mt-36 xl:mt-40"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {ContactUs.map((contact, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start space-y-4 p-6 bg-[#110B15] gradient-border-wrapper text-white transition-all duration-300 ease-in-out hover:scale-[1.03] hover:cursor-pointer hover:opacity-90"
          >
            <div className="flex items-center justify-center">
              <img
                src={contact.imageUrl}
                className="w-12 h-12"
                alt={contact.title || `Contact ${index}`}
              />
            </div>

            <div className="flex flex-col justify-center items-center space-y-2 text-center">
              <h3 className="text-xl xl:text-2xl font-bold">{contact.title}</h3>

              {contact.link ? (
                <a
                  href={contact.link}
                  className="text-sm md:text-base hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.details}
                </a>
              ) : Array.isArray(contact.details) ? (
                <ul className="text-sm md:text-base space-y-1 text-left">
                  {contact.details.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.url}
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm md:text-base">{contact.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContacDetails;
