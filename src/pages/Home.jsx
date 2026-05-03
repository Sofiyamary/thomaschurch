import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

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

const Home = () => {
  return (
    <PageWrapper>
      <div className="w-full">
        {/* HERO */}
        <section
          className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] flex items-center justify-center text-center text-white"
          style={{
            backgroundImage:
              "url('https://stthomassvk.github.io/Assets/church_front.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-purple-900/60" />

          <motion.div
            className="relative z-10 px-4 max-w-3xl"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="text-xl sm:text-2xl md:text-4xl font-semibold mb-3 leading-snug"
              variants={fadeUp}
            >
              பரிசுத்த தோமா ஆலயத்திற்கு வரவேற்கிறோம்
            </motion.h1>
            <motion.p
              className="text-sm md:text-lg opacity-90"
              variants={fadeUp}
            >
              விசுவாசம், நம்பிக்கை மற்றும் அன்பின் இடம்
            </motion.p>
          </motion.div>
        </section>

        {/* SOCIAL SECTION */}
        <section className="py-12 text-center px-4">
          <motion.h2
            className="text-xl md:text-2xl text-purple-700 font-semibold mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            எங்களை தொடர்பு கொள்ள
          </motion.h2>

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
        </section>
      </div>
    </PageWrapper>
  );
};

export default Home;
