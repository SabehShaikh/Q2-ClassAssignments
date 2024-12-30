import React from "react";
import Image from "next/image";
import { Sheet, SheetTrigger, SheetClose, SheetContent } from "./ui/sheet";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-[#043873] text-white pt-4 pr-8 pb-4 pl-8">
      <nav className="flex justify-between items-center">
        {/* Left: Logo */}
        <div>
          <Image src="/Images/logo.svg" alt="logo" width={191} height={34} />
        </div>

        {/* Center: Links */}
        <div className="hidden xl:flex">
          <ul className="flex gap-4">
            <li>
              <Link href="/">Products</Link>
            </li>
            <li>
              <Link href="/">Solutions</Link>
            </li>
            <li>
              <Link href="/">Resources</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
          </ul>
        </div>

        {/* Right: Buttons */}
        <div className="hidden lg:flex gap-4">
          <button className="px-7 py-3 bg-[#FFE492] rounded-[8px] text-black">
            Login
          </button>
          <button className="px-7 py-3 bg-[#4F9CF9] rounded-[8px] text-white flex items-center gap-2">
            Try Whitespace Free
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <button className="text-white focus:outline-none">
                <span className="text-2xl">&#9776;</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#044E82] text-white">
              <div className="flex flex-col items-center py-4 space-y-4">
                <SheetClose>
                  <Link href="/" className="text-lg">
                    Products
                  </Link>
                </SheetClose>
                <SheetClose>
                  <Link href="/" className="text-lg">
                    Solutions
                  </Link>
                </SheetClose>
                <SheetClose>
                  <Link href="/" className="text-lg">
                    Resources
                  </Link>
                </SheetClose>
                <SheetClose>
                  <Link href="/" className="text-lg">
                    Pricing
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
