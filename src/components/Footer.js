import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import HeadingHighlight from "./reusable/HeadingHighlight";
import Button from "./reusable/Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#200A31] relative w-full px-4 md:px-8 xl:px-12 py-8 lg:py-16 overflow-hidden z-10">
        {/* Shapes */}
        <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-20 -left-40 opacity-70" />
        <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 top-80 -right-40 opacity-70" />
        <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 bottom-20 -left-40 opacity-70" />
        <div className="bg-[#431964] w-96 h-96 rounded-full blur-[100px] absolute -z-10 bottom-80 -right-40 opacity-70" />

        {/*
     Main Content */}
        <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col justify-center items-center gap-16 text-white">
          <div className="relative h-full w-full flex flex-col lg:flex-row justify-between items-start gap-7 border-b border-[#2D2736] pb-12">
            {/* Left Text Section */}
            <div className="text-white flex flex-col items-start text-start w-full lg:w-[45%] space-y-7">
              {/* Title */}
              <HeadingHighlight text="Let's start project together!" />

              {/* Description */}
              <p className="text-base md:text-lg 2xl:text-xl max-w-2xl">
                To lead the eCommerce market, you need ambition and
                possibilities to grow. We assist our clients in achieving real
                business results.
              </p>

              <div className="flex items-center gap-3 justify-start text-white">
                <FaFacebookF className="bg-[#D700FA] p-2 w-10 h-10 rounded cursor-pointer" />
                <FaTwitter className="bg-[#D700FA] p-2 w-10 h-10 rounded cursor-pointer" />
                <FaInstagram className="bg-[#D700FA] p-2 w-10 h-10 rounded cursor-pointer" />
                <FaLinkedinIn className="bg-[#D700FA] p-2 w-10 h-10 rounded cursor-pointer" />
              </div>
            </div>

            {/* Right Blogs Section */}
            <div className=" w-full h-full lg:w-[47%] flex flex-col items-center justify-start gap-7 ">
              <form className="w-full space-y-7 md:grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                <div className="space-y-3">
                  <label>What is your Name? *</label>
                  <input
                    type="text"
                    required
                    className="outline-none w-full py-[12px] px-6 bg-[#352146] text-white focus:ring-2 focus:ring-[#D700FA] rounded"
                  />
                </div>

                <div className="space-y-3">
                  <label>Company Name ?</label>
                  <input
                    type="text"
                    className="outline-none w-full py-[12px] px-6 bg-[#352146] text-white focus:ring-2 focus:ring-[#D700FA] rounded"
                  />
                </div>

                <div className="space-y-3">
                  <label>Phone number? *</label>
                  <input
                    type="tel"
                    pattern="0-9"
                    required
                    className="outline-none w-full py-[12px] px-6 bg-[#352146] text-white focus:ring-2 focus:ring-[#D700FA] rounded"
                  />
                </div>

                <div className="space-y-3">
                  <label>E-mail *</label>
                  <input
                    type="email"
                    required
                    className="outline-none w-full py-[12px] px-6 bg-[#352146] text-white focus:ring-2 focus:ring-[#D700FA] rounded"
                  />
                </div>

                <div className="col-span-2 space-y-3">
                  <label>A few words about your project *</label>
                  <textarea
                    type="text"
                    rows={3}
                    className="outline-none w-full py-[12px] px-6 bg-[#352146] text-white focus:ring-2 focus:ring-[#D700FA] rounded"
                  />
                </div>
                <div className="w-fit">
                  <Button text="Submit" variant="purple" />
                </div>
              </form>
            </div>
          </div>

          <div className="relative h-full w-full flex flex-col md:flex-row flex-wrap justify-between items-start gap-7">
            <div className="w-9/12 md:w-[25%] lg:w-[20%] space-y-3 ">
              <h2 className="text-2xl font-bold">ROBX.AI</h2>
              <p className="text-lg text-[#716F73]">
                Create high-quality, style-consistent, proprietary assets for
                your games.
              </p>
            </div>

            <div className="w-9/12 md:w-[25%] lg:w-[20%] space-y-3">
              <h2 className="text-2xl font-bold">Download</h2>
              <p className="text-lg text-[#716F73]">
                Create high-quality, style-consistent, proprietary assets for
                your games.
              </p>
            </div>

            <div className="w-9/12 md:w-[25%] lg:w-fit space-y-3">
              <h2 className="text-2xl font-bold">Company</h2>
              <div className="flex flex-col items-start justify-start text-lg space-y-2 text-[#716F73]">
                <Link>About</Link>
                <Link>Career</Link>
                <Link>Contact</Link>
                <Link>Blog</Link>
              </div>
            </div>

            <div className="w-full md:w-2/3 lg:w-[35%] space-y-3 ">
              <h2 className="text-2xl font-bold">Sign Up for Our Newsletter</h2>
              <div className="relative w-full py-[14px] px-6 bg-transparent border-1 border-[#FFFFFF33] text-white rounded">
                <input
                  type="text"
                  placeholder="Please Enter your email"
                  className="w-[75%] outline-none focus:outline-none bg-transparent"
                />

                <div className="absolute top-0 right-0 w-16 h-full rounded p-1">
                  <div className="bg-[#A234FD] w-full h-full flex flex-col items-center justify-center rounded">
                    <img
                      src="/Newsletter.svg"
                      width={25}
                      height={25}
                      alt="Newsletter Icon"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-start gap-3">
                <input type="checkbox" className="accent-[#A234FD]" />
                <span>I agree to the Terms, Privacy Policy.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="w-full bg-black px-4 md:px-8 xl:px-12">
        <div className="xl:container mx-auto 2xl:max-w-[1280px] w-full flex flex-col md:flex-row justify-center md:justify-between items-center py-6 md:gap-16 text-white">
          <p>© 2025 design by Robx</p>

          <div className="flex flex-col md:flex-row items-center justify-end gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
