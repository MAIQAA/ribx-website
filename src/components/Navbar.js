"use client";

import { useState, useEffect, useRef } from "react";
import Logo from "../components/images/logo.png";
import { HiOutlineSearch, HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbMessageChatbot } from "react-icons/tb";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import Button from "./reusable/Button";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  // Close dropdown on outside click (desktop)
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Navigation links with nested services dropdown
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    {
      label: "Services",
      dropdown: [
        { to: "/chatbot", label: "AI Chatbot", icon: TbMessageChatbot },
        {
          to: "/generative-development",
          label: "Generative Development",
          icon: MdOutlineGeneratingTokens,
        },
        { to: "/web-applications", label: "Web Application", icon: CgWebsite },
      ],
    },
    { to: "/blog", label: "Blogs" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="w-full">
      {/* NAVBAR FOR LG & XL DEVICES */}
      <nav
        className="fixed top-0 left-0 w-full z-40 h-18 bg-[#0E0613] bg-opacity-40 text-white font-normal border-b-2 border-gray-600 uppercase backdrop-blur-sm"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto py-[1%] flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" aria-label="Home page">
              <img src={Logo} alt="Logo" className="h-10" />
            </Link>
          </div>

          <div className="hidden lg:flex space-x-10 items-center">
            <ul className="flex space-x-6 items-center font-semibold">
              {navLinks.map((link, index) =>
                link.dropdown ? (
                  <li
                    key={index}
                    className="hover-custom relative flex items-center"
                    ref={dropdownRef}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      to="/services"
                      className={`flex items-center ${
                        path === "/services" ? "gradient-text" : ""
                      }`}
                      aria-haspopup="true"
                      aria-expanded={isServicesDropdownOpen}
                    >
                      {link.label}
                      <MdKeyboardArrowDown
                        className={`w-4 h-4 ml-2 transform ${
                          isServicesDropdownOpen ? "rotate-180" : ""
                        } transition-transform duration-300 ease-in-out`}
                      />
                    </Link>
                    {isServicesDropdownOpen && (
                      <ul
                        className={`absolute flex flex-col items-start top-6 left-0 bg-[#0E0613] bg-opacity-90 border-[0.5px] border-white/20 p-2 backdrop-blur-sm rounded-md shadow-lg z-50 text-white/90 transition-all duration-500 ease-in-out ${
                          isServicesDropdownOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-[-20px]"
                        }`}
                        role="menu"
                      >
                        {link.dropdown.map((item, subIndex) => (
                          <li
                            key={subIndex}
                            className="group px-4 py-3 text-sm text-nowrap w-full"
                            role="menuitem"
                          >
                            <Link
                              to={item.to}
                              onClick={closeMenu}
                              className={`flex items-center justify-start gap-2 ${
                                path === item.to
                                  ? "gradient-text"
                                  : "text-white/90 group-hover:text-[#dc00f9]"
                              }`}
                              aria-label={item.label}
                            >
                              {item.icon && <item.icon className="w-5 h-5" />}
                              <span>{item.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li
                    key={index}
                    className={`hover-custom ${
                      path === link.to ? "gradient-text" : ""
                    }`}
                  >
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="hidden lg:flex items-center space-x-1 relative ml-10">
            <HiOutlineSearch
              className="w-5 h-5 text-white"
              aria-label="Search"
            />
            <div className="h-[30px] w-[1px] bg-gray-300 mx-2"></div>
            <a
              href="/contact"
              // href="https://forms.gle/FacpYmAq5JheVNux6"
              // target="_blank"
              rel="noreferrer"
            >
              <Button
                text="Get a Free Consultation"
                variant="gradient"
                aria-label="Get a Free Consultation"
              />
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <HiOutlineMenuAlt3 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* NAVBAR FOR SM & MD DEVICES */}
      <nav
        className={`fixed top-0 right-0 h-full lg:hidden bg-[#16091F] bg-opacity-95 border-l border-[#A234FD] text-white backdrop-blur-sm z-40 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-[1000px]"
        } transition-transform duration-500 ease-in-out w-full md:w-[340px]`}
        role="dialog"
        aria-label="Mobile navigation menu"
      >
        <ul className="text-base md:text-lg font-bold space-y-7 p-7 py-10 text-left">
          <button
            className="absolute top-3 right-3"
            onClick={() => setMenuOpen(!isMenuOpen)}
            aria-label="Close mobile menu"
          >
            <CgClose className="w-6 h-6" />
          </button>
          {navLinks.map((link, index) =>
            link.dropdown ? (
              <li key={index} className="hover-custom">
                <div
                  className={`flex justify-start items-center cursor-pointer ${
                    path === "/services" ? "gradient-text" : ""
                  }`}
                  onClick={() =>
                    setServicesDropdownOpen(!isServicesDropdownOpen)
                  }
                  role="button"
                  aria-haspopup="true"
                  aria-expanded={isServicesDropdownOpen}
                >
                  {link.label}
                  <MdKeyboardArrowDown
                    className={`w-5 h-5 ml-2 transform ${
                      isServicesDropdownOpen ? "rotate-180" : ""
                    } transition-transform duration-300 ease-in-out`}
                  />
                </div>
                {isServicesDropdownOpen && (
                  <ul
                    className={`flex flex-col items-start bg-[#1a0d22] rounded-md py-4 mt-2 space-y-4 transition-all duration-300 ease-in-out ${
                      isServicesDropdownOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-[-16px]"
                    }`}
                    role="menu"
                  >
                    {link.dropdown.map((item, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 text-base md:text-lg w-full"
                        role="menuitem"
                      >
                        <Link
                          to={item.to}
                          onClick={closeMenu}
                          className={`flex items-center justify-start gap-2 ${
                            path === item.to
                              ? "gradient-text"
                              : "text-white/90 hover:text-[#dc00f9]"
                          }`}
                          aria-label={item.label}
                        >
                          {item.icon && (
                            <item.icon
                              className={`w-5 h-5 ${
                                path === item.to
                                  ? "text-[#dc00f9]"
                                  : "text-white hover:text-[#dc00f9]"
                              }`}
                            />
                          )}
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li
                key={index}
                className={`hover-custom ${
                  path === link.to ? "gradient-text" : ""
                }`}
              >
                <Link to={link.to} onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            )
          )}
          <div className="flex flex-col items-center space-y-4 mt-6">
            <a
              href="/contact"
              // href="https://forms.gle/FacpYmAq5JheVNux6"
              // target="_blank"
              rel="noreferrer"
            >
              <Button
                text="Get a Free Consultation"
                variant="gradient"
                aria-label="Get a Free Consultation"
              />
            </a>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
