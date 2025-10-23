"use client";

import { Code } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-logo-white/60 sticky top-0 z-50">
      <div className="max-w-[1400px] w-full mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-1 text-2xl font-bold">
              <span className="text-foreground">&lt;</span>
              <span className="text-logo-blue">&gt;</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight">
                CaledonCode
              </span>
              {/* Tagline directly under logo */}
              <p className="text-xs text-muted-foreground mt-0.5">
                Web. Code. Design. Deliver.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              size="sm"
              className="bg-logo-blue hover:bg-logo-blue/90 text-white rounded-full px-6"
              asChild
            >
              <Link href="https://caledoncode.vercel.app">Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
