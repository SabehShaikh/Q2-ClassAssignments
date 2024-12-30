import React from "react";
import Image from "next/image";

const Sponsors = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-semibold mb-12 text-gray-900">
        Our Sponsors
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 items-center">
        {/* Apple Sponsor */}
        <div className="flex items-center justify-center p-4 rounded-lg hover:shadow-md transition-shadow duration-300 group">
          <div className="flex items-center justify-center w-full">
            <Image
              src="/Images/Apple.jpg"
              alt="Apple"
              width={58}
              height={68}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Microsoft Sponsor */}
        <div className="flex items-center justify-center p-4 rounded-lg hover:shadow-md transition-shadow duration-300 group">
          <div className="flex items-center justify-center w-full">
            <Image
              src="/Images/Microsoft.png"
              alt="Microsoft"
              width={287}
              height={62}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Slack Sponsor */}
        <div className="flex items-center justify-center p-4 rounded-lg hover:shadow-md transition-shadow duration-300 group">
          <div className="flex items-center justify-center w-full">
            <Image
              src="/Images/Slack_Technologies_Logo 1.png"
              alt="Slack"
              width={280}
              height={71}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Google Sponsor */}
        <div className="flex items-center justify-center p-4 rounded-lg hover:shadow-md transition-shadow duration-300 group">
          <div className="flex items-center justify-center w-full">
            <Image
              src="/Images/Goggle.png"
              alt="Google"
              width={211}
              height={70}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
