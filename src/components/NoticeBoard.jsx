import { GrAnnounce } from "react-icons/gr";
import { AlertCircle } from "lucide-react";

const notices = [
  {
    id: 1,
    title: "আগামীকাল মহান স্বাধীনতা দিবস উপলক্ষ্য ছুটি এবং কলেজ বন্ধ থাক...",
  },
  {
    id: 2,
    title: "২০২৪ ভর্তি সংক্রান্ত জরুরি বিজ্ঞপ্তি!!",
  },
  {
    id: 3,
    title: "সকল প্রিয়ন ১ম সেমিস্টার পরীক্ষার রুটিন",
  },
  {
    id: 4,
    title: "বেদস বিজ্ঞপ্তি জরুরি বিজ্ঞপ্তি!",
  },
  {
    id: 5,
    title: "পদস্থ বিষয় উপলক্ষ্য আগামীকাল ছুটি এবং কলেজ বন্ধ থাকিবে।",
  },
];

export default function NoticeBoard() {
  return (
    <div className="py-6 px-4 bg-gray-100">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-3">
          <GrAnnounce className="text-red-500 text-3xl" />
          <span className="text-gray-800">নোটিশ বোর্ড</span>
        </h2>
      </div>

      {/* Notices List */}
      <div className="space-y-3 mb-8">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="flex max-h-[64px] items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg
                       hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            {/* Red Alert Icon */}
            <div className="flex-shrink-0">
              <div
                className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center
                              hover:bg-red-500 transition-colors duration-300 ease-in-out"
              >
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Notice Text */}
            <div className="flex-grow">
              <p className="text-[#2c3333] font-semibold leading-relaxed line-clamp-2">
                {notice.title}
              </p>
            </div>

            {/* Details Link */}
            <div className="flex-shrink-0">
              <button
                className="py-2 px-3 rounded-full text-[#019267] bg-[#e6f4f0] text-sm font-semibold
                                 hover:text-white hover:bg-[#019267] transition-colors duration-300 ease-in-out"
              >
                বিস্তারিত
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* All Notices Button */}
      <div className="flex justify-center">
        <button
          className="py-[13px] px-4 font-semibold rounded-xl text-white bg-[#019267]
                           hover:text-[#019267] hover:bg-[#e6f4f0] transition-colors duration-300 ease-in-out"
        >
          সকল নোটিশ →
        </button>
      </div>
    </div>
  );
}
