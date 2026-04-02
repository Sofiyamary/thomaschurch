import React from "react";

const Timings = () => {
  return (
    <div className="flex-1 bg-[#f3eaf7] px-4 py-12 flex flex-col ">

      <div className="max-w-xl mx-auto w-full">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-700">
            ஆராதனை நேரங்கள்
          </h2>
          <div className="w-12 h-[3px] bg-purple-600 mx-auto mt-2"></div>
        </div>

        {/* Cards */}
        <div className="space-y-5">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md py-5 text-center border-t-4 border-purple-500 
          transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <p className="text-gray-600 text-base mb-1">தினசரி காலை ஆராதனை</p>
            <h3 className="text-xl font-semibold text-purple-700">காலை 5:15</h3>
            <p className="text-sm text-gray-500">(ஞாயிறு தவிர)</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md py-5 text-center border-t-4 border-purple-500 
          transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <p className="text-gray-600 text-base mb-1">தினசரி மாலை ஆராதனை</p>
            <h3 className="text-xl font-semibold text-purple-700">மாலை 7:00</h3>
            <p className="text-sm text-gray-500">(ஞாயிறு உட்பட)</p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl shadow-md py-5 text-center border-t-4 border-purple-500 
          bg-gradient-to-br from-[#f3e5f5] to-[#e1bee7] 
          transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <p className="text-gray-700 text-base mb-1">கர்த்தருடைய நாள்</p>
            <h3 className="text-xl font-semibold text-purple-800">காலை 9:30</h3>
            <p className="text-sm text-gray-600">(ஞாயிறு)</p>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl shadow-md py-5 text-center border-t-4 border-purple-500 
          bg-gradient-to-br from-[#ede7f6] to-[#d1c4e9] 
          transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <p className="text-gray-700 text-base mb-1">நற்கருணை ஆராதனை</p>
            <h3 className="text-xl font-semibold text-purple-800">காலை 5:00</h3>
            <p className="text-sm text-gray-600">(மாதம் முதல் நாள்)</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Timings;