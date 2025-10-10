"use client";

import { ArrowRight, BarChart, Layers, Rocket } from "lucide-react";
import { motion } from "motion/react";

import Header from "@/components/header";
import TierCard from "@/components/tier-card";
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

const tiers = [
  {
    name: "Startup",
    target: "For Emerging Businesses",
    icon: <Rocket className="h-6 w-6 text-logo-blue" />,
    description:
      "Perfect for new ventures looking to establish their digital presence with essential tools and professional branding.",
    features: [
      "Custom website design & development",
      "Complete brand kit with logo",
      "Basic SEO optimization",
      "Mobile-responsive design",
      "Contact form integration",
    ],
    featured: false,
  },
  {
    name: "Elevate",
    target: "For Growing Companies",
    icon: <Layers className="h-6 w-6 text-logo-blue" />,
    description:
      "Ideal for businesses ready to scale with interactive features, enhanced content, and deeper user engagement.",
    features: [
      "Interactive design elements",
      "Dynamic banners & animations",
      "Enhanced content depth",
      "Advanced SEO strategies",
      "Analytics integration",
      "Social media integration",
    ],
    featured: true,
  },
  {
    name: "Excel",
    target: "For Established Enterprises",
    icon: <BarChart className="h-6 w-6 text-logo-blue" />,
    description:
      "Comprehensive solution for organizations requiring advanced features, full interactivity, and continuous support.",
    features: [
      "Advanced SEO integration",
      "Full site interactivity",
      "Custom functionality",
      "Ongoing support & maintenance",
      "Performance optimization",
      "Priority technical support",
    ],
    featured: false,
  },
];

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
              Empowering businesses with innovative web solutions. We&apos;re a
              collaborative community of developers, designers, and QA
              professionals focused on solving real-world problems and driving
              digital growth.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                className="bg-logo-blue hover:bg-logo-blue/90 text-white font-semibold rounded-full px-8 h-12 shadow-lg hover:shadow-xl duration-300"
              >
                Explore Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Growth-Focused Tiers Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto space-y-4"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Solutions Tailored to Your Growth
              </h2>
              <p className="text-lg text-muted-foreground text-pretty font-inter">
                Choose the package that fits your business stage and ambitions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 max-w-6xl mx-auto">
              {tiers.map((tier) => (
                <TierCard tier={tier} key={tier.name} />
              ))}
            </div>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Let&apos;s Build Something Great Together
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty font-inter">
                Ready to transform your digital presence? Our team is here to
                bring your vision to life with creativity, expertise, and
                dedication.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-logo-blue hover:bg-logo-blue/90 text-white font-semibold rounded-full px-8 h-12 shadow-lg hover:shadow-xl duration-300"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary font-semibold rounded-full px-8 h-12 bg-transparent duration-300"
              >
                View Our Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
