'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function HolographicText({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.span
      className={`bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent ${className ?? ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.span>
  );
}
