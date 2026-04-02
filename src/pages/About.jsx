import React from "react"

const About = () => {
  return (
    <div className="w-full items-center flex-1 bg-[#f3eaf7] px-4 py-12 flex flex-col ">

      {/* Title */}

      <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-2">
        ஆலய வரலாறு
      </h2>

      <div className="w-12 h-[3px] bg-purple-600 mb-8"></div>

      {/* Card */}

      <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 flex flex-col items-center max-w-md w-full">

        <img
          src="https://img.freepik.com/free-vector/torn-style-coming-soon-promo-template-social-media-post_1017-55783.jpg?semt=ais_hybrid&w=740&q=80"
          alt="coming soon"
          className="w-64 md:w-72 rounded-lg shadow-md mb-6 hover:scale-105 transition duration-300"
        />

        <p className="text-purple-700 font-semibold text-lg">
          விரைவில்
        </p>

      </div>

    </div>
  )
}

export default About