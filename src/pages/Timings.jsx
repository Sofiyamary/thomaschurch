import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const cards = [
  {
    label: "தினசரி காலை ஆராதனை",
    time: "காலை 5:15",
    note: "(ஞாயிறு தவிர)",
    style: "bg-white border-t-4 border-purple-500",
  },
  {
    label: "தினசரி மாலை ஆராதனை",
    time: "மாலை 7:00",
    note: "(ஞாயிறு உட்பட)",
    style: "bg-white border-t-4 border-purple-500",
  },
  {
    label: "கர்த்தருடைய நாள்",
    time: "காலை 9:30",
    note: "(ஞாயிறு)",
    style: "bg-gradient-to-br from-[#f3e5f5] to-[#e1bee7] border-t-4 border-purple-500",
  },
  {
    label: "நற்கருணை ஆராதனை",
    time: "காலை 5:00",
    note: "(மாதம் முதல் நாள்)",
    style: "bg-gradient-to-br from-[#ede7f6] to-[#d1c4e9] border-t-4 border-purple-500",
  },
];

const Timings = () => {
  return (
    <PageWrapper>
      <div className="flex-1 bg-[#f3eaf7] px-4 py-12 flex flex-col">
        <div className="max-w-xl mx-auto w-full">
          {/* Title */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-700">
              ஆராதனை நேரங்கள்
            </h2>
            <div className="w-12 h-[3px] bg-purple-600 mx-auto mt-2" />
          </motion.div>

          {/* Cards */}
          <div className="space-y-5">
            {cards.map((card, i) => (
              <motion.div
                key={card.label}
                className={`rounded-xl shadow-md py-5 text-center cursor-default ${card.style}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.38, delay: i * 0.07, ease: "easeOut" }}
                whileHover={{ y: -4, boxShadow: "0 12px 28px rgba(106,27,154,0.15)" }}
              >
                <p className="text-gray-600 text-base mb-1">{card.label}</p>
                <h3 className="text-xl font-semibold text-purple-700">{card.time}</h3>
                <p className="text-sm text-gray-500">{card.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Timings;
