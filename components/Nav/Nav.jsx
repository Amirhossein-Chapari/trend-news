"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiDotsVertical, HiOutlineBookmark, HiOutlineSearch } from "react-icons/hi";
import { navItems, profile } from "../../data/Index";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      {/* Desktop Navbar */}
      <nav className="py-11 md:flex hidden">
        <div className="container md:flex hidden justify-between items-center  mx-auto">
          {/* LeftSide */}
          <div className="flex items-center  lg:gap-[60px] gap-[20px]">
            {/* Logo */}
            <div>
              <p className="text-[22px] text-secondary-100 font-Robot font-bold leading-[22px]">
                MEGA.news
              </p>
            </div>
            {/* NavLinks */}
            <div>
              <ul className="flex justify-evenly lg:gap-4 gap-2">
                {navItems.map(({ index, name, link, icon }) => (
                  <li key={index}>
                    {icon ? (
                      <Link href={link} className="flex items-center">
                        <p>{name}</p>
                        <p className="text-black-100/50 text-xl">{icon}</p>
                      </Link>
                    ) : (
                      <Link href={link} className="flex items-center">
                        <p>{name}</p>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* RightSide */}
          <div className="flex items-center gap-4">
            {/* SearchBar & ProfileSection */}
            <div className="flex items-center gap-4">
              <div className="hidden xl:flex">
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                <div className="absolute inset-y-0 start-4 flex items-center pointer-events-none">
                <HiDotsVertical 
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-600"
                />
              </div>
                  <input
                    type="search"
                    id="default-search"
                    className=" w-[250px] p-4 ps-10 pe-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-100 "
                    placeholder="Search Anything "
                  />
                  <div className="absolute inset-y-0 end-4 flex items-center ps-3 pointer-events-none">
                    <HiOutlineSearch
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-600 "
                    />
                  </div>
                </div>
              </div>
              <div>
                {profile.map(({ index, name, src, icon }) => (
                  <div key={index} className="flex items-center gap-2">
                    <Image
                      src={src}
                      alt={name}
                      className="w-12 h-12 rounded-xl"
                    />
                    <p>{name}</p>
                    <p className="w-4 h-4">{icon}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* BookMark */}
            <div className="rounded-xl bg-gray-100 w-12 h-12 flex justify-center items-center text-xl">
              <HiOutlineBookmark />
            </div>
          </div>
        </div>
      </nav>

      {/* Tablet Navbar */}
      <nav className=" py-4 md:hidden mobile:flex hidden shadow-md relative z-40">
  <div className="container flex flex-col mx-auto">
    <div className="flex justify-between">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <div>
          {/* hamburger Menu */}
          <div className="relative z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-gray-100 focus:outline-none focus:bg-gray-200 rounded-md"
            >
              <RxHamburgerMenu className="w-6 h-6" />
            </button>
            <div
              className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out z-40`}
            >
              <div className="w-[80%] mx-auto mt-4">
                <div className="flex justify-between items-center">
                  <p className="text-[22px] text-secondary-100 font-Robot font-bold leading-[22px]">
                    MEGA.news
                  </p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 focus:outline-none bg-gray-100 focus:bg-gray-200 rounded-md"
                  >
                    <IoCloseSharp className="w-6 h-6" />
                  </button>
                </div>
                <nav className="mt-8">
                  <ul className="flex flex-col gap-4">
                    {navItems.map(({ index, name, link, iconMobile }) => (
                      <li
                        key={index}
                        className="group hover:bg-gray-100 hover:p-4 hover:rounded-xl transition-all duration-300 ease-linear"
                      >
                        {iconMobile ? (
                          <div>
                            <Link
                              href={link}
                              className="flex items-center justify-between"
                            >
                              <p className="relative z-10 flex items-center">
                                <span className="h-[10px] absolute -left-2 top-2 bottom-0 w-1 bg-red-500 rounded-xl transition-transform duration-300 ease-linear transform scale-y-0 group-hover:scale-y-100 origin-top"></span>
                                {name}
                              </p>
                              <p className="text-black-100/50 text-xl transform transition-transform duration-300 ease-linear group-hover:rotate-90">
                                {iconMobile}
                              </p>
                            </Link>
                          </div>
                        ) : (
                          <Link href={link} className="flex items-center">
                            <p className="relative z-10 flex items-center">
                              <span className="h-[10px] absolute -left-2 top-2 bottom-0 w-1 bg-red-500 rounded-xl transition-transform duration-300 ease-linear transform scale-y-0 group-hover:scale-y-100 origin-top"></span>
                              {name}
                            </p>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[22px] text-secondary-100 font-Robot font-bold leading-[22px]">
            MEGA.news
          </p>
        </div>
      </div>
      {/* Profile */}
      <div className="flex gap-[25px] items-center">
        {profile.map(({ index, name, src, icon }) => (
          <div key={index} className="flex items-center gap-2">
            <Image src={src} alt={name} className="w-12 h-12 rounded-xl" />
            <p>{name}</p>
            <p className="w-4 h-4">{icon}</p>
          </div>
        ))}
        {/* BookMark */}
        <div className="rounded-xl bg-gray-100 w-12 h-12 flex justify-center items-center text-xl">
          <HiOutlineBookmark />
        </div>
      </div>
    </div>
    {/* SearchBar */}
    <div className="py-4">
      <div className="relative">
        <div className="absolute inset-y-0 start-4 flex items-center pointer-events-none">
          <HiDotsVertical aria-hidden="true" className="w-5 h-5 text-gray-600" />
        </div>
        <input
          type="search"
          id="default-search"
          className="w-full p-4 ps-10 pe-10 text-sm text-gray-800 border border-gray-300 rounded-xl bg-gray-100"
          placeholder="Search Anything"
          // style={{ padding: "14px 16px 14px 36px" }}
        />
        <div className="absolute inset-y-0 end-4 flex items-center pointer-events-none">
          <HiOutlineSearch aria-hidden="true" className="w-5 h-5 text-gray-600" />
        </div>
      </div>
    </div>
  </div>
</nav>


      {/* Mobile Navbar */}
      <nav className="container py-4 mobile:hidden flex shadow-md">
  <div className="container flex items-center justify-evenly mx-auto">
    {/* hamburger Menu */}
    <div className="relative z-50">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-gray-100 focus:outline-none focus:bg-gray-200 rounded-md"
        >
          <RxHamburgerMenu className="w-6 h-6" />
        </button>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-40`}
        >
          <div className="w-[80%] mx-auto mt-4">
            <div className="flex justify-between items-center">
              <p className="text-[22px] text-secondary-100 font-Robot font-bold leading-[22px]">
                MEGA.news
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 focus:outline-none bg-gray-100 focus:bg-gray-200 rounded-md"
              >
                <IoCloseSharp className="w-6 h-6" />
              </button>
            </div>
            <nav className="mt-8">
              <ul className="flex flex-col gap-4">
                {navItems.map(({ index, name, link, iconMobile }) => (
                  <li
                    key={index}
                    className="group hover:bg-gray-100 hover:p-4 hover:rounded-xl transition-all duration-300 ease-linear"
                  >
                    {iconMobile ? (
                      <div>
                        <Link
                          href={link}
                          className="flex items-center justify-between"
                        >
                          <p className="relative z-10 flex items-center">
                            <span className="h-[10px] absolute -left-2 top-2 bottom-0 w-1 bg-red-500 rounded-xl transition-transform duration-300 ease-linear transform scale-y-0 group-hover:scale-y-100 origin-top"></span>
                            {name}
                          </p>
                          <p className="text-black-100/50 text-xl transform transition-transform duration-300 ease-linear group-hover:rotate-90">
                            {iconMobile}
                          </p>
                        </Link>
                      </div>
                    ) : (
                      <Link href={link} className="flex items-center">
                        <p className="relative z-10 flex items-center">
                          <span className="h-[10px] absolute -left-2 top-2 bottom-0 w-1 bg-red-500 rounded-xl transition-transform duration-300 ease-linear transform scale-y-0 group-hover:scale-y-100 origin-top"></span>
                          {name}
                        </p>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/* Search Bar */}
    <div>
      <div className="relative">
        <div className="absolute z-10 inset-y-0 start-4 flex items-center pointer-events-none">
          <HiDotsVertical
            aria-hidden="true"
            className="w-5 h-5 text-gray-600"
          />
        </div>
        <input
          type="search"
          id="default-search"
          className="w-full p-4 ps-10 pe-10 text-sm text-gray-800 border border-gray-300 rounded-xl bg-gray-100"
          placeholder="Search Anything"
          // style={{ padding: "14px 16px 14px 36px" }}
        />
        <div className="absolute inset-y-0 end-4 flex items-center pointer-events-none">
          <HiOutlineSearch
            aria-hidden="true"
            className="w-5 h-5 text-gray-600"
          />
        </div>
      </div>
    </div>
  </div>
</nav>

    </React.Fragment>
  );
};

export default Nav;
