// COMPONENTS
import ContactForm from "@/components/custom/contact-form";
import Marquee from "@/components/ui/marquee";

const Footer = () => (
  <>
    <div className="grid grid-cols-2 bg-footer p-8">
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
       Unleash the Visual Impact <div className="min-h-8 w-1 bg-white mx-8"/>
      </div>
     </Marquee> 

    <div className="p-16">
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <h3 className="uppercase">Company</h3>
          <ul>
            <ol>Who Are We</ol>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="uppercase">Resources</h3>
          <ul>
            <ol>Blog</ol>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="uppercase">Work</h3>
          <ul>
            <ol>Video</ol>
            <ol>Shoot</ol>
            <ol>Post</ol>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="uppercase">Services</h3>
          <ul>
            <ol>Video</ol>
            <ol>Shoot</ol>
            <ol>Post</ol>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="uppercase">Contact</h3>
          <ul>
            <ol>Talk to us</ol>
            <ol>Collab</ol>
          </ul>
        </div>
      </div>

      <hr className="text-color=[#11101033] mt-20 mb-2" />
      <div className="flex items-center justify-between text-sm">
        <p>Copyright ©2023 Red Bangle</p>
        <div className="inline-flex items-center gap-8">
          <p>Privacy Policy</p>
          <p>Legal</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  </>
);

export default Footer;
