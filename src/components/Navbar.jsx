import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/",         label: "முகப்பு" },
  { to: "/about",    label: "வரலாறு" },
  { to: "/timings",  label: "ஆராதனை நேரம்" },
  { to: "/clergy",   label: "தேவ ஊழியர்கள்" },
  { to: "/quiz",     label: "வேதாகம தேர்வு" },
  { to: "/magazine", label: "இதழ்" },
  { to: "/contact",  label: "தொடர்பு" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const desktopLinkClass = ({ isActive }) =>
    `px-4 py-4 block transition-colors duration-200 text-sm lg:text-base whitespace-nowrap ${
      isActive ? "bg-purple-900" : "hover:bg-purple-600"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block px-6 py-4 text-sm transition-colors duration-200 border-b border-purple-700/40 ${
      isActive ? "bg-purple-900" : "hover:bg-purple-600"
    }`;

  return (
    <div className="w-full">
      {/* TOP HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="py-4 px-4"
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <motion.img
            src="https://stthomassvk.github.io/Assets/Logo.jfif"
            alt="logo"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          />
          <div className="text-center sm:text-left">
            <motion.h1
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-700 leading-relaxed"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              பரிசுத்த தோமா ஆலயம்
            </motion.h1>
            <motion.p
              className="text-gray-600 text-xs sm:text-sm mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              சாம்பவர்வடகரை சேகரம் - திருநெல்வேலி திருமண்டலம்
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* MENU BAR */}
      <nav className="text-white" style={{ backgroundColor: "rgb(106, 27, 154)" }}>
        {/* Desktop menu */}
        <ul className="hidden md:flex flex-wrap justify-center max-w-6xl mx-auto">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={desktopLinkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile header row */}
        <div className="md:hidden flex items-center justify-between px-4">
          <span className="text-sm py-3 opacity-75">மெனு</span>
          <motion.button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="p-3 text-white focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={menuOpen ? "மெனுவை மூடு" : "மெனுவைத் திற"}
            whileTap={{ scale: 0.88 }}
            transition={{ duration: 0.15 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.ul
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="md:hidden border-t border-purple-700/50 overflow-hidden"
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: i * 0.04 }}
                >
                  <NavLink
                    to={link.to}
                    className={mobileLinkClass}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
