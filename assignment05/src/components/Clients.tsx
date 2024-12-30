import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

const Clients = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">
          What Our Clients <span className="text-yellow-500">Says</span>
        </h2>

        <div className="grid gap-8 mt-12 md:grid-cols-3">
          {/*  Card 1 */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col text-left">
            <Quote className="w-10 h-10 text-[#043873] mb-4" />
            <p className="text-gray-600 text-base mb-4">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
            <hr className="border-t border-gray-800 mb-6" />
            <div className="flex items-center space-x-4">
              <Image
                src="/images/client1.png"
                alt="Client 1"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold text-[#212529]">Oberon Shaw, MCH</p>
                <p className="text-sm text-[#212529]">
                  Head of Talent Acquisition, North America
                </p>
              </div>
            </div>
          </div>

          {/*  Card 2 */}
          <div className="bg-[#4F9CF9] text-white shadow-lg rounded-xl p-6 flex flex-col text-left">
            <Quote className="w-10 h-10 text-white mb-4" />
            <p className="text-base mb-4">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>

            <hr className="border-t border-white mb-6" />
            <div className="flex items-center space-x-4">
              <Image
                src="/images/client2.png"
                alt="Client 2"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <div>
                <p className="font-semibold">Oberon Shaw, MCH</p>
                <p className="text-sm">
                  Head of Talent Acquisition, North America
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#4F9CF9] text-white shadow-lg rounded-xl p-6 flex flex-col text-left">
            <Quote className="w-10 h-10 text-white mb-4" />
            <p className="text-base mb-4">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>

            <hr className="border-t border-white mb-6" />
            <div className="flex items-center space-x-4">
              <Image
                src="/images/client3.png"
                alt="Client 3"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <div>
                <p className="font-semibold">Oberon Shaw, MCH</p>
                <p className="text-sm">
                  Head of Talent Acquisition, North America
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center space-x-2">
          <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default Clients;
