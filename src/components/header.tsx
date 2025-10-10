"use client";

import { Code } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="border-b border-border bg-logo-white/95 backdrop-blur supports-[backdrop-filter]:bg-logo-white/60 sticky top-0 z-50">
      <div className="w-full mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Code className="h-6 w-6 font-bold text-logo-blue" />
            <span className="text-2xl font-bold text-logo-blue">
              CaledonCode
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              size="sm"
              className="bg-logo-blue hover:bg-logo-blue/90 text-white rounded-full px-6"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
