// COMPONENTS
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// ICONS
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
// ASSETS
import companyLogo from "@/public/company_logo.jpg";

const Topbar = () => (
  <nav className="grid grid-cols-2 p-4 border border-b-1">
    <Image src={companyLogo} alt="company_logo" width={150} height={150} />
    <div className="col-span-1 place-self-end flex items-center">
      <Button className="text-gray-600 font-semibold" variant="link" asChild>
        <Link className="flex items-center gap-1" href="#">
          Services <ArrowUpRight className="size-4" />
        </Link>
      </Button>
      <Button className="text-gray-400 font-semibold" variant="link" asChild>
        <Link className="flex items-center gap-1" href="#">
          Work <ArrowUpRight className="size-4" />
        </Link>
      </Button>
      <Button className="text-black font-semibold" variant="link" asChild>
        <Link className="flex items-center gap-1" href="#">
          About <ArrowDownRight className="size-4 text-primary" />
        </Link>
      </Button>
      <Button className="uppercase px-8">Get Started</Button>
    </div>
  </nav>
);

export default Topbar;
