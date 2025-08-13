"use client";

import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LanguageContext } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  const { language, toggleLanguage } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const langData = {
    bn: [
      { name: "মূলপাতা", href: "/" },
      { name: "পরিচিতি", items: [
        { name: "প্রতিষ্ঠান পরিচিতি", href: "/about/institute" },
        { name: "বিদ্যালয়ের তথ্যাদি", href: "/about/info" },
        { name: "স্কুল পরিচালকদের বাণী", href: "/about/message" },
      ] },
      { name: "জনবল", items: [
        { name: "শিক্ষক/শিক্ষিকা", href: "/staff/teachers" },
        { name: "স্কুল কমিটি সদস্যবৃন্দ", href: "/staff/committee" },
      ] },
      { name: "শিক্ষার্থী", items: [
        { name: "অধ্যয়নরত শিক্ষার্থীর সংখ্যা", href: "/students/count" },
        { name: "অধ্যয়নরত শিক্ষার্থীর তালিকা", href: "/students/list" },
      ] },
      { name: "পরীক্ষার ফলাফল", items: [
        { name: "পাবলিক পরীক্ষা", href: "/results/public" },
        { name: "বিদ্যালয়ের অভ্যন্তরীন পরীক্ষা", href: "/results/internal" },
      ] },
      { name: "ছবির গ্যালারী", href: "/gallery" },
      { name: "যোগাযোগ", href: "/contact" },
    ],
    en: [
      { name: "Home", href: "/" },
      { name: "About", items: [
        { name: "Institute Info", href: "/about/institute" },
        { name: "School Information", href: "/about/info" },
        { name: "Message from Directors", href: "/about/message" },
      ] },
      { name: "Staff", items: [
        { name: "Teachers", href: "/staff/teachers" },
        { name: "School Committee", href: "/staff/committee" },
      ] },
      { name: "Students", items: [
        { name: "Number of Students", href: "/students/count" },
        { name: "Student List", href: "/students/list" },
      ] },
      { name: "Results", items: [
        { name: "Public Exam", href: "/results/public" },
        { name: "Internal Exam", href: "/results/internal" },
      ] },
      { name: "Photo Gallery", href: "/gallery" },
      { name: "Contact", href: "/contact" },
    ],
  };

  const navItems = langData[language];

  return (
    <nav className={`mt-4 py-3 px-5 rounded-xl bg-white shadow-sm transition-all duration-300 ${scrolled ? "border-b border-gray-200" : ""}`}>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="https://bschool.pages.dev/assets/images/logo.svg" alt="Logo" width={250} height={56} priority />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex space-x-1 items-center">
          {navItems.map((item, idx) => item.items ? (
            <div key={idx} className="relative group">
              <span className={`py-2 px-4 rounded-full cursor-pointer transition-colors duration-300 ${item.items.some(sub => sub.href === pathname) ? "bg-[#019267] text-white" : "text-[#2c3333] hover:bg-[#019267] hover:text-white"}`}>
                {item.name} ▼
              </span>

              <AnimatePresence>
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg p-2 invisible group-hover:visible group-hover:opacity-100 opacity-0 group-hover:translate-y-0 translate-y-1 transition-all duration-300 z-50"
                >
                  {item.items.map((sub, sIdx) => (
                    <li key={sIdx}>
                      <Link href={sub.href} className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${pathname === sub.href ? "bg-[#019267] text-white" : "hover:bg-[#019267] hover:text-white"}`}>
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          ) : (
            <Link key={idx} href={item.href} className={`py-2 px-4 rounded-full transition-colors duration-300 ${pathname === item.href ? "bg-[#019267] text-white" : "text-[#2c3333] hover:bg-[#019267] hover:text-white"}`}>
              {item.name}
            </Link>
          ))}

          {/* Language Toggle */}
          <button onClick={toggleLanguage} className="py-2 px-4 rounded-full text-[#2c3333] hover:bg-[#019267] hover:text-white transition-colors duration-300">
            {language === "bn" ? "English" : "বাংলা"}
          </button>

          {/* Login Button */}
          <Link href="/login" className="flex items-center gap-2 py-2 px-4 font-bold rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors duration-300">
            <FaArrowRightToBracket /> Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 text-2xl focus:outline-none">
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 max-w-[400px] bg-white z-50 flex flex-col justify-between"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            {/* Top: Logo + Close */}
            <div className="flex justify-between items-center py-[18px] px-5 mb-6 bg-[#e6f4f0]">
              <Link href="/">
                <Image src="https://bschool.pages.dev/assets/images/logo.svg" alt="Logo" width={200} height={50} />
              </Link>
              <button onClick={() => setIsOpen(false)} className="text-2xl">
                <FaTimes />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 p-6 space-y-3 overflow-y-auto">
              {navItems.map((item, idx) =>
                item.items ? (
                  <div key={idx}>
                    <button className="w-full text-left py-2" onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}>
                      {item.name} {openDropdown === idx ? "▲" : "▼"}
                    </button>
                    {openDropdown === idx && (
                      <ul className="pl-4 space-y-1">
                        {item.items.map((sub, sIdx) => (
                          <li key={sIdx}>
                            <Link href={sub.href} className="block py-1 px-2 rounded-md hover:bg-[#019267] hover:text-white" onClick={() => setIsOpen(false)}>
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link key={idx} href={item.href} className="block py-2 px-2 rounded-md hover:bg-[#019267] hover:text-white" onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* Bottom: School Info + Login */}
            <div className="mt-4 p-6 space-y-3">
              <div className="text-sm text-gray-500">
                <p>EIIN No: <strong>121314</strong></p>
                <p>School code: <strong>123456</strong></p>
                <p>Reg. No: <strong>121314151617</strong></p>
              </div>
              <Link href="/login" className="w-full block py-2 text-center bg-green-500 text-white rounded-md hover:bg-green-600" onClick={() => setIsOpen(false)}>
                {language === "bn" ? "লগইন" : "Login"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
