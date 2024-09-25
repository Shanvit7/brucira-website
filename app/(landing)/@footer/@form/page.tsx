// COMPONENTS
import ContactForm from "@/components/custom/contact-form";
import Marquee from "@/components/ui/marquee";

const Form = () => (
  <>
    <div className="grid grid-cols-2 bg-footer">
      <div className="col-span-1 order-1 place-self-center">
        Lets Start Something new together
      </div>
      <div className="col-span-1 order-3 place-self-center">Users</div>
      <div className="col-span-1 order-2 place-self-center">
        <ContactForm />
      </div>
    </div>

    <Marquee className="bg-black max-h-20 uppercase text-white text-4xl">
      <div className="flex items-center">
        Unleash the Visual Impact <div className="min-h-8 w-1 bg-white mx-8" />
      </div>
    </Marquee>
  </>
);

export default Form;
