"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
const navLinks = [
  {
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 border-b border-gray-500 dark:border-[#1b213b] left-0 right-0 bg-gray-200 dark:bg-[#121212] text-gray-900 z-20 duration-200">
      <div className="flex lg:py-4 flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="w-auto">
          <Image
            src="/images/logo.png"
            alt="portfolio logo"
            width={70}
            height={70}
          ></Image>
        </Link>
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded border-gray-600 dark:text-slate-200 dark:border-slate-200 dark:hover:text-white dark:hover:border-white "
              onClick={() => setNavbarOpen(true)}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded border-gray-600 dark:text-slate-200 dark:border-slate-200 dark:hover:text-white dark:hover:border-white"
              onClick={() => setNavbarOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="hidden md:block md:w-auto">
          <ul className="font-medium flex p-4 md:p-0 rounded-lg md:space-x-8 mt-0 md:items-center ">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink title={link.title} href={link.path} />
                </li>
              );
            })}
            <ThemeSwitch></ThemeSwitch>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
