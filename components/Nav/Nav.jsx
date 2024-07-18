import Image from "next/image";
import React from "react";
import { HiOutlineBookmark } from "react-icons/hi";
import { navItems, profile } from "../../data/Index";
import Link from "next/link";

const Nav = () => {
  return (
    <React.Fragment>
      <nav className="w-[100%] py-11">
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
          <div className="flex items-center gap-5">
            {/* SearchBar & ProfileSection */}
            <div className="flex items-center gap-4">
              <div className="hidden xl:flex">
                <input type="search" placeholder="search" className="bg-gray-100 border-none rounded-xl w-[250px]" style={{ padding: "14px 16px 14px 16px" }}/>
              </div>
              <div>
                {profile.map(({ index, name, src, icon }) => (
                  <div key={index} className="flex items-center gap-1">
                    <Image src={src} className="w-12 h-12 rounded-xl"/>
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
    </React.Fragment>
  );
};

export default Nav;
