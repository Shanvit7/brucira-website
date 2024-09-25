// COMPONENTS
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Marquee from "@/components/ui/marquee";
// ASSETS
import darwinBox from "@/public/companies/darwinbox.png";
import indeed from "@/public/companies/indeed.png";
import mycircle from "@/public/companies/mycircle.png";
import ikea from "@/public/companies/ikea.png";
import indiaGold from "@/public/companies/indiagold.png";
import healthifyMe from "@/public/companies/healthifyme.png";
import vymo from "@/public/companies/vymo.png";
import taneria from "@/public/companies/tanerai.png";

const Landing = () => (
  <div className="grid-cols-2">
    <h1 className="uppercase col-span-2">We are a global production agency </h1>
    <div className="col-span-1">
      <h2>
        Designed with the specific needs of large B2B enterprises in mind, our
        platform offers a comprehensive solution to simplify.
      </h2>
      <Button className="px-4">Get Professional Video Services</Button>
    </div>
    <div className="col-span-1"></div>
    <div className="col-span-2">
      <Marquee>
        <div className="flex items-center gap-8">
          <Image src={darwinBox} alt="Darwin Box" height={100} width={100} />
          <Image src={indeed} alt="Indeed" height={100} width={100} />
          <Image src={mycircle} alt="My Circle 11" height={100} width={100} />
          <Image src={ikea} alt="IKEA" height={100} width={100} />
          <Image src={indiaGold} alt="India Gold" height={100} width={100} />
          <Image
            src={healthifyMe}
            alt="Healthify Me"
            height={100}
            width={100}
          />
          <Image src={vymo} alt="Vymo" height={100} width={100} />
          <Image src={taneria} alt="Taneria" height={100} width={100} />
        </div>
      </Marquee>
    </div>
  </div>
);

export default Landing;
