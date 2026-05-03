import React from "react";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -10 },
};

const PageWrapper = ({ children }) => (
  <motion.div
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.35, ease: "easeInOut" }}
    className="flex-1 flex flex-col"
  >
    {children}
  </motion.div>
);

export default PageWrapper;
