import { GrAnnounce } from "react-icons/gr";
import { PiLinkSimpleBold } from "react-icons/pi";

const notices = [
  {
    id: 1,
    title: "শিক্ষা মন্ত্রনালয়",
  },
  {
    id: 2,
    title: "মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা..",
  },
  {
    id: 3,
    title: "পরীক্ষার রেজাল্ট",
  },
  {
    id: 4,
    title: "ব্যানবেইস",
  },
  {
    id: 5,
    title: "নায়েম",
  },
  {
    id: 6,
    title: "এনসিটিবি",
  },
  {
    id: 6,
    title: "শিক্ষক বাতায়ন"
  },
];

export default function OtherLinks() {
  return (
    <div className="py-6 px-4 bg-gray-100">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-3">
          <GrAnnounce className="text-red-500 text-3xl" />
          <span className="text-gray-800">অন্যান্য লিঙ্ক সমূহ</span>
        </h2>
      </div>

      {/* Notices List */}
      <div className="space-y-3 mb-8">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="flex max-h-[45px] items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg
                       hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            {/* Red Alert Icon */}
            <div className="flex-shrink-0">
              <PiLinkSimpleBold className="w-6 h-6 text-red-400" />
            </div>

            {/* Notice Text */}
            <div className="flex-grow">
              <p className="text-[#2c3333] font-semibold leading-relaxed line-clamp-1">
                {notice.title}
              </p>
            </div>

            {/* Details Link */}
            <div className="flex-shrink-0">
              <button
                className="py-2 px-3 rounded-full text-[#019267] bg-[#e6f4f0] text-sm font-semibold
                                 hover:text-white hover:bg-[#019267] transition-colors duration-300 ease-in-out"
              >
                ভিজিট করুন
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
