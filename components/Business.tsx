import { features } from "@/constants";
import { IFeatures } from "@/types";
import Image from "next/image";
import { Button } from ".";

const FeatureCard = ({ icon, title, content }: IFeatures) => (
  <div className="flex flex-row p-6 rounded-[20px] feature-card">
    <div className="flex justify-center items-center bg-dimBlue w-[64px] h-[64px] rounded-full">
      <Image
        src={icon}
        alt="icon"
        width={32}
        height={32}
        className="object-contain"
      />
    </div>

    <div className="flex-1 flex-col flex ml-3">
      <h4 className="font-poppins font-semibold text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className="flex md:flex-row flex-col sm:py-16 py-6">
    <div className="flex-1 flex justify-center items-start flex-col">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        You do the business, <br className="sm:block hidden" /> we’ll handle the
        money.
      </h2>

      <p className="max-w-[470px] mt-5 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>

      <Button styles="mt-10" />
    </div>

    <div className="flex-col gap-6 flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
      {features.map((feature) => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  </section>
);

export default Business;
