// COMPONENTS
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AvatarCircles from "@/components/ui/avatar-circles";
// ICONS
import { ArrowRight, Play } from "lucide-react";
// CONSTANTS
import { COMPANY_PERSONS } from "@/lib/constant";
// ASSETS - PERSON IMAGE
import person from "@/public/intro/person.png";

const Intro = () => (
  <div className="grid grid-cols-1 gap-16">
    <h1 className="uppercase font-everett font-medium text-6xl col-span-2">
      We are a <br /> global <span className="text-primary">production</span>{" "}
      <br /> agency
    </h1>

    <div className="col-span-1 flex gap-8 items-center justify-between flex-wrap">
      <div className="">
        <h2 className="font-semibold text-2xl">
          Designed with the specific needs of large B2B enterprises in mind,{" "}
          <br /> our platform offers a comprehensive solution to simplify.
        </h2>
        <div className="py-8 flex flex-wrap items-center gap-4">
          <Button className="p-4 px-6 font-bold text-base flex items-center gap-2">
            Get Professional Video Services
            <ArrowRight className="size-4" />
          </Button>
          <div className="flex items-center gap-2">
            <AvatarCircles avatarUrls={COMPANY_PERSONS} />
            <p className="font-everett font-medium">
              Marin / Ayesha <br />{" "}
              <span className="text-secondary opacity-60">
                {" "}
                Global Services{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          alt="Person"
          className="rounded-md"
          src={person}
          width={250}
          height={20}
        />
        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center">
          <Button className="flex items-center gap-2 px-8 py-3 bg-white/20  backdrop-filter backdrop-blur-xl rounded-full text-white font-everett font-medium hover:bg-opacity-30 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            <Play className="size-4 fill-white" /> Play Showreel
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
