import { useState } from "react";
import { navLinks } from "../data";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="fixed w-full top-0 left-0 z-20 bg-purple-800">
      <div className="container mx-auto flex items-center justify-between py-4 px-2 ">
        <div className="flex items-center gap-2">
          <div className="rounded-full w-8 h-8 bg-white flex items-center justify-center text-black font-bold">
            MP
          </div>
          <p className="text-xl text-white">
            Martin <span className="opacity-80">Perez</span>
          </p>
        </div>
        <div className="md:flex hidden flex items-center gap-6">
          {navLinks.map((navLink) => {
            return (
              <div key={navLink.id}>
                <a
                  href={`#${navLink.href}`}
                  className="text-[1.1rem] text-white"
                >
                  {navLink.text}
                </a>
              </div>
            );
          })}
        </div>
        <HiMenuAlt3
          onClick={() => setToggle(!toggle)}
          className="cursor-pointer text-3xl md:hidden fill-white"
        />
      </div>
      {toggle && (
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          className="fixed right-0 top-0 bg-purple-800 h-screen text-white w-80"
        >
          <div className="flex flex-col gap-8 mt-[40%] ml-[30%]">
            {navLinks.map((navLink) => {
              return (
                <NavLinks key={navLink.id} {...navLink} setToggle={setToggle} />
              );
            })}
          </div>
          <HiX
            className="absolute right-4 text-3xl top-8 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
