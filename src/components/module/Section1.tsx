import Image from "next/image";
import MainBanner from "@statics/banner-utama.jpg";

export const Section1 = () => {
  return (
    <div id="home">
      <Image src={MainBanner} alt="Banner Utama" className="w-full" />
    </div>
  );
};
