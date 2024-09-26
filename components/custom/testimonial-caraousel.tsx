"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

interface Item {
  image: StaticImageData;
  name: string;
  company: string;
  title: string;
  description: string;
}

const TestimonialCarousel = ({ items }: { items: Item[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < items.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <Carousel className="w-full mx-auto">
      <CarouselContent>
        {items.map(
          (
            {
              image = "",
              name = "...",
              title = "...",
              description = "...",
              company = "...",
            },
            index: number
          ) => (
            <CarouselItem
              key={index}
              className={index === currentIndex ? "block" : "hidden"}
            >
              <Card className="border-none shadow-none">
                <CardContent className="grid grid-cols-2 gap-4 p-0">
                  <div className="relative h-full">
                    <Image
                      src={image}
                      alt={name}
                      className="absolute inset-0 object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-2 h-full gap-40 ">
                    <p className="col-span-2 font-semibold text-2xl">
                      {description}
                    </p>

                    <div className="col-span-1 space-y-2 whitespace-nowrap">
                      <h2 className="font-bold text-3xl">
                        {name},<span className="text-lg">{company}</span>
                      </h2>
                      <p className="font-semibold text-lg">{title}</p>
                    </div>

                    <div className="col-span-1 place-self-end self-end flex items-center gap-2">
                      <CarouselPrevious
                        onClick={handlePrevious}
                        className="relative inset-auto rounded-xl border border-black"
                      >
                        <ArrowLeftIcon className="h-4 w-4" />
                      </CarouselPrevious>
                      <CarouselNext
                        onClick={handleNext}
                        className="relative inset-auto bg-primary text-white rounded-xl"
                      >
                        <ArrowRightIcon className="h-4 w-4" />
                      </CarouselNext>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          )
        )}
      </CarouselContent>
    </Carousel>
  );
};

export default TestimonialCarousel;
