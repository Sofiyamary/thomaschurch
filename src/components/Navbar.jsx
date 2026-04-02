import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menuClass = ({ isActive }) =>
    `px-6 py-4 block transition ${
      isActive ? "bg-purple-900" : "hover:bg-purple-600"
    }`;

  return (
    <div className="w-full">
      {/* TOP HEADER */}

      <div className="py-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 px-4">
          <img
            src="https://stthomassvk.github.io/Assets/Logo.jfif"
            alt="logo"
            className="w-16 h-16 object-contain"
          />

          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold text-purple-700 leading-relaxed">
              பரிசுத்த தோமா ஆலயம்
            </h1>

            <p className="text-gray-600 text-sm mt-1">
              சாம்பவர்வடகரை சேகரம் - திருநெல்வேலி திருமண்டலம்
            </p>
          </div>
        </div>
      </div>

      {/* MENU BAR */}

      <div
        className="text-white"
        style={{ backgroundColor: "rgb(106, 27, 154)" }}
      >
        <ul className="max-w-6xl mx-auto flex justify-center text-sm md:text-base">
          <li>
            <NavLink to="/" className={menuClass}>
              முகப்பு
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={menuClass}>
              வரலாறு
            </NavLink>
          </li>

          <li>
            <NavLink to="/timings" className={menuClass}>
              ஆராதனை நேரம்
            </NavLink>
          </li>

          <li>
            <NavLink to="/clergy" className={menuClass}>
              தேவ ஊழியர்கள்
            </NavLink>
          </li>

          <li>
            <NavLink to="/quiz" className={menuClass}>
              வேதாகம தேர்வு
            </NavLink>
          </li>

          <li>
            <NavLink to="/magazine" className={menuClass}>
              இதழ்
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={menuClass}>
              தொடர்பு
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
