import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
    >
      <div className="relative flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-black text-foreground tracking-tighter"
        >
          K
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
          className="absolute -inset-4 border-2 border-primary rounded-full opacity-50"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute -bottom-4 left-0 h-[2px] bg-primary"
        />
      </div>
    </motion.div>
  );
}
