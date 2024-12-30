import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const SectionTwo = () => {
  return (
    <div className="bg-white text-black h-auto flex flex-col lg:flex-row items-center py-12 md:py-16 lg:py-8 px-8 lg:px-16">
      {/* Left Section: Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center order-2 lg:order-1">
        <Image
          src="/Images/Eclipse.png"
          alt="Eclipse Decoration"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>

      {/* Right Section: Text Content */}
      <div className="flex flex-col gap-6 justify-center text-center lg:text-left lg:w-1/2 order-1 lg:order-2">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-[48px] leading-tight">
          Work together
        </h1>

        <p className="font-normal text-[#212529] text-sm md:text-base lg:text-lg leading-6 lg:leading-8">
          With whitespace, share your notes with your colleagues and collaborate
          on them. You can also publish a note to the internet and share the URL
          with others.
        </p>

        <button className="px-6 py-2 bg-[#4F9CF9] rounded-md text-white flex items-center justify-center gap-2 font-medium hover:bg-[#3b82f6] transition-all duration-300 w-fit self-center lg:self-start">
          Try it now
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SectionTwo;
