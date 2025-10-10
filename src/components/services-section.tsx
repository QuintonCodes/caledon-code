"use client";

import { Code2, Palette, Sparkles, TrendingUp, Wrench } from "lucide-react";
import { motion } from "motion/react";

import ServiceCard from "./service-card";

const services = [
  {
    icon: <Palette className="h-6 w-6 text-logo-blue" />,
    title: "User-Centric Design",
    description:
      "Intuitive, research-driven interfaces with responsive layouts that prioritize user experience and accessibility across all devices.",
  },
  {
    icon: <Code2 className="h-6 w-6 text-logo-blue" />,
    title: "Robust Web Development",
    description:
      "Performance-optimized custom builds and e-commerce solutions using modern frameworks and best practices for scalability.",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-logo-blue" />,
    title: "Distinctive Brand Identity",
    description:
      "Comprehensive logo design, full branding kits, and dynamic animations that make your brand memorable and impactful.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-logo-blue" />,
    title: "Strategic Digital Insights",
    description:
      "Growth consultations, market analysis, and tech implementation support to drive your business forward strategically.",
  },
  {
    icon: <Wrench className="h-6 w-6 text-logo-blue" />,
    title: "Efficient Workplace Solutions",
    description:
      "Collaboration tools setup and ongoing IT support to keep your team productive and your systems running smoothly.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="space-y-12"
        >
          <motion.div
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { animationDuration: 0.5 },
            }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              What We Do Best
            </h2>
            <p className="text-lg text-muted-foreground text-pretty font-inter">
              Comprehensive digital services tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard service={service} key={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
