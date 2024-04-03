"use client";
import { menu, close } from "@/public/assets";
import { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";

const toggleNav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sm:hidden relative flex justify-end flex-1 items-center">
      <Image
        src={toggle ? close : menu}
        width={28}
        height={28}
        alt="mune"
        className="cursor-pointer object-contain"
        onClick={() => setToggle((pre) => !pre)}
      />

      {toggle && (
        <ul
          onClick={() => setToggle((pre) => !pre)}
          className="bg-black-gradient-2 p-6 rounded-2xl list-none absolute flex flex-col gap-4 top-8 min-w-[140px] sidebar "
        >
          <NavLink />
        </ul>
      )}
    </div>
  );
};

export default toggleNav;
