import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pt-20 flex items-center relative">
      
      {/* Background Image */}
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image
          src="/images/bg-governor.jpg"
          alt="Governor House"
          layout="fill"
          objectFit="cover"
          className="opacity-25"
        />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 relative">
        {/* Left Side */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-[#044E83] text-6xl font-bold">Governor Sindh</h1>
          <h2 className="text-[#044E83] text-4xl font-medium">
            Kamran Khan Tessori
          </h2>
          <h3 className="text-[#2EB6E8] text-3xl font-semibold leading-tight">
            Certified Cloud
            <br />
            Applied Generative AI
            <br />
            Engineer (GenEng)
          </h3>
          <p className="text-[#044E83] text-xl font-semibold mt-2">
            Earn up to $5,000 / month
          </p>
          <p className="text-[#044E83] text-xl font-semibold">
            Now admissions are open in Hyderabad
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-8 mt-6">
            <button className="bg-[#044E83] text-white py-4 px-8 text-xl font-bold rounded hover:bg-[#033b66] transition-all hover:translate-y-1">
              APPLY NOW
            </button>
            <div className="text-center">
              <p className="text-[#044E83] text-4xl font-bold">562,143</p>
              <p className="text-[#044E83] text-base">Accepted Applications</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center relative">
  <Image
    src="/images/herocover.png"
    alt="Governor"
    width={500}
    height={800}
    className="h-auto w-full max-w-[600px] lg:max-w-[900px]"
  />
</div>


        
      </div>
    </div>
  );
};

export default Hero;
