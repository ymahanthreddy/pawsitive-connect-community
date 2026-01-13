import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

export const Marquee = ({ 
  children, 
  speed = 30, 
  direction = "left",
  pauseOnHover = true 
}: MarqueeProps) => {
  return (
    <div className={`overflow-hidden ${pauseOnHover ? "group" : ""}`}>
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{
          animationPlayState: pauseOnHover ? undefined : "running",
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};
