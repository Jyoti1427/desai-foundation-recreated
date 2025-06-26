// Navbar.jsx
import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/dflogo.png";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";


const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "About", path: "/about" },
      { label: "Our Team", path: "/about/our-team" },
    ],
  },
  {
    label: "What We Do",
    path: "/what-we-do",
    children: [
      {
        label: "Our work",
        path: "/what-we-do/our-work",
        subItems: [
          { label: "Health", path: "/what-we-do/our-work#health" },
          { label: "Livelihood", path: "/what-we-do/our-work#livelihood" },
          {
            label: "Menstrual Equity",
            path: "/what-we-do/our-work#menstrual-equity",
          },
          { label: "Climate", path: "/what-we-do/our-work#climate" },
        ],
      },
      { label: "Beneficiary Stories", path: "/what-we-do/beneficiary-stories" },
      { label: "Regional Map", path: "/what-we-do/regional-map" },
    ],
  },
  { label: "News + Events", path: "/news-events" },
  {
    label: "Our Impact",
    path: "/our-impact",
    children: [
      { label: "Our Impact", path: "/our-impact/our-impact" },
      { label: "Awards & Recognition", path: "/our-impact/awards-recognition" },
     
    ],
  },
  {
    label: "Take Action",
    path: "/take-action",
    children: [
      { label: "Donation", path: "/take-action/donation" },
      { label: "Get Involved", path: "/take-action/get-involved" },
       { label: "Partner with us", path: "/take-action/get-involved#partner-with-us" },
    ],
  },
  { label: "India Site", path: "https://thedesaifoundation.org" },
];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full z-50 border-b-2 border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div>
          <img src={logo} alt="Logo" className="h-24 md:h-20" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <DesktopMenu navItems={navItems} />
        </div>

        <button className="btn-primary mt-3 py-3 hidden font-extrabold md:inline-block">
          DONATE NOW
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl p-3 bg-pink-600 text-white rounded-full"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          {isDrawerOpen ? <RxCross2 /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-pink-600 z-40  max-h-fit overflow-y-auto shadow-md"
          >
            <MobileMenu navItems={navItems} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
