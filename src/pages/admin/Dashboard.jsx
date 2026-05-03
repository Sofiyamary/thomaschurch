import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBook, FaNewspaper } from "react-icons/fa";
import AdminLayout from "../../components/AdminLayout";

const sections = [
  {
    to:          "/admin/bible-exam",
    icon:        <FaBook size={26} />,
    title:       "வேதாகம தேர்வு",
    subtitle:    "Bible Exam",
    description: "மாத தேர்வு கேள்விகள் மற்றும் விடைகளை சேர்க்கவும், திருத்தவும், நீக்கவும்.",
    gradient:    "from-purple-600 to-purple-800",
  },
  {
    to:          "/admin/magazine",
    icon:        <FaNewspaper size={26} />,
    title:       "நற்கந்தம் இதழ்",
    subtitle:    "Magazine",
    description: "மாத இதழ்களை பதிவேற்றவும், நிர்வகிக்கவும்.",
    gradient:    "from-indigo-600 to-indigo-800",
  },
];

const Dashboard = () => (
  <AdminLayout title="முகப்பு பலகை">
    <div className="py-2">
      <motion.p
        className="text-gray-500 text-sm mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        என்ன நிர்வகிக்க விரும்புகிறீர்கள்?
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {sections.map((s, i) => (
          <motion.div
            key={s.to}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            whileHover={{ y: -4, boxShadow: "0 14px 32px rgba(0,0,0,0.1)" }}
            className="rounded-2xl overflow-hidden cursor-pointer"
          >
            <Link to={s.to} className="block">
              <div className={`bg-gradient-to-br ${s.gradient} p-6 text-white`}>
                <div className="mb-3 opacity-90">{s.icon}</div>
                <h2 className="text-lg font-semibold">{s.title}</h2>
                <p className="text-xs opacity-60 mt-0.5">{s.subtitle}</p>
              </div>
              <div className="bg-white border border-gray-100 px-6 py-4">
                <p className="text-sm text-gray-500">{s.description}</p>
                <p className="text-purple-600 text-sm font-medium mt-2">
                  நிர்வகிக்க →
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </AdminLayout>
);

export default Dashboard;
