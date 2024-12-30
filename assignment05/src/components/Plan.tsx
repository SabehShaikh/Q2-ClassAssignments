import React from "react";
import { Check } from "lucide-react";

const Plan = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Header Section */}
        <h2 className="text-5xl font-extrabold text-gray-900">
          Choose <span className="text-yellow-500">Your Plan</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Whether you want to get organized, keep your personal life on track,{" "}
          <br />
          or boost workplace productivity, Evernote has the right plan for you.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {/* Free Plan */}
          <div className="bg-white border border-[#FFE492] rounded-xl  p-8 flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-800">Free</h3>
            <p className="text-4xl font-bold mt-4">$0</p>
            <p className="text-gray-600 mt-2 text-base">
              Capture ideas and find them quickly
            </p>
            <ul className="mt-6 space-y-4 text-gray-700 text-left">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-black mr-2" />
                Sync unlimited devices
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-black mr-2" />
                10 GB monthly uploads
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-black mr-2" />
                200 MB max. note size
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-black mr-2" />
                Customize Home dashboard
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-black mr-2" />
                Connect primary Google Calendar account
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-black mr-2" />
                Add due dates, reminders, and notifications
              </li>
            </ul>
            <button className="mt-4 bg-white text-black border-[#FFE492] border py-3 rounded-lg font-medium transition">
              Get Started
            </button>
          </div>

          {/* Personal Plan */}
          <div className="bg-[#043873] text-white border rounded-xl  p-8 flex flex-col">
            <h3 className="text-2xl font-semibold">Personal</h3>
            <p className="text-4xl font-bold mt-4 text-[#FFE492]">$11.99</p>
            <p className="mt-2 text-base">Keep home and family on track</p>
            <ul className="mt-6 space-y-4 text-left">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#FFE492] mr-2" />
                Sync unlimited devices
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#FFE492] mr-2" />
                10 GB monthly uploads
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#FFE492] mr-2" />
                200 MB max. note size
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#FFE492] mr-2" />
                Customize Home dashboard
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#FFE492] mr-2" />
                Connect primary Google Calendar account
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#FFE492] mr-2" />
                Add due dates, reminders, and notifications
              </li>
            </ul>
            <button className="mt-4 bg-[#4F9CF9] text-white py-3 rounded-lg font-medium transition">
              Get Started
            </button>
          </div>

          {/* Organization Plan */}
          <div className="bg-white border border-[#FFE492] rounded-xl  p-8 flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-800">
              Organization
            </h3>
            <p className="text-4xl font-bold mt-4">$49.99</p>
            <p className="text-gray-600 mt-2 text-base">
              Capture ideas and find them quickly
            </p>
            <ul className="mt-6 space-y-4 text-gray-700 text-left">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-black mr-2" />
                Sync unlimited devices
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-black mr-2" />
                10 GB monthly uploads
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-black mr-2" />
                200 MB max. note size
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-black mr-2" />
                Customize Home dashboard
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-black mr-2" />
                Connect primary Google Calendar account
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-black mr-2" />
                Add due dates, reminders, and notifications
              </li>
            </ul>
            <button className="mt-4 bg-white text-black border-[#FFE492] border py-3 rounded-lg font-medium transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
