// COMPONENTS
import { Button } from "@/components/ui/button";
import FloatingLabelInput from "@/components/custom/floating-input";
// ICONS
import { ArrowRight } from "lucide-react";

const ContactForm = () => (
  <form className="space-y-6 md:space-y-2">
    <strong className="font-semibold text-2xl">
      Give us few details and we&apos;ll get in touch
    </strong>
    <div className="space-y-4">
      <FloatingLabelInput label="Name" required />
      <FloatingLabelInput label="Company name" />
      <FloatingLabelInput label="Email" required />
      <FloatingLabelInput label="Phone no" required />
      <FloatingLabelInput label="Message" required />
    </div>
    <div className="w-full items-center justify-center py-8">
      <Button className="flex gap-2 items-center w-full py-4 font-bold uppercase" variant="default" type="submit">
        Contact Us <ArrowRight className="size-5" />
      </Button>
    </div>
  </form>
);

export default ContactForm;
