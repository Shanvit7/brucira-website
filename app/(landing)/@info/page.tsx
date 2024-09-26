"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
// ASSETS
import one from "@/public/info/one.jpeg";
import two from "@/public/info/two.jpeg";
import three from "@/public/info/three.png";

const imageMap = {
  "item-1": one,
  "item-2": two,
  "item-3": three,
};

const Info = () => {
  const [openItem, setOpenItem] = useState(null);

  const handleAccordionChange = (value) => {
    setOpenItem(value);
  };

  return (
    <div className="grid grid-cols-10 gap-8">
      <div className="col-span-10">
        <h2 className="font-everett font-medium text-5xl">
          Our expertise and passion <br /> breathe life into your narratives
        </h2>
      </div>
      <div className="col-span-5">
        <Image
          src={openItem ? imageMap[openItem] : one}
          alt="info"
          width={550}
          height={900}
        />
      </div>
      <div className="col-span-5">
        <Accordion
          type="single"
          collapsible
          onValueChange={handleAccordionChange}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger
              className={`font-everett font-medium text-2xl ${
                openItem === "item-1" ? "open-trigger" : ""
              }`}
              hideHint
            >
              {openItem === "item-1" ? (
                <div className="text-start font-everett font-medium space-y-2">
                  <p className="text-primary text-xl">01</p>
                  <h5 className="text-3xl">Innovative</h5>
                </div>
              ) : (
                "Innovative"
              )}
            </AccordionTrigger>
            <AccordionContent>
              Creation, ensuring your messages resonate worldwide. From concept
              to distribution, our platform serves as your strategic partner.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger
              className={`font-everett font-medium text-2xl ${
                openItem === "item-2" ? "open-trigger" : ""
              }`}
              hideHint
            >
              {openItem === "item-2" ? (
                <div className="text-start font-everett font-medium space-y-2">
                  <p className="text-primary text-xl">02</p>
                  <h5 className="text-3xl">Reliable</h5>
                </div>
              ) : (
                "Reliable"
              )}
            </AccordionTrigger>
            <AccordionContent>
              Creation, ensuring your messages resonate worldwide. From concept
              to distribution, our platform serves as your strategic partner.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger
              className={`font-everett font-medium text-2xl ${
                openItem === "item-3" ? "open-trigger" : ""
              }`}
              hideHint
            >
              {openItem === "item-3" ? (
                <div className="text-start font-everett font-medium space-y-2">
                  <p className="text-primary text-xl">03</p>
                  <h5 className="text-3xl">Quality</h5>
                </div>
              ) : (
                "Quality"
              )}
            </AccordionTrigger>
            <AccordionContent>
              Creation, ensuring your messages resonate worldwide. From concept
              to distribution, our platform serves as your strategic partner.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Info;
