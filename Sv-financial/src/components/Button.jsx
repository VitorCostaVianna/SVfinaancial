import React from "react";
import { motion } from "framer-motion";

const Button = ({ href, text }) => {
  return (
    <motion.a
      href={href}
      className="inline-flex items-center bg-[#d08c65] text-[#fff7f8] px-6 py-3 rounded-full text-lg font-medium hover:bg-[#b67554] transition"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <motion.span
        className="text-2xl mr-2"
        variants={{
          rest: { x: 0 },
          hover: { x: 5 },
        }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        &rarr;
      </motion.span>
      <span>{text}</span>
    </motion.a>
  );
};

export default Button;