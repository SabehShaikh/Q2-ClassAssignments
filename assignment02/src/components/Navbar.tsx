import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetClose, SheetContent } from "./ui/sheet";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#044E83] text-white py-6">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="absolute left-2 md:left-8">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
              priority
              className="cursor-pointer translate-y-1/4"
            />
          </Link>
        </div>

        <div></div>

        {/* Title */}
        <div className="flex-1 text-[#A8D8F3]   text-center text-sm md:text-xl font-semibold pl-6">
          <h2 className="block lg:hidden">Tuition Free Program</h2>
          <h2 className="hidden lg:block">
            Tuition Free Education Program on Latest Technologies
          </h2>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center">
          <ul className="flex gap-8 text-base font-medium">
            <li>
              <Link href="/" className="hover:text-[#A8D8F3]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[#A8D8F3]">
                Apply
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[#A8D8F3]">
                Jobs
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[#A8D8F3]">
                Result
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[#A8D8F3]">
                Courses
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <button className="text-white focus:outline-none">
                <span className="text-2xl">&#9776;</span>
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-[#044E82] text-white">
              <div className="flex flex-col items-center py-4 space-y-4">
                {/* Menu Links */}
                <SheetClose>
                  <Link href="/" className=" text-lg">
                    Home
                  </Link>
                </SheetClose>
                <SheetClose>
                  <Link href="/" className=" text-lg">
                    Apply
                  </Link>
                </SheetClose>
                <SheetClose>
                  <Link href="/" className=" text-lg">
                    Jobs
                  </Link>
                </SheetClose>
                <SheetClose>
                  <Link href="/" className=" text-lg">
                    Result
                  </Link>
                </SheetClose>
                <SheetClose>
                  <Link href="/" className="text-lg">
                    Courses
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
