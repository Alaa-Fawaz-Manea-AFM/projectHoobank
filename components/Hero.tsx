import { discount, robot } from "@/public/assets";
import { GetStarted } from ".";
import Image from "next/image";

const Hero = () => (
  <section className="flex md:flex-row flex-col sm:py-16 py-6">
    <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <Image src={discount} alt="discount" width={32} height={32} />
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2">
          <span>20% </span>
          Discount For
          <span> 1 Month </span>
          Account
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1
          className="flex-1 font-poppins font-semibold 
          ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]"
        >
          The Next <br className="sm:block hidden" />
          <span className="text-gradient block">Generation</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1
        className="flex-1 font-poppins font-semibold w-full
          ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px]"
      >
        Payment Method
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </h1>
    </div>

    <div
      className="relative flex-1 flex justify-center items-center
      md:my-0 my-10"
    >
      <Image src={robot} alt="billing" className=" w-screen h-screen z-[5]" />

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />

      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />

      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    <div className="ss:hidden flex justify-center items-center">
      <GetStarted />
    </div>
  </section>
);

export default Hero;
