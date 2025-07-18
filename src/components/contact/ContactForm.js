"use client";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import HeadingHighlight from "../reusable/HeadingHighlight.js";
import Button from "../reusable/Button.js";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeSlideLeft, fadeSlideRight } from "../animations.js";

const ContactForm = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.2,
  });

  const socialLinks = [
    {
      id: 1,
      icon: FaFacebookF,
      url: "https://www.facebook.com/robxai",
    },
    {
      id: 2,
      icon: FaXTwitter,
      url: "https://x.com/robx_ai/",
    },
    {
      id: 3,
      icon: FaInstagram,
      url: "https://www.instagram.com/robx.ai",
    },
    {
      id: 4,
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/company/robx-ai",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#16091FB2] relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden"
    >
      <img
        src="/home/faq/FaqBg.svg"
        alt="FAQ Background"
        className="hidden xl:block absolute -right-28 top-0 h-[70%] w-auto opacity-80"
      />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-80 -left-40 opacity-70" />
      <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-80 -right-40 opacity-70" />

      <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col lg:flex-row lg:items-start justify-center items-center gap-16 text-white">
        {/* LEFT SECTION */}
        <motion.div
          variants={fadeSlideLeft}
          initial="hidden"
          delay={0.8}
          animate={isInView ? "visible" : "hidden"}
          className="w-full lg:w-[45%] space-y-7"
        >
          <HeadingHighlight highlightText={"Contact Us"} />
          <p className="text-base md:text-lg 2xl:text-xl text-white">
            We are a team of our dedicated patent, professionals united by our
            commitment to excellence and innovation.
          </p>
          <div className="flex items-center justify-start gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-[#d08dff] rounded-full p-2 transition-all ease-in-out duration-500 hover:scale-105"
              >
                <link.icon size={20} className="text-white" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SECTION: Form */}
        <motion.form
          variants={fadeSlideRight}
          initial="hidden"
          delay={0.8}
          animate={isInView ? "visible" : "hidden"}
          novalidate=""
          className="w-full lg:w-[45%] p-8 space-y-7 border rounded-xl"
        >
          <div>
            <label htmlFor="name" className="block mb-1 ml-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              required
              className="bg-[#352146] block w-full p-3 rounded focus:outline-none focus:ring-4 focus:ring-[#d08dff]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 ml-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              required
              className="bg-[#352146] block w-full p-3 rounded focus:outline-none focus:ring-4 focus:ring-[#d08dff] "
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 ml-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Message..."
              className="bg-[#352146] block w-full p-3 rounded focus:outline-none focus:ring-4 focus:ring-[#d08dff]"
            />
          </div>
          <div className="flex justify-center items-center">
            <Button text="Send" variant="purple" className="!rounded-full" />
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
