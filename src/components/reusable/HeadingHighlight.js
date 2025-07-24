import React from "react";

const HeadingHighlight = ({
  text,
  highlightText,
  subText,
  variant = "title", // "title" or "subheading"
}) => {
  const baseStyle =
    variant === "title"
      ? "text-3xl md:text-4xl lg:text-5xl 2xl:text-[55px]"
      : "text-2xl md:text-3xl lg:text-4xl";

  return (
    <h2 className={`${baseStyle} font-bold  leading-snug`}>
      {text && <>{text}&nbsp;</>}
      {highlightText && <span className="text-[#DC00F9]">{highlightText}</span>}
      {subText && <> {subText}</>}
    </h2>
  );
};

export default HeadingHighlight;
