"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineBookmark } from "react-icons/hi";
import { navItems, profile } from "../../data/Index";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      {/* Desktop Navbar */}
      <nav className="container py-11 md:flex hidden">
        <div className="lg:w-[80%] md:w-[90%] md:flex hidden justify-between items-center  mx-auto">
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
                <input
                  type="search"
                  placeholder="search"
                  className="bg-gray-100 border-none rounded-xl w-[250px]"
                  style={{ padding: "14px 16px 14px 16px" }}
                />
              </div>
              <div>
                {profile.map(({ index, name, src, icon }) => (
                  <div key={index} className="flex items-center gap-2">
                    <Image src={src} className="w-12 h-12 rounded-xl" />
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
      <nav className="w-[100%] py-4 md:hidden mobile:flex hidden shadow-md">
        <div className="flex flex-col w-[80%] mx-auto ">
          <div className="flex justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div>
                {/* SideNav */}
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
                    } transition-transform duration-300 ease-in-out`}
                  >
                    <div className="w-[80%] mx-auto mt-4">
                      <div className="flex justify-between items-center ">
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
                              className="group  hover:bg-gray-100 hover:p-4 hover:rounded-xl hover:transition-all duration-300 hover:ease-linear"
                            >
                              {iconMobile ? (
                                <div>
                                  <Link
                                    href={link}
                                    className="flex items-center justify-between"
                                  >
                                    <p className="relative z-10 flex  items-center">
                                      <span className="h-[10px] absolute  -left-2 top-2 bottom-0 w-1 bg-red-500 rounded-xl  transition-transform duration-300 ease-linear transform scale-y-0 group-hover:scale-y-100 origin-top"></span>
                                      {name}
                                    </p>
                                    <p className="text-black-100/50 text-xl transform transition-transform duration-300 ease-linear group-hover:rotate-90">
                                      {iconMobile}
                                    </p>
                                  </Link>
                                </div>
                              ) : (
                                <Link href={link} className="flex items-center">
                                  <p className="relative z-10 flex  items-center">
                                    <span className="h-[10px] absolute  -left-2 top-2 bottom-0 w-1 bg-red-500 rounded-xl  transition-transform duration-300 ease-linear transform scale-y-0 group-hover:scale-y-100 origin-top"></span>
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
            {/* BookMark */}
            <div className="flex gap-[25px] items-center">
              {profile.map(({ index, name, src, icon }) => (
                <div key={index} className="flex items-center gap-2">
                  <Image src={src} className="w-12 h-12 rounded-xl" />
                  <p>{name}</p>
                  <p className="w-4 h-4">{icon}</p>
                </div>
              ))}
              <div className="rounded-xl bg-gray-100 w-12 h-12 flex justify-center items-center text-xl">
                <HiOutlineBookmark />
              </div>
            </div>
          </div>
          {/* SearchBar */}
          <div className="py-4">
                <input
                  type="search"
                  placeholder="search"
                  className="bg-gray-100 border-none rounded-xl w-full"
                  style={{ padding: "14px 16px 14px 16px" }}
                />
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
