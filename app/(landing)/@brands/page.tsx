// COMPONENTS
import Image from "next/image";
import Marquee from "@/components/ui/marquee";
// CONSTANTS
import { BRANDS } from "@/lib/constant";

const Brands = () => (
  <Marquee>
    <div className="flex items-center">
      {BRANDS.map(({ logo = "", name = "" }, index: number) => (
        <Image
          src={logo}
          alt={name}
          key={index}
          height={125}
          width={125}
          className="mx-14"
        />
      ))}
    </div>
  </Marquee>
);

export default Brands;
