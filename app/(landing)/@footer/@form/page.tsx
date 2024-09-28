// COMPONENTS
import ContactForm from "@/components/custom/contact-form";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Form = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 bg-footer p-4 md:p-16">
    <div className="col-span-1">
      <h4 className="font-everett uppercase font-medium text-4xl md:text-6xl">
        Lets start
        <br />
        something
        <br />
        <span className="text-primary">new</span>
        <br />
        together
      </h4>

      <div className="grid grid-cols-2 gap-20 py-20">
        <div className="space-y-6">
          <Avatar className="w-20 h-20">
            <AvatarImage src={"./intro/marin.png"} />
            <AvatarFallback>Marin</AvatarFallback>
          </Avatar>
          <p>
            All-round advertising go to lady. Has a thing for stories: she calls
            this the side effect of a life lived with plot twists.
          </p>
          <p className="font-everett font-medium">Milly Cyrus, Global Lead</p>
        </div>

        <div className="space-y-6">
          <Avatar className="w-20 h-20">
            <AvatarImage src={"./intro/ayesha.png"} />
            <AvatarFallback>Ayesha</AvatarFallback>
          </Avatar>
          <p>
            All-round advertising go to lady. Has a thing for stories: she calls
            this the side effect of a life lived with plot twists.
          </p>
          <p className="font-everett font-medium">
            Vineeta Singh, Asst. Global Lead
          </p>
        </div>
      </div>
    </div>

    <div className="col-span-1 p-4 md:p-16 py-14 md:py-32">
      <ContactForm />
    </div>
  </div>
);

export default Form;
