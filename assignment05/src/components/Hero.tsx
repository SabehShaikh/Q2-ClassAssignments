import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-[#043873] bg-[url(/Images/Lines.png)] bg-cover  text-white h-screen flex flex-col items-center lg:flex-row pt-12 md:pt-16 lg:pt-0">
      {/* Left Section: Text Content */}
      <div className="flex flex-col gap-6 justify-center px-8 lg:px-16 lg:w-1/2 text-center lg:text-left">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-[64px] leading-tight">
          Get More Done with Whitespace
        </h1>

        <p className="font-normal text-base md:text-lg lg:text-[24px] leading-7 lg:leading-9">
          Project management software that enables your teams to collaborate,
          plan, analyze, and manage everyday tasks.
        </p>

        <button className="px-6 py-3 bg-[#4F9CF9] rounded-lg text-white flex items-center justify-center gap-2 font-medium hover:bg-[#3b82f6] transition-all duration-300 w-fit self-center lg:self-start">
          Try Whitespace Free
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Right Section: Placeholder or Image */}
      <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <div className="md:w-[450px] md:h-[250px] w-[350px] h-[200px] lg:w-[650px] lg:h-[350px] bg-[#C4DEFD] rounded-lg shadow-lg"></div>
      </div>
    </div>
  );
};

export default Hero;
