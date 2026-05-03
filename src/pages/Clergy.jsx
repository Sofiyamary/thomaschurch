import React from "react";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const ClergCard = ({ name, role, delay, slideFrom }) => (
  <motion.div
    className="w-full sm:w-[280px] bg-white rounded-xl shadow-md p-8 text-center cursor-default"
    initial={{ opacity: 0, x: slideFrom }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay, ease: "easeOut" }}
    whileHover={{ y: -5, boxShadow: "0 14px 30px rgba(106,27,154,0.15)" }}
  >
    <motion.div
      className="w-28 h-28 mx-auto mb-5 rounded-full
      bg-gradient-to-br from-purple-500 to-purple-700
      flex items-center justify-center text-white text-3xl"
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.22 }}
    >
      <FaUser />
    </motion.div>
    <h3 className="font-semibold text-gray-800 text-lg">{name}</h3>
    <p className="text-sm text-gray-500 mt-1">{role}</p>
  </motion.div>
);

const Clergy = () => {
  return (
    <PageWrapper>
      <div className="flex-1 bg-[#f3eaf7] px-4 py-12 flex flex-col">
        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-700">
            தேவ ஊழியர்கள்
          </h2>
          <div className="w-12 h-[3px] bg-purple-600 mx-auto mt-2" />
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-10 w-full max-w-3xl mx-auto">
          <ClergCard
            name="Rev. ஜெபரத்தினம்"
            role="சேகரத் தலைவர்"
            delay={0}
            slideFrom={-30}
          />
          <ClergCard
            name="Mr. சுஜித்"
            role="சபை ஊழியர்"
            delay={0.1}
            slideFrom={30}
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Clergy;
