import React from "react";
import { FaUser } from "react-icons/fa";

const Clergy = () => {
  return (
    <div className="flex-1 bg-[#f3eaf7] px-4 py-12 flex flex-col">

      {/* Heading (TOP LA FIXED) */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-700">
          தேவ ஊழியர்கள்
        </h2>
        <div className="w-12 h-[3px] bg-purple-600 mx-auto mt-2"></div>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center mt-30">

        <div className="flex gap-14">

          {/* Card 1 */}
          <div className="w-[280px] bg-white rounded-xl shadow-md p-8 text-center 
          transition duration-300 hover:shadow-xl hover:-translate-y-1">

            <div className="w-28 h-28 mx-auto mb-5 rounded-full 
            bg-gradient-to-br from-purple-500 to-purple-700 
            flex items-center justify-center text-white text-3xl">
              <FaUser />
            </div>

            <h3 className="font-semibold text-gray-800 text-lg">
              Rev. ஜெபரத்தினம்
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              சேகரத் தலைவர்
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-[280px] bg-white rounded-xl shadow-md p-8 text-center 
          transition duration-300 hover:shadow-xl hover:-translate-y-1">

            <div className="w-28 h-28 mx-auto mb-5 rounded-full 
            bg-gradient-to-br from-purple-500 to-purple-700 
            flex items-center justify-center text-white text-3xl">
              <FaUser />
            </div>

            <h3 className="font-semibold text-gray-800 text-lg">
             Mr. சுஜித்
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              சபை ஊழியர்
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Clergy;