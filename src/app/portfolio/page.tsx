"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { animationDuration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};


export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-logo-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-logo-blue/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-block">
              <span className="text-logo-blue font-semibold text-sm tracking-wider uppercase">
                Web. Code. Design. Deliver.
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
            >
              Our Services — Building Digital Solutions That Matter
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty font-inter"
            >
              Empowering businesses with innovative web solutions. We are a
              collaborative community of developers, designers, and QA
              professionals focused on solving real-world problems and driving
              digital growth.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                className="bg-logo-blue hover:bg-logo-blue/90 text-white font-semibold rounded-full px-8 h-12 shadow-lg hover:shadow-xl duration-300"
                asChild
              >
                <Link href="/portfolio">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

  {/* Website Tracker Section */}
<section className="py-20 md:py-28 bg-muted/30">
  <div className="container mx-auto px-4">
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="space-y-12"
    >
      {/* Section heading */}
      <motion.div
        variants={fadeInUp}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
          Track Your Website Performance in Real-Time
        </h2>
        <p className="text-lg text-muted-foreground text-pretty font-inter">
          Monitor traffic, engagement, and growth with our powerful website tracker. 
          Get insights that help you make data-driven decisions and improve your online presence.
        </p>
      </motion.div>

      {/* Feature Cards or Highlights */}
      <motion.div
        variants={fadeInUp}
        className="grid gap-8 md:grid-cols-3 text-center"
      >
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-primary mb-3">
            Real-Time Analytics
          </h3>
          <p className="text-gray-600">
            Get up-to-the-minute stats on visitor activity, traffic sources, and top-performing pages.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-primary mb-3">
            SEO & Performance Insights
          </h3>
          <p className="text-gray-600">
            Measure page speed, keyword rankings, and on-page performance to boost visibility.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-primary mb-3">
            User Engagement Metrics
          </h3>
          <p className="text-gray-600">
            Understand user behavior — track clicks, scroll depth, and conversion funnels easily.
          </p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div variants={fadeInUp} className="text-center mt-8">
        <a
          href="/contact"
          className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition"
        >
          Start Tracking Now
        </a>
      </motion.div>
    </motion.div>
  </div>
</section>

{/* Final CTA Section */}
<section className="py-20 md:py-28">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-logo-blue/10 via-logo-blue/5 to-transparent rounded-3xl p-12 md:p-16 border border-logo-blue/20"
    >
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Lets Build Something Great Together
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
          Ready to transform your digital presence? Our team is here to
          bring your vision to life with creativity, expertise, and
          dedication.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          size="lg"
          className="bg-logo-blue hover:bg-logo-blue/90 text-white font-semibold rounded-full px-8 h-12 shadow-lg hover:shadow-xl duration-300"
          asChild
        >
          <Link href="/">
            Our Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  </div>
</section>
    </main>
  );
}