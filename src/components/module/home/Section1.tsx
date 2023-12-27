import Image from "next/image";
import MainBanner from "@statics/banner-utama1.jpg";

export const Section1 = () => {
  return (
    <div id="home" className=" relative w-full overflow-hidden flex items-center">
      <Image src={MainBanner} alt="Banner Utama" className="w-full" />
      <div className="absolute top-0 w-full h-full bg-primary-dark bg-opacity-40"></div>
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold absolute top-1/2 text-primary-dark-yellow mx-auto text-center w-full transform -translate-y-1/2 ">Your Best Partner In Transportation</h1>
    </div>
  );
};
