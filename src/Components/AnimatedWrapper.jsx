import React from "react";
import { motion } from "framer-motion";

const AnimatedWrapper = ({ children, variant, delay = 0 }) => {
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

// const AnimatedWrapper = ({ variant, delay = 0, children }) => {
//   return;
//   <motion.div
//     initial={variant.initial}
//     whileInView={variant.whileInView}
//     transition={variant.transition(delay)}
//     viewport={{ once: true }}
//   >
//     {children}
//   </motion.div>;
// };

export default AnimatedWrapper;
