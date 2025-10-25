import About from "@/components/About";
import HeaderCarousel from "@/components/HeaderCarousel";
import ImportantLinks from "@/components/ImportantLinks";
import NoticeBoard from "@/components/NoticeBoard";
import OtherLinks from "@/components/OtherLinks";
import React from "react";

export default function Home() {
  return (
    <div className="px-[2%] xl:px-[14%]">
      <header className="mt-5">
        <HeaderCarousel></HeaderCarousel>
      </header>
      {/* 6 section layout */}
      <div className="lg:flex lg:gap-6 mt-10">
  {/* Left 2-column sections */}
  <div className="lg:flex-1 space-y-6">
    <About />
    <div className="h-[200px]">Main section 2</div>
    <div>Main section 3</div>
  </div>

  {/* Right 1-column sections */}
  <div className="lg:w-[424px] space-y-6">
    <NoticeBoard />
    <ImportantLinks />
    <OtherLinks />
  </div>
</div>

    </div>
  );
}
