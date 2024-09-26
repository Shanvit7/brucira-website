"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: object[];
}

const AvatarCircles = ({ className, avatarUrls }: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map(({ image = "", name = "" }, index: number) => (
        <Image
          key={index}
          className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
          src={image}
          width={40}
          height={40}
          alt={name}
        />
      ))}
    </div>
  );
};

export default AvatarCircles;
