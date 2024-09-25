// COMPONENTS
import Image from "next/image";
import Link from "next/link";

// ASSETS
import companyLogo from "@/public/company_logo.jpg";

const Topbar = ()=>(
    <nav className="grid grid-cols-2">
        <Image src={companyLogo} alt="company_logo" width={150} height={150} />
        <div className="col-span-1 place-self-end flex items-center gap-8">
            <Link href="#">
             Services
            </Link>
            <Link href="#">
             Work
            </Link><Link href="#">
             About  
            </Link>
        </div>
    </nav>
);

export default Topbar;