import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#F4F4F5] text-black py-8 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <section>
          <h1 className="text-2xl font-bold mb-4">Core Courses</h1>
          <ul className="space-y-2">
            <li>Programming Fundamentals</li>
            <li>Web2 Using NextJS</li>
            <li>Earn as you Learn</li>
          </ul>
        </section>

        {/* Middle Section */}
        <section>
          <h1 className="text-2xl font-bold mb-4">Advanced Courses</h1>
          <ul className="space-y-2">
            <li>Web 3 and Metaverse</li>
            <li>Cloud-Native Computing</li>
            <li>Artificial Intelligence (AI) and Deep Learning</li>
            <li>Ambient Computing and IoT</li>
            <li>Genomics and Bioinformatics</li>
            <li>Network Programmability and Automation</li>
          </ul>
        </section>

        {/* Right Section */}
        <section>
          <h1 className="text-2xl font-bold mb-4">Social Links</h1>
          <div className="flex items-center space-x-4 mb-4">
            <Link href="https://facebook.com" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-blue-500 border border-blue-500 rounded-lg hover:text-white hover:bg-blue-500" />
            </Link>
            <Link href="https://youtube.com" aria-label="YouTube">
              <Youtube className="w-6 h-6 text-red-500 border border-red-500 rounded-lg hover:text-white hover:bg-red-500" />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-blue-400 border border-blue-400 rounded-lg hover:text-white hover:bg-blue-400" />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-pink-500 border border-[#D68ED3] rounded-lg hover:text-white hover:bg-pink-500" />
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-6 h-6 text-gray-500" />
            <Link
              href="mailto:education@governorsindh.com"
              className="hover:underline"
            >
              education@governorsindh.com
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
