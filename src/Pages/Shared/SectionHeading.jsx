import React from "react";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h1 className={`text-2xl lg:text-5xl font-bold`}>{title}</h1>
      <p className="md:max-w-[930px] mx-auto my-4 md:my-6">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
