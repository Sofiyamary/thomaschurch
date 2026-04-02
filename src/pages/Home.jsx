import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full">
      {/* HERO */}

      <section
        className="relative w-full h-[380px] md:h-[420px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://stthomassvk.github.io/Assets/church_front.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-purple-900/60"></div>

        <div className="relative z-10 px-4 max-w-3xl">
          <h1 className="text-2xl md:text-4xl font-semibold mb-3">
            பரிசுத்த தோமா ஆலயத்திற்கு வரவேற்கிறோம்
          </h1>

          <p className="text-sm md:text-lg opacity-90">
            விசுவாசம், நம்பிக்கை மற்றும் அன்பின் இடம்
          </p>
        </div>
      </section>

      {/* SOCIAL SECTION */}

      <section className="py-16 text-center">
        <h2 className="text-xl md:text-2xl text-purple-700 font-semibold mb-8">
          எங்களை தொடர்பு கொள்ள
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://www.facebook.com/p/CSI_ST_Thomas_Church_Official-100090569541564/" target="_blank"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition hover:scale-105"
          >
            <FaFacebookF />
            Facebook
          </a>

          <a
            href="https://www.instagram.com/csi_church_sambavarvadakarai/" target="_blank"
            className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-full transition hover:scale-105"
          >
            <FaInstagram />
            Instagram
          </a>

          <a
            href="https://www.youtube.com/channel/UCLSEpYebZDYU7qsxXIm_95Q" target="_blank"
            className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition hover:scale-105"
          >
            <FaYoutube />
            YouTube
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
