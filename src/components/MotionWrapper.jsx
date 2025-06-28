// components/MotionWrapper.jsx
import { motion } from "framer-motion";

const MotionWrapper = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4 },
        },
      }}
      className="w-full" // ✅ add Tailwind class
      style={{ position: "relative" }} // ✅ fix iframe/layout bugs
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
