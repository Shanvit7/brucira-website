// COMPONENTS
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => (
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
    <div className="col-span-1 text-4xl">
      <strong className="font-everett font-medium text-5xl">
        Frequently asked <br /> questions
      </strong>
    </div>
    <div className="col-span-1">
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-normal">
            How do I sign up ?
          </AccordionTrigger>
          <AccordionContent className="text-lg font-normal">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-normal text-start">
            What information do I need to provide during the sign-up process?
          </AccordionTrigger>
          <AccordionContent className="text-lg font-normal">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-normal">
            Is my information secure during the sign-up process?
          </AccordionTrigger>
          <AccordionContent className="text-lg font-normal">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-normal">
            Who can apply?
          </AccordionTrigger>
          <AccordionContent className="text-lg font-normal">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-normal">
            What are the terms and conditions for the collaboration?
          </AccordionTrigger>
          <AccordionContent className="text-lg font-normal">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="text-lg font-normal">
            What is the minimum duration of the contract?
          </AccordionTrigger>
          <AccordionContent className="text-lg font-normal">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
);

export default Faqs;
