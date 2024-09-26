// COMPONENTS
import { Button } from "@/components/ui/button";

const Landing = () => (
  <div className="grid-cols-2">
    <h1 className="uppercase col-span-2">We are a global production agency </h1>
    <div className="col-span-1">
      <h2>
        Designed with the specific needs of large B2B enterprises in mind, our
        platform offers a comprehensive solution to simplify.
      </h2>
      <Button variant="default">
        Get Professional Video Services
      </Button>
    </div>
    <div className="col-span-1"></div>
  </div>
);

export default Landing;
