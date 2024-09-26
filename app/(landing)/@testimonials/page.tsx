// COMPONENTS
import TestimonialCarousel from "@/components/custom/testimonial-caraousel";
// CONSTANTS
import { TESTIMONIALS } from "@/lib/constant";

const Testimonials = () => (
  <>
    <div className="flex items-center gap-4 py-6">
      <hr className="border-1 border-primary w-12" />
      <b className="uppercase text-primary text-xl font-semibold">
        Testimony from our partners
      </b>
    </div>
    <TestimonialCarousel items={TESTIMONIALS} />
  </>
);

export default Testimonials;
