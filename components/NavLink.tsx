import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const NavLink = () => (
  <>
    {navLinks.map((nav) => (
      <li key={nav.id} className={`font-poppins font-normal text-[16px]`}>
        <Link href={nav.id}>{nav.title}</Link>
      </li>
    ))}
  </>
);

export default NavLink;
