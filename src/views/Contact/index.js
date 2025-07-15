import { FaChevronRight, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ContactUs } from "../../constant/data.js";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import HeadingHighlight from "../../components/reusable/HeadingHighlight.js";
const Contactpage = () => {
  return (
    <>
      <div className=" relative w-full h-[450px]  !text-white  text-center mx-auto ">
        <div className="absolute w-full">
          <img
            src="/blog/bg.png"
            alt="Background img"
            className=" h-[450px] w-full bg-contain "
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center  md:mt-12">
          <h1 className="text-2xl md:text-4xl text-white font-bold font-popin">
            Stay Connected With Us
          </h1>
          <div className="flex items-center gap-2 mt-6 ">
            <Link to="/">Home</Link>
            <FaChevronRight className="text-[10px] md:text-sm" />
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>

      {/* contact cart section start */}
      <div className="flex justify-center container py-12 px-6">
        <div
          className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 
        "
        >
          {ContactUs.map((contact, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start space-y-5 px-4 py-4 bg-gray-200 border border-[rgba(255,255,255,1)] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-white  font-popin transition-all ease-in-out duration-500 hover:scale-105 hover:cursor-pointer hover:opacity-90"
            >
              <div className="flex items-center justify-center">
                <img
                  src={contact.imageUrl}
                  className="w-16 h-16"
                  alt={contact.title}
                ></img>
              </div>
              <div className="flex flex-col justify-center space-y-1">
                <h3 className="md:text-lg font-semibold text-center">
                  {contact.title}
                </h3>
                {contact.link ? (
                  <a href={contact.link} className="hover:underline">
                    {contact.details}
                  </a>
                ) : Array.isArray(contact.details) ? (
                  <ul className="text-left space-y-1">
                    {contact.details.map((item, index) => (
                      <li key={index} className="text-sm ">
                        <a href={item.url} className="hover:underline">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-center">{contact.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* contact form section start */}
      <div className="container grid grid-cols-1 gap-8 py:16 md:py-28 mx-auto rounded-lg md:grid-cols-2 md:px-6  dark:text-gray-800">
        <div className="flex flex-col justify-between w-full">
          <div className="space-y-7">
            <HeadingHighlight highlightText={"Contact Us"} />

            <p className="text-base md:text-lg 2xl:text-xl text-white">
              We are a team of our dedicated patent, professionals united by our
              commitment excellence patent protection.
            </p>
            <div className="flex space-x-4 pt-6">
              <a
                href="https://www.facebook.com/robxai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full p-2 transition-all ease-in-out duration-500 hover:scale-105 "
                style={{ border: "1px solid #d08dff" }}
              >
                <FaFacebookF size={20} className=" text-white" />
              </a>
              <a
                href="https://x.com/robx_ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full p-2 transition-all ease-in-out duration-500 hover:scale-105 "
                style={{ border: "1px solid #d08dff" }}
              >
                <FaXTwitter size={20} className=" text-white" />
              </a>
              <a
                href="https://www.instagram.com/robx.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full p-2 transition-all ease-in-out duration-500 hover:scale-105 "
                style={{ border: "1px solid #d08dff" }}
              >
                <FaInstagram size={20} className=" text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/robx-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full p-2 transition-all ease-in-out duration-500 hover:scale-105 "
                style={{ border: "1px solid #d08dff" }}
              >
                <FaLinkedinIn size={20} className=" text-white" />
              </a>
            </div>
          </div>
        </div>
        {/* contact us section  */}
        <div className="p-6 bg-[#211b36] text-white rounded-md shadow-xl">
          <form
            novalidate=""
            className="container w-full max-w-2xl p-8 mx-auto space-y-6"
          >
            <div>
              <label for="name" className="block mb-1 ml-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                required=""
                className="bg-[#0f062c] block w-full p-3 rounded focus:outline-none focus:ring-1 focus:ring-opacity-25 focus:dark:ring-violet-600 "
              />
            </div>
            <div>
              <label for="email" className="block mb-1 ml-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                required=""
                className="block w-full p-3 rounded focus:outline-none focus:ring-1 focus:ring-opacity-25 focus:dark:ring-violet-600 bg-[#0f062c]"
              />
            </div>
            <div>
              <label for="message" className="block mb-1 ml-1">
                Message
              </label>
              <textarea
                id="message"
                type="text"
                rows={4}
                placeholder="Message..."
                className="bg-[#0f062c] block w-full p-3 rounded focus:outline-none focus:ring-1 focus:ring-opacity-25 focus:dark:ring-violet-600 "
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-[#7828d6] px-6 py-2 rounded-full min-w-[150px] min-h-[40px] flex text-base md:text-lg 2xl:text-xl items-center text-white justify-center mt-6 sm:mb-0 button-hover font-semibold">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contactpage;
