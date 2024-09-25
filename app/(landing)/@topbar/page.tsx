// COMPONENTS
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// ASSETS
import companyLogo from "@/public/company_logo.jpg";

const Topbar = () => (
  <nav className="grid grid-cols-2 p-4">
    <Image src={companyLogo} alt="company_logo" width={150} height={150} />
    <div className="col-span-1 place-self-end flex items-center gap-8">
      <Button variant="link" asChild>
        <Link href="#">Services</Link>
      </Button>
      <Button variant="link" asChild>
        <Link href="#">Work</Link>
      </Button>
      <Button variant="link" asChild>
        <Link href="#">About</Link>
      </Button>
       <Button>
         Get Started
       </Button>
    </div>
  </nav>
);

export default Topbar;
