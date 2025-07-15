import React from "react";

const StarBadge = ({ text }) => {
  return (
    <div
      style={{
        backgroundImage: `url('/home/GradientBackground.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex  items-center justify-center gap-1 w-fit text-base md:text-lg font-bold p-2 px-4 rounded-full border !border-white/40"
    >
      <img src="/home/StarIcon.svg" alt="Star Icon" width="16" height="16" />
      {text}
      <img src="/home/StarIcon.svg" alt="Star Icon" width="16" height="16" />
    </div>
  );
};

export default StarBadge;
