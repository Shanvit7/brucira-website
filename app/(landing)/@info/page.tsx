// COMPONENTS
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Info = () => (
  <div className="grid grid-cols-2">
    <div className="col-span-2 font-bold text-3xl">
      <h2>Our expertise and passion</h2>
      <h2>breathe life into your narratives</h2>
    </div>
    <div className="col-span-1"></div>
    <div className="col-span-1">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Innovative</AccordionTrigger>
          <AccordionContent>
            Creation, ensuring your messages resonate worldwide. From concept to
            distribution, our platform serves as your strategic partner.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Reliable</AccordionTrigger>
          <AccordionContent>
            Creation, ensuring your messages resonate worldwide. From concept to
            distribution, our platform serves as your strategic partner.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Quality</AccordionTrigger>
          <AccordionContent>
            Creation, ensuring your messages resonate worldwide. From concept to
            distribution, our platform serves as your strategic partner.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
);

export default Info;
