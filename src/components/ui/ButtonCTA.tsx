"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AnchorHTMLAttributes } from "react";

interface ButtonCTAProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "secondary";
  pulse?: boolean;
  className?: string;
}

export default function ButtonCTA({
  href,
  variant = "primary",
  pulse = false,
  className,
  children,
  ...props
}: ButtonCTAProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60";
  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary/90 active:scale-[0.98] shadow-lg",
    secondary:
      "bg-white dark:bg-dark-surface text-primary border-2 border-primary hover:bg-primary/5",
  };

  return (
    <div className="relative inline-flex w-full justify-center">
      {pulse && (
        <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-primary" />
      )}
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.97 }}
        className={cn(base, variants[variant], className)}
        {...(props as object)}
      >
        {children}
      </motion.a>
    </div>
  );
}
