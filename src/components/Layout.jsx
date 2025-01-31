import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "/images/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "tailwindcss/tailwind.css";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Footer from "./Footer";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Contact", to: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Layout() {
  return (
    <>
      <div className="min-h-full ">
        <Disclosure
          as="nav"
          className=" bg-gradient-to-r from-blue-950 to-slate-950 "
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="logo shrink-0 ">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-8 h-8 lg:w-12 lg:h-12 rounded-xl size-8"
                  />
                </div>
                <h5 className=" text-sm text-gray-100 tracking-widest mx-6 font-semibold font-mono">
                  TECH IN GAMBIA
                </h5>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4 text-gray-50 font-mono font-bold">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        // aria-current={
                        //     item.current
                        //         ? "page"
                        //         : undefined
                        // }
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? "bg-blue-600 text-white"
                              : "text-gray-300 hover:bg-blue-600 hover:text-white",
                            "rounded-md px-3 py-2 text-xl"
                          )
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden items-start justify-start text-start">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 font-mono font-bold">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  // aria-current={
                  //     item.current ? "page" : undefined
                  // }
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-blue-600 hover:text-white",
                      "block rounded-md px-3 py-2 text-xl"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
        {/* Your content */}
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
