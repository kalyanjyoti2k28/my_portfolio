import { motion } from "framer-motion";
import { Settings } from "lucide-react";

interface GearAnimationProps {
  size?: 'small' | 'medium' | 'large';
  reverse?: boolean;
  className?: string;
}

export default function GearAnimation({ size = 'medium', reverse = false, className = "" }: GearAnimationProps) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{
        duration: reverse ? 6 : 8,
        repeat: Infinity,
        ease: "linear"
      }}
      className={`${sizeClasses[size]} ${className}`}
    >
      <Settings className="w-full h-full text-current" />
    </motion.div>
  );
}
