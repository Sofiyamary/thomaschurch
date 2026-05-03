import React, { useState, useEffect } from "react";
import { supabase } from "../supabase";
import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";
import PageWrapper from "../components/PageWrapper";

const SkeletonCard = () => (
  <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden mx-auto max-w-sm animate-pulse">
    <div className="h-12 bg-purple-200" />
    <div className="p-5 space-y-3">
      <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto" />
      <div className="h-10 bg-gray-100 rounded-lg w-full" />
    </div>
  </div>
);

const Magazine = () => {
  const [items,   setItems]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error: err } = await supabase
        .from("posts")
        .select("*")
        .eq("type", "magazine")
        .order("created_at", { ascending: false });
      if (err) {
        setError("தரவை ஏற்றுவதில் பிழை ஏற்பட்டது.");
      } else {
        setItems(data || []);
      }
      setLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <PageWrapper>
      <div className="flex-1 bg-[#f3eaf7] px-4 py-12">
        <div className="max-w-6xl mx-auto">

          <motion.div className="text-center mb-10"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-700">நற்கந்தம் இதழ்</h2>
            <div className="w-12 h-[3px] bg-purple-600 mx-auto mt-2" />
          </motion.div>

          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
            </div>
          )}

          {!loading && error && (
            <div className="text-center text-red-400 text-sm py-16">{error}</div>
          )}

          {!loading && !error && items.length === 0 && (
            <motion.div className="text-center text-gray-400 py-20"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="text-5xl mb-4">📰</p>
              <p className="text-sm">விரைவில் இதழ்கள் வரும்.</p>
            </motion.div>
          )}

          {!loading && !error && items.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {items.map((item, i) => (
                <motion.div key={item.id}
                  className="w-full bg-white rounded-xl shadow-md overflow-hidden mx-auto max-w-sm"
                  initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                  whileHover={{ y: -4, boxShadow: "0 12px 28px rgba(106,27,154,0.14)" }}>
                  <div className="bg-gradient-to-r from-purple-700 to-purple-900 px-5 py-4 flex justify-between items-center">
                    <h3 className="text-white text-sm font-semibold">{item.month}</h3>
                    {i === 0 && (
                      <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full">புதிய</span>
                    )}
                  </div>
                  <div className="p-5 text-center">
                    <p className="text-sm font-medium text-gray-700 mb-1">{item.title}</p>
                    {item.description && (
                      <p className="text-xs text-gray-400 mb-3">{item.description}</p>
                    )}
                    {item.file_url ? (
                      <motion.a href={item.file_url} target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full px-5 py-3 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-purple-800 min-h-[44px] mt-3"
                        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.94 }}>
                        <FaBookOpen className="flex-shrink-0" /> இதழை படிக்க
                      </motion.a>
                    ) : (
                      <p className="text-xs text-gray-400 mt-3">கோப்பு கிடைக்கவில்லை</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Magazine;
