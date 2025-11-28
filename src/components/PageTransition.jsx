import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`max-w-5xl mx-auto p-6 md:p-10 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;