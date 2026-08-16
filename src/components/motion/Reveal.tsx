"use client";

import {
  motion,
  useReducedMotion,
  Variants
} from "framer-motion";
import React from "react";

interface RevealContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function RevealContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: RevealContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0: staggerDelay,
        delayChildren: shouldReduceMotion ? 0: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
      >
      {children}
    </motion.div>
  );
}

interface RevealLineProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function RevealLine({
  children,
  className = "",
  as: Component = "span",
}: RevealLineProps) {
  const shouldReduceMotion = useReducedMotion();

  const lineVariants: Variants = {
    hidden: {
      y: shouldReduceMotion ? "0%": "100%",
      opacity: shouldReduceMotion ? 1: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0: 0.9,
        ease: [0.16,
          1,
          0.3,
          1] as const,
        // Added 'as const' to freeze tuple type
      },
    },
  };

  return (
    <Component className={`block overflow-hidden ${className}`}>
      <motion.span variants={lineVariants} className="block">
        {children}
      </motion.span>
    </Component>
  );
}