"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("bn");
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLanguage = () => setLanguage(language === "bn" ? "en" : "bn");

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  // Language Data
  const langData = {
    bn: [
      { name: "মূলপাতা", href: "/" },
      {
        name: "পরিচিতি",
        items: [
          { name: "প্রতিষ্ঠান পরিচিতি", href: "/about/institute" },
          { name: "বিদ্যালয়ের তথ্যাদি", href: "/about/info" },
          { name: "স্কুল পরিচালকদের বাণী", href: "/about/message" },
        ],
      },
      {
        name: "জনবল",
        items: [
          { name: "শিক্ষক/শিক্ষিকা", href: "/staff/teachers" },
          { name: "স্কুল কমিটি সদস্যবৃন্দ", href: "/staff/committee" },
        ],
      },
      {
        name: "শিক্ষার্থী",
        items: [
          { name: "অধ্যয়নরত শিক্ষার্থীর সংখ্যা", href: "/students/count" },
          { name: "অধ্যয়নরত শিক্ষার্থীর তালিকা", href: "/students/list" },
        ],
      },
      {
        name: "পরীক্ষার ফলাফল",
        items: [
          { name: "পাবলিক পরীক্ষা", href: "/results/public" },
          { name: "বিদ্যালয়ের অভ্যন্তরীন পরীক্ষা", href: "/results/internal" },
        ],
      },
      { name: "ছবির গ্যালারী", href: "/gallery" },
      { name: "যোগাযোগ", href: "/contact" },
    ],
    en: [
      { name: "Home", href: "/" },
      {
        name: "About",
        items: [
          { name: "Institute Info", href: "/about/institute" },
          { name: "School Information", href: "/about/info" },
          { name: "Message from Directors", href: "/about/message" },
        ],
      },
      {
        name: "Staff",
        items: [
          { name: "Teachers", href: "/staff/teachers" },
          { name: "School Committee", href: "/staff/committee" },
        ],
      },
      {
        name: "Students",
        items: [
          { name: "Number of Students", href: "/students/count" },
          { name: "Student List", href: "/students/list" },
        ],
      },
      {
        name: "Results",
        items: [
          { name: "Public Exam", href: "/results/public" },
          { name: "Internal Exam", href: "/results/internal" },
        ],
      },
      { name: "Photo Gallery", href: "/gallery" },
      { name: "Contact", href: "/contact" },
    ],
  };

  const navItems = langData[language];

  return (
    <nav
      className={`mt-4 py-3 px-5 rounded-xl bg-white shadow-sm transition-all duration-300 ${
        scrolled ? "border-b border-gray-200" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://bschool.pages.dev/assets/images/logo.svg"
            alt="Logo"
            width={250}
            height={56}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex space-x-1 items-center">
          {navItems.map((item, idx) =>
            item.items ? (
              <div key={idx} className="relative group">
                <span
                  className={`py-2 px-4 rounded-full cursor-pointer transition-colors duration-300 ${
                    item.items.some((sub) => sub.href === pathname)
                      ? "bg-[#019267] text-white"
                      : "text-[#2c3333] hover:bg-[#019267] hover:text-white"
                  }`}
                >
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
                        <Link
                          href={sub.href}
                          className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
                            pathname === sub.href
                              ? "bg-[#019267] text-white"
                              : "hover:bg-[#019267] hover:text-white"
                          }`}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={idx}
                href={item.href}
                className={`py-2 px-4 rounded-full transition-colors duration-300 ${
                  pathname === item.href
                    ? "bg-[#019267] text-white"
                    : "text-[#2c3333] hover:bg-[#019267] hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            )
          )}

          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="py-2 px-4 rounded-full text-[#2c3333] hover:bg-[#019267] hover:text-white transition-colors duration-300"
          >
            {language === "bn" ? "English" : "বাংলা"}
          </button>

          {/* Login button */}
          <Link
            href="/login"
            className="flex items-center gap-2 py-2 px-4 font-bold rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors duration-300"
          >
            <FaArrowRightToBracket /> Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="xl:hidden bg-white p-4 mt-2 rounded-xl shadow-md space-y-2"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            {navItems.map((item, idx) =>
              item.items ? (
                <div key={idx}>
                  <button
                    className={`w-full text-left py-2 font-semibold ${
                      item.items.some((sub) => sub.href === pathname)
                        ? "bg-[#019267] text-white rounded-lg"
                        : ""
                    }`}
                    onClick={() =>
                      setOpenDropdown(openDropdown === idx ? null : idx)
                    }
                  >
                    {item.name} {openDropdown === idx ? "▲" : "▼"}
                  </button>
                  {openDropdown === idx && (
                    <ul className="pl-4 space-y-1">
                      {item.items.map((sub, sIdx) => (
                        <li key={sIdx}>
                          <Link
                            href={sub.href}
                            className={`block py-1 px-2 rounded-md ${
                              pathname === sub.href
                                ? "bg-[#019267] text-white"
                                : "hover:bg-[#019267] hover:text-white"
                            }`}
                            onClick={toggleMenu}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={idx}
                  href={item.href}
                  className={`block py-2 px-2 rounded-md ${
                    pathname === item.href
                      ? "bg-[#019267] text-white"
                      : "hover:bg-[#019267] hover:text-white"
                  }`}
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              )
            )}

            {/* Language toggle */}
            <button
              onClick={() => {
                toggleLanguage();
                toggleMenu();
              }}
              className="w-full py-2 font-semibold"
            >
              {language === "bn" ? "English" : "বাংলা"}
            </button>

            {/* Login */}
            <Link
              href="/login"
              className="btn bg-green-500 text-white hover:bg-green-600 w-full mt-2"
              onClick={toggleMenu}
            >
              {language === "bn" ? "লগইন" : "Login"}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
