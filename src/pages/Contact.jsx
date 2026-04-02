import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex-1 bg-[#f3eaf7] px-4 py-12">
      {/* Heading (same style) */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-700">
          தொடர்பு கொள்ள
        </h2>
        <div className="w-12 h-[3px] bg-purple-600 mx-auto mt-2"></div>
      </div>

      {/* Map */}
      <div className="flex justify-center mb-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5131.0626105728425!2d77.39255307606415!3d9.00375849105655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b069d3b5a43d35d%3A0x2e676f66db838543!2sCSI%20St.%20Thomas%20Church!5e1!3m2!1sen!2sin!4v1773834934131!5m2!1sen!2sin"
          className="w-full max-w-4xl h-[380px] rounded-2xl shadow-lg"
        ></iframe>
      </div>

      {/* Social Buttons */}
      <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="https://www.facebook.com/p/CSI_ST_Thomas_Church_Official-100090569541564/"
          target="_blank"
          className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition hover:scale-105"
        >
          <FaFacebookF />
          Facebook
        </a>

        <a
          href="https://www.instagram.com/csi_church_sambavarvadakarai/"
          target="_blank"
          className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-full transition hover:scale-105"
        >
          <FaInstagram />
          Instagram
        </a>

        <a
          href="https://www.youtube.com/channel/UCLSEpYebZDYU7qsxXIm_95Q"
          target="_blank"
          className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition hover:scale-105"
        >
          <FaYoutube />
          YouTube
        </a>
      </div>
    </div>
  );
};

export default Contact;
