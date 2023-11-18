"use client";
import React, { useState } from "react";
// import menu from "assets/menu.svg";
import { styles } from "@/app/style";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const [actice, setActice] = useState("");
  const [toggle, setToogle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary opacity-80`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActice("");
            window.scroll(0, 0);
          }}
        >
          <Image
            alt="logo"
            className="rounded-full"
            src={"/assets/logo-no-background.webp"}
            width={40}
            height={40}
          />
          <p className="text-white text-[18px] font-bold cursor-pointer ">
            Prashant
            <span className="sm:block hidden"> | Computer Engineering</span>
          </p>
        </Link>

        <ul className=" list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Links) => {
            return (
              <li
                key={Links.id}
                className={`${
                  actice === Links.title ? "text-[#915eff]" : "text-white"
                } hover:text-[#915eff] text-[18px] font-medium cursor-pointer`}
                onClick={() => setActice(Links.title)}
              >
                <a href={`#${Links.id}`}>{Links.title}</a>
              </li>
            );
          })}
          <li></li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={!toggle ? "/assets/menu.svg" : "/assets/close.svg"}
            width={28}
            height={28}
            alt="menu"
            loading="lazy"
            className="w-[28px] h-[28px] object-contain
        cursor-pointer"
            onClick={() => setToogle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-0 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className=" list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((Links) => {
                return (
                  <li
                    key={Links.id}
                    className={`${
                      actice === Links.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setActice(Links.title);
                      setToogle(!toggle);
                    }}
                  >
                    {Links.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
