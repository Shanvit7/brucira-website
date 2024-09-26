// COMPONENTS
import ContactForm from "@/components/custom/contact-form";
import Marquee from "@/components/ui/marquee";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Form = () => (
  <>
    <div className="grid grid-cols-2 bg-footer">
      <div className="col-span-1  p-16">

        <h4 className="font-everett uppercase font-medium text-6xl">
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
              All-round advertising go to lady. Has a thing for stories: she
              calls this the side effect of a life lived with plot twists.
            </p>
            <p className="font-everett font-medium">Milly Cyrus, Global Lead</p>
          </div>

          <div className="space-y-6">
            <Avatar className="w-20 h-20">
              <AvatarImage src={"./intro/ayesha.png"} />
              <AvatarFallback>Ayesha</AvatarFallback>
            </Avatar>
            <p>
              All-round advertising go to lady. Has a thing for stories: she
              calls this the side effect of a life lived with plot twists.
            </p>
            <p className="font-everett font-medium">Vineeta Singh, Asst. Global Lead</p>
          </div>
        </div>
      </div>

      <div className="col-span-1 p-16 py-32">
        <ContactForm />
      </div>

    </div>

    <Marquee className="bg-black min-h-40 uppercase text-white text-4xl">
      <div className="flex items-center font-everett font-medium text-6xl">
        Unleash the Visual Impact <div className="min-h-12 w-2 bg-white mx-8" />
      </div>
    </Marquee>
  </>
);

export default Form;
