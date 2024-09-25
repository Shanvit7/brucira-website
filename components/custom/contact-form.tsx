import { Button } from "@/components/ui/button";
import FloatingLabelInput from "@/components/custom/floating-input";

const ContactForm = ()=>(
    <form className="space-y-2">
        <strong>Give us few details and we&apos;ll get in touch</strong>
        <div className="space-y-2">
            <FloatingLabelInput label="Name"/>
            <FloatingLabelInput label="Company name"/>
            <FloatingLabelInput label="Email"/>
            <FloatingLabelInput label="Phone no"/>
            <FloatingLabelInput label="Message"/>
        </div>
        <div className="w-full">
         <Button className="block mx-auto" variant="default" type="submit">Contact Us</Button>
        </div>
    </form>
);

export default ContactForm;