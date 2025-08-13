"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

const slides = [
  {
    img: "/assest/header1.png",
    text: "স্বাগতম এক্সওয়াইজেড স্কুল এবং <br /> কলেজ এর পক্ষ থেকে!",
  },
  {
    img: "/assest/header2.png",
    text: "স্বাগতম এক্সওয়াইজেড স্কুল এবং <br /> কলেজ এর পক্ষ থেকে!",
  },
  {
    img: "/assest/header3.png",
    text: "স্বাগতম এক্সওয়াইজেড স্কুল এবং <br /> কলেজ এর পক্ষ থেকে!",
  },
];

export default function HeaderCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full">
      <Carousel
        autoSlide
        interval={2000}
        onSlideChange={(index) => setActiveIndex(index)} // Active slide track
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[60vh]">
                <Image
                  src={slide.img}
                  alt={slide.text}
                  fill
                  priority
                  unoptimized
                  className="object-cover rounded-lg"
                />

                {/* Animated Text */}
                {activeIndex === index && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex} // slide change হলে animation হবে
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.8, delay: 0.5 }} // delay
                      className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg"
                    >
                      <h2
                        className="text-xl md:text-[40px] font-bold text-white text-center"
                        dangerouslySetInnerHTML={{ __html: slide.text }}
                      />
                    </motion.div>
                  </AnimatePresence>
                )}

                {/* Arrow Buttons */}
                <div className="absolute bottom-8 right-16 flex flex-row z-10">
                  <CarouselPrevious className="bg-green-500 hover:bg-green-600 text-white border-none p-3 rounded-full" />
                  <CarouselNext className="bg-green-500 hover:bg-green-600 text-white border-none p-3 rounded-full ml-2" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
