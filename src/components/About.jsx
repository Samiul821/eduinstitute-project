"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import Image from "next/image";

export default function About() {
  const { language } = useContext(LanguageContext);
  const content = {
    en: {
      title: "About the Institution",
      description: `The past glory and present admirable state of Xwizehd School and College is noteworthy. 
      On 20th January 2023, Xwizehd School and College was established by Mr. Xwizehd, then chief officer of the local magistrate office. 
      At that time it was known as Xwizehd Government School. The management was entrusted to a committee of 18 enthusiastic individuals: 9 Bangladeshis, 1 Hindu, and 8 Muslims. 
      The school was started to educate local citizens in Bengali medium. On 1st May 2023, Mr. Xwizehd was appointed as the principal.`,
      button: "Read More",
    },
    bn: {
      title: "প্রতিষ্ঠান সম্পর্কে",
      description: `এক্সওয়াইজেধ স্কুল এবং কলেজ এর অতীত গৌরবোজ্জ্বল বর্তমান প্রশংসনীয়। 
      ২০২৩ ইংরেজীর ২০ শে জানুয়ারী এক্সওয়াইজেধ স্কুল এবং কলেজ এর স্থানীয় ম্যাজিষ্ট্রেট অফিসের তৎকালীন প্রধান কারণিক মি: এক্সওয়াইজেধ কর্তৃক প্রতিষ্ঠিত। 
      তখন এটা এক্সওয়াইজেধ গভর্ণমেন্ট স্কুল নামে পরিচিত ছিল। ৯ জন বাংলাদেশী, ১ জন হিন্দু ও ৮ জন মুসলমান বিদ্যোৎসাহী ব্যক্তির একটি কমিটির উপর এর পরিচালনার দায়িত্ব ন্যাস্ত ছিল। 
      এদেশের অধিবাসীদের বাংলায় শিক্ষায় শিক্ষিত করার জন্য এ বিদ্যালয় চালু করা হয়। ২০২৩ ইংরেজির ১ ই মে মি: এক্সওয়াইজেধ বিদ্যালয়ের প্রধান শিক্ষক নিযুক্ত হন।`,
      button: "বিস্তারিত পড়ুন",
    },
  };

  const text = language === "en" ? content.en : content.bn;

  return (
    <div className="flex relative">
      <div className="relative w-[424px] h-[560px]">
        <Image
          src="/assest/about-img.png"
          alt="about img"
          fill
          priority
          className="object-cover rounded-lg"
        />
      </div>

      <div className="absolute bottom-[12%] right-10 w-[530px] h-fit p-6 bg-white rounded-xl">
        <div className="pb-[10px] border-b-[6px] border-[#3ccf4e] w-fit">
          <h3 className="text-[31px] text-[#20262e] font-bold">{text.title}</h3>
        </div>
        <div className="pt-4">
          <p className="leading-7">{text.description}</p>
        </div>
        <button className="py-[7px] px-4 bg-[#e6f4f0] text-[#019267] hover:bg-[#019267] hover:text-white hover:duration-700 cursor-pointer rounded-3xl mt-4">
          {text.button}
        </button>
      </div>
    </div>
  );
}
