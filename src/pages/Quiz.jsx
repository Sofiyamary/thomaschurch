import React from "react";
import { FaQuestionCircle, FaCheckCircle } from "react-icons/fa";

const Quiz = () => {
  return (
    <div className="flex-1 bg-[#f3eaf7] px-4 py-12 flex flex-col justify-center">
      {/* FULL HEIGHT CONTROL */}
      <div className="flex-1 w-full">
        {/* CENTER CONTAINER */}
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-700">
              வேதாகம தேர்வு
            </h2>
            <div className="w-12 h-[3px] bg-purple-600 mx-auto mt-2"></div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card */}
            <div className="w-full max-w-[300px] bg-white rounded-xl shadow-md overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-700 to-purple-900 px-5 py-4 flex justify-between items-center">
                <h3 className="text-white text-sm font-semibold">ஜனவரி 2026</h3>
                <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full">
                  புதிய
                </span>
              </div>

              {/* Body */}
              <div className="p-6 text-center">
                <p className="text-sm text-gray-600 mb-6">
                  ஜனவரி மாத வேதாகம தேர்வு கேள்விகள் மற்றும் விடைகள்
                </p>

                <div className="flex justify-center gap-4">
                  <a
                    href="https://drive.google.com/file/d/1Qd7B1kbdfH0Bk6MJqjlmkn71IwtHmzO5/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm rounded-md text-white bg-gradient-to-r from-purple-500 to-purple-700"
                  >
                    <FaQuestionCircle />
                    கேள்விகள்
                  </a>

                  <a
                    href="https://drive.google.com/file/d/1To6_M3sNvoxmVC35DfLZ_YmgxjqKkCh2/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm rounded-md text-white bg-gradient-to-r from-purple-500 to-purple-700"
                  >
                    <FaCheckCircle />
                    விடைகள்
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
