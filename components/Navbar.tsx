import { logo } from "@/public/assets";
import { NavLink, ToggleNav } from ".";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => (
  <nav
    id="home"
    className="w-full flex py-6 justify-between items-center navbar"
  >
    <Link href="#">
      <Image
        src={logo}
        width={124}
        height={32}
        alt="hoobank"
        className="cursor-pointer"
      />
    </Link>

    <ul className="list-none gap-10 sm:flex hidden justify-end items-center flex-1">
      <NavLink />
    </ul>
    <div className="sm:hidden relative flex justify-end flex-1 items-center">
      <ToggleNav />
    </div>
  </nav>
);

export default Navbar;
