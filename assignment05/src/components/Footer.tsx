import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <section className="bg-[#043873] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Try Whitepace
            <br />
            today
          </h2>
          <p className="mb-2">Get started for free.</p>
          <p className="mb-6">Add your whole team as your needs grow.</p>

          <button className="bg-[#4F9CF9] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center gap-2 mx-auto">
            Try Taskkey free <ArrowRight className="w-4 h-4" />
          </button>

          <p className="mt-8 mb-6">On a big team? Contact sales</p>

          <div className="flex justify-center gap-8">
            <Image
              src="/images/Apple.png"
              alt="Apple"
              width={40}
              height={40}
              className="w-8 h-8"
            />
            <Image
              src="/images/Window.png"
              alt="Windows"
              width={40}
              height={40}
              className="w-8 h-8"
            />
            <Image
              src="/images/Android.png"
              alt="Android"
              width={40}
              height={40}
              className="w-8 h-8"
            />
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#043873] text-white pt-16 pb-8 px-4 border-t border-blue-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div className="">
            <Image
              src="/images/Logo.svg"
              alt="Whitepace"
              width={160}
              height={40}
              className="mb-4"
            />
            <p className="text-sm mb-4">
              Whitepace was created for <br /> the new ways we live and <br />{" "}
              work. We make a better <br /> workspace around the world.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/overview">Overview</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/customer-stories">Customer stories</Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/guides">Guides & tutorials</Link>
              </li>
              <li>
                <Link href="/help-center">Help center</Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/media-kit">Media kit</Link>
              </li>
            </ul>
          </div>

          {/* Try It Today Section */}
          <div>
            <h3 className="font-semibold mb-4">Try It Today</h3>
            <p className="text-sm mb-4">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <button className="bg-[#4F9CF9] text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors flex items-center gap-2">
              Start today <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm">
              English <ChevronDown className="w-4 h-4" />
            </button>
            <Link href="/terms" className="text-sm">
              Terms & privacy
            </Link>
            <Link href="/security" className="text-sm">
              Security
            </Link>
            <Link href="/status" className="text-sm">
              Status
            </Link>
          </div>
          <div className="text-sm">©2021 Whitepace LLC.</div>
          <div className="flex gap-4">
            <Facebook className="w-5 h-5" />
            <Twitter className="w-5 h-5" />
            <Linkedin className="w-5 h-5" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
