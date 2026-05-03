import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const socialLinks = [
  {
    href: "https://www.facebook.com/p/CSI_ST_Thomas_Church_Official-100090569541564/",
    icon: <FaFacebookF />,
    label: "Facebook",
    className: "bg-blue-600 hover:bg-blue-700",
  },
  {
    href: "https://www.instagram.com/csi_church_sambavarvadakarai/",
    icon: <FaInstagram />,
    label: "Instagram",
    className: "bg-gradient-to-r from-pink-500 to-orange-400",
  },
  {
    href: "https://www.youtube.com/channel/UCLSEpYebZDYU7qsxXIm_95Q",
    icon: <FaYoutube />,
    label: "YouTube",
    className: "bg-red-600 hover:bg-red-700",
  },
];

const Contact = () => {
  return (
    <PageWrapper>
      <div className="flex-1 bg-[#f3eaf7] px-4 py-12">
        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-700">
            தொடர்பு கொள்ள
          </h2>
          <div className="w-12 h-[3px] bg-purple-600 mx-auto mt-2" />
        </motion.div>

        {/* Map */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5131.0626105728425!2d77.39255307606415!3d9.00375849105655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b069d3b5a43d35d%3A0x2e676f66db838543!2sCSI%20St.%20Thomas%20Church!5e1!3m2!1sen!2sin!4v1773834934131!5m2!1sen!2sin"
            className="w-full max-w-4xl h-[220px] sm:h-[320px] md:h-[400px] rounded-2xl shadow-lg border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CSI St. Thomas Church location"
          />
        </motion.div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-white px-5 py-3 rounded-full min-h-[44px] text-sm ${link.className}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              whileHover={{ scale: 1.07, transition: { duration: 0.18 } }}
              whileTap={{ scale: 0.93, transition: { duration: 0.12 } }}
            >
              {link.icon}
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
