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
// ICONS
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

interface Item {
  image: StaticImageData;
  name: string;
  title: string;
  description: string;
}

const TestimonialCarousel = ({ items }: { items: Item [] }) => {
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
    <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      <CarouselContent>
        {items.map(
          (
            { image = "", name = "...", title = "...", description = "..." },
            index: number
          ) => (
            <CarouselItem
              key={index}
              className={index === currentIndex ? "block" : "hidden"}
            >
              <Card className="border-none shadow-none">
                <CardContent className="flex flex-col md:flex-row items-center p-0">
                  <Image
                    src={image}
                    alt={name}
                    className="w-full md:w-1/2 h-48 md:h-64 object-cover"
                  />
                  <div className="w-full md:w-1/2 p-4 bg-white">
                    <h2 className="text-xl font-bold mb-2">{name}</h2>
                    <p className="text-sm text-gray-600 mb-4">{title}</p>
                    <p className="text-sm">{description}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <div className="flex justify-end mt-4 space-x-2">
        <CarouselPrevious
          onClick={handlePrevious}
          className="relative inset-auto"
        >
          <ArrowLeftIcon className="h-4 w-4" />
        </CarouselPrevious>
        <CarouselNext onClick={handleNext} className="relative inset-auto">
          <ArrowRightIcon className="h-4 w-4" />
        </CarouselNext>
      </div>
    </Carousel>
  );
};

export default TestimonialCarousel;
