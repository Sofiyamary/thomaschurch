import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const About = () => {
  return (
    <PageWrapper>
      <div className="w-full items-center flex-1 bg-[#f3eaf7] px-4 py-12 flex flex-col">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-2">
            ஆலய வரலாறு
          </h2>
          <div className="w-12 h-[3px] bg-purple-600 mx-auto" />
        </motion.div>

        {/* Card */}
        <motion.div
          className="bg-white rounded-xl shadow-xl p-6 md:p-10 flex flex-col items-center max-w-md w-full"
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
          whileHover={{ boxShadow: "0 16px 36px rgba(106,27,154,0.14)" }}
        >
          <motion.img
            src="https://img.freepik.com/free-vector/torn-style-coming-soon-promo-template-social-media-post_1017-55783.jpg?semt=ais_hybrid&w=740&q=80"
            alt="coming soon"
            className="w-64 md:w-72 rounded-lg shadow-md mb-6"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
          />
          <p className="text-purple-700 font-semibold text-lg">விரைவில்</p>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default About;
