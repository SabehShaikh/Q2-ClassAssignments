import React from "react";
import { ArrowRight } from "lucide-react";

const SectionOne = () => {
  return (
    <div className="bg-white bg-[url('/Images/curly.png')] bg-no-repeat text-black flex flex-col items-center lg:flex-row py-12 md:py-16 lg:py-0 px-8 lg:px-16">
      {/* Left Section: Text Content */}
      <div className="flex flex-col gap-6 justify-center text-center lg:text-left lg:w-1/2">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-[48px] leading-tight">
          Project Management
        </h1>

        <p className="font-normal text-[#212529] text-sm md:text-base lg:text-lg leading-6 lg:leading-8">
          Images, videos, PDFs, and audio files are supported. Create math
          expressions and diagrams directly from the app. Take photos with the
          mobile app and save them to a note.
        </p>

        <button className="px-6 py-2 bg-[#4F9CF9] rounded-md text-white flex items-center justify-center gap-2 font-medium hover:bg-[#3b82f6] transition-all duration-300 w-fit self-center lg:self-start">
          Get Started
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Right Section: Placeholder or Image */}
      <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-16">
        <div className="md:w-[450px] md:h-[250px] w-[300px] h-[180px] lg:w-[650px] lg:h-[350px] bg-[#C4DEFD] rounded-lg shadow-lg"></div>
      </div>
    </div>
  );
};

export default SectionOne;
