import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaFileDownload } from "react-icons/fa";
import { Roboto_Condensed } from "next/font/google";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "italic",
});

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-start items-center w-full h-full px-2">
        <div>
          <ul className="hidden md:flex xl:ml-[235px] ease-in duration-300">
            <li className="text-sm uppercase rounded hover:border-2 border-b-[#0e7490]">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase rounded hover:border-2 border-b-[rgb(14,116,144)]">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase rounded hover:border-2 border-b-[#0e7490]">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase rounded hover:border-2 border-b-[#0e7490]">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase rounded hover:border-2 border-b-[#0e7490]">
              <Link href="/resume">Resume</Link>
            </li>
            <li className="ml-10 text-sm uppercase rounded hover:border-2 border-b-[#0e7490]">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 overflow-auto"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between mb-[10%]">
              <h2
                className={`${roboto_condensed.className} text-3xl uppercase tracking-tighter`}
              >
                Anmol Goyal
              </h2>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li
                onClick={() => setNav(false)}
                className="pt-6 text-sm border-b border-gray-300 hover:border-l-4 hover:border-[#0e7490] hover:border-y-0"
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="pt-6 text-sm border-b border-gray-300 hover:border-l-4 hover:border-[#0e7490] hover:border-y-0"
              >
                <Link href="/#about">About</Link>
              </li>

              <li
                onClick={() => setNav(false)}
                className="pt-6 text-sm border-b border-gray-300 hover:border-l-4 hover:border-[#0e7490] hover:border-y-0"
              >
                <Link href="/#skills">Skills</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="pt-6 text-sm border-b border-gray-300 hover:border-l-4 hover:border-[#0e7490] hover:border-y-0"
              >
                <Link href="/#projects">Projects</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="pt-6 text-sm border-b border-gray-300 hover:border-l-4 hover:border-[#0e7490] hover:border-y-0"
              >
                <Link href="/resume">Resume</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="pt-6 text-sm border-b border-gray-300 hover:border-l-4 hover:border-[#0e7490] hover:border-y-0"
              >
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
            <div className="pt-[30%] h-auto">
              <p className="uppercase tracking-widest text-[#2f347a]">
                Let&#39;s Connect
              </p>
              <div className="w-full sm:w-[70%] md:w-[60%]">
                <div className="flex items-center justify-between my-4 ">
                  <a
                    href="https://www.linkedin.com/in/anmol07goyal/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/anmol20goyal?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <Link href="/#contact">
                    <div
                      onClick={() => setNav(!nav)}
                      className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                    >
                      <AiOutlineMail />
                    </div>
                  </Link>
                </div>
                {/* resume download button */}
                <div className="py-3 justify-center flex">
                  <button className="flex justify-center items-center bg-[#0e7490] hover:scale-110 hover:bg-[#0e7490] ease-in duration-300 ">
                    <p className="mr-2">Download Resume</p>
                    <FaFileDownload className="text-white justify-center" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
