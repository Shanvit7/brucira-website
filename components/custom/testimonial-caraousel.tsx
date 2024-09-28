"use client";
// HOOKS
import { useState } from "react";
// COMPONENTS
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
// ASSETS
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
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-stretch min-h-[24rem]">
                    <div className="w-full lg:w-1/2 aspect-square relative mb-6 lg:mb-0">
                      <Image
                        src={image}
                        alt={name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-8 flex flex-col justify-between">
                      <p className="font-semibold text-lg sm:text-xl lg:text-2xl my-8">
                        {description}
                      </p>
                      <div className="mt-auto">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl">
                              {name},
                              <span className="text-base sm:text-lg lg:text-xl ml-2">
                                {company}
                              </span>
                            </h2>
                            <p className="font-semibold text-base sm:text-lg mt-2">
                              {title}
                            </p>
                          </div>
                          <div className="flex items-end gap-4 h-full">
                            <CarouselPrevious
                              onClick={handlePrevious}
                              className="relative inset-auto rounded-full border border-black w-12 h-10 sm:w-16 sm:h-10"
                            >
                              <ArrowLeftIcon className="h-4 w-4" />
                            </CarouselPrevious>
                            <CarouselNext
                              onClick={handleNext}
                              className="relative inset-auto bg-primary text-white rounded-full w-12 h-10 sm:w-16 sm:h-10"
                            >
                              <ArrowRightIcon className="h-4 w-4" />
                            </CarouselNext>
                          </div>
                        </div>
                      </div>
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
