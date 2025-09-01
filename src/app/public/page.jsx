import About from "@/components/About";
import HeaderCarousel from "@/components/HeaderCarousel";
import NoticeBoard from "@/components/NoticeBoard";
import React from "react";

export default function Home() {
  return (
    <div className="px-[2%] xl:px-[14%]">
      <header className="mt-5">
        <HeaderCarousel></HeaderCarousel>
      </header>
      {/* 6 section layout */}
      <div className="grid lg:grid-cols-3 gap-6 mt-10 items-stretch">
        {/* Main Sections - left/center 2 columns */}
        <div className="col-span-2 grid grid-rows-3 gap-6">
          <section>
            <About></About>
          </section>
          <div>Main section 2</div>
          <div>Main section 3</div>
        </div>

        {/* Aside Sections - right 1 column */}
        <div className="grid grid-rows-3 gap-6">
          <section><NoticeBoard /></section>
          <div>Aside section2</div>
          <div>Aside section3</div>
        </div>
      </div>
    </div>
  );
}
