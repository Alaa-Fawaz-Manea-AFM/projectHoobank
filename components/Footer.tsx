import { footerLinks, socialMedia } from "@/constants";
import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <section className="flex justify-center items-center sm:py-16 py-6 flex-col">
    <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
      <div className="flex-1 flex flex-col justify-start mr-10">
        <Link href="#">
          <Image
            src={logo}
            width={266}
            height={72}
            alt="hoobank"
            className="object-contain"
          />
        </Link>

        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[312px]">
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className="flex gap-4 flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px]">
              {footerlink.title}
            </h4>

            <ul className="list-none gap-4 flex flex-col">
              {footerlink.links.map((link) => (
                <li
                  key={link}
                  className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ {new Date().getFullYear()} HooBank. All Rights Reserved.
      </p>

      <div className="flex gap-6 flex-row md:mt-0 mt-6">
        {socialMedia.map((social) => (
          <Image
            key={social.id}
            src={social.icon}
            alt={social.id}
            width={21}
            height={21}
            className="object-contain cursor-pointer"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
