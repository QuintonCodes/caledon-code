"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Rocket, ArrowRight } from "lucide-react";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { animationDuration: 0.5 },
};

export default function StartupPage() {
  return (
    <main className="min-h-screen bg-logo-white">
      <Header />

      {/* Hero Section */}
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-logo-blue/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.div variants={fadeInUp} className="inline-block">
              <span className="text-logo-blue font-semibold text-sm tracking-wider uppercase">
                Startup Package
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              Build Your Digital Foundation
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter"
            >
              Perfect for new ventures looking to establish their digital presence 
              with professional branding, a clean website, and essential SEO tools.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl space-y-12 text-center">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-xl bg-logo-blue/10 flex items-center justify-center">
              <Rocket className="h-8 w-8 text-logo-blue" />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Whats Included
            </h2>
            <ul className="text-left grid md:grid-cols-2 gap-6 text-muted-foreground font-inter">
              <li>✅ Custom website design & development</li>
              <li>✅ Complete brand kit with logo</li>
              <li>✅ Basic SEO optimization</li>
              <li>✅ Mobile-responsive design</li>
              <li>✅ Contact form integration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-8 bg-gradient-to-br from-logo-blue/10 via-logo-blue/5 to-transparent rounded-3xl p-12 border border-logo-blue/20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Launch Your Startup?
          </h2>
          <p className="text-lg text-muted-foreground font-inter">
            Get your business online with a professional, conversion-ready website designed for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-logo-blue hover:bg-logo-blue/90 text-white font-semibold rounded-full px-8 h-12"
              asChild
            >
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary rounded-full px-8 h-12"
              asChild
            >
              <Link href="/">Back to Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
