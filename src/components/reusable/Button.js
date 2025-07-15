import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import PropTypes from "prop-types";

const Button = ({ text, variant = "default", onClick, className = "" }) => {
  let baseClasses = "py-2 px-4 font-bold text-base lg:text-lg";
  let icon = null;

  switch (variant) {
    case "default":
      baseClasses +=
        " flex flex-row-reverse items-center justify-between gap-3 text-white bg-gradient-to-r py-3 rounded-xl from-[#D700FA] via-[#28093B] to-[#6800EE] border-3";
      icon = <FaCircleArrowRight size={26} />;
      break;

    case "gradient":
      baseClasses +=
        " text-white bg-gradient-to-r from-[#D700FA] via-[#28093B] to-[#6800EE] rounded-lg";
      break;

    case "light":
      baseClasses += " text-black bg-[#F0EBF5] rounded-lg";
      break;

    case "dark":
      baseClasses +=
        " flex flex-row-reverse items-center justify-between gap-3 text-white bg-[#A234FD] !py-3 bg-black gradient-border-wrapper ";
      icon = <FaCircleArrowRight size={26} />;
      break;

    case "purple":
      baseClasses +=
        " flex flex-row-reverse items-center justify-between gap-3 text-white bg-[#A234FD] rounded mt-2 border-3";
      icon = <FaCircleArrowRight size={26} />;
      break;

    default:
      break;
  }

  return (
    <button className={`${baseClasses} ${className}`} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["default", "gradient", "light", "dark", "purple"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
