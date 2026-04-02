import React from "react";
import { FaQuestionCircle, FaCheckCircle, FaBookOpen } from "react-icons/fa";

const Magazine = () => {
  return (
    <div className="flex-1 bg-[#f3eaf7] px-4 py-12 flex flex-col justify-center">
      {/* FULL HEIGHT CONTROL */}
      <div className="flex-1 w-full">
        {/* CENTER CONTAINER */}
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-700">
              நற்கந்தம் இதழ்
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
                  நற்கந்தம் மாத இதழ் - ஜனவரி 2026
                </p>

                {/* <div className="flex justify-center">
                  <button
                    className="flex items-center justify-center gap-3 w-full px-5 py-3 text-sm font-medium rounded-lg text-white 
  bg-gradient-to-r from-purple-600 to-purple-800 hover:opacity-90 transition"
                  >
                    <FaBookOpen className="text-lg" />
                    இதழை படிக்க
                  </button>
                </div> */}
                <div className="flex justify-center">
                  <a
                    href="https://drive.google.com/file/d/17ZUTIQRkQ2xb0_YX726ueC2uwkQMeeyX/view" // 👈 உன் real link இங்க போடு
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full px-5 py-3 text-sm font-medium rounded-lg text-white 
    bg-gradient-to-r from-purple-600 to-purple-800 hover:opacity-90 transition"
                  >
                    <FaBookOpen className="text-lg" />
                    இதழை படிக்க
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

export default Magazine;
