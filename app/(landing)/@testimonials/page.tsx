// COMPONENTS
import TestimonialCarousel from "@/components/custom/testimonial-caraousel";
// CONSTANTS
import { TESTIMONIALS } from "@/lib/constant";

const Testimonials = ()=> (
    <>
    <TestimonialCarousel items={TESTIMONIALS} />
    </>
);

export default Testimonials;
