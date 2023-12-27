import Image from "next/image";
import MainBanner from "@statics/banner-utama1.jpg";

export const Section1 = () => {
  return (
    <div id="home" className="max-h-96 relative w-full overflow-hidden flex items-center">
      <Image src={MainBanner} alt="Banner Utama" className="w-full" />
    </div>
  );
};
