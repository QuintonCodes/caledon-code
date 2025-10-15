"use client";

import { motion } from "motion/react";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-logo-white">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden border-b border-border"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-logo-blue/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 relative">
          <motion.div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div variants={fadeInUp}>
              <span className="text-logo-blue font-semibold text-sm tracking-wider uppercase">
                Get in Touch
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              We would Love to Hear From You
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-inter"
            >
              Whether you have a question about our services, a project proposal, or just want to say hello, feel free to reach out.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
<motion.section
  className="py-16 sm:py-20 md:py-28 bg-muted/30"
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-logo-blue/10 via-white to-white rounded-3xl p-8 sm:p-12 md:p-16 border border-logo-blue/20 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
          Send us a Message
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
          We’re here to help. Fill out the form below and we’ll get back to you as soon as possible.
        </p>
      </div>

      <form className="mt-8 flex flex-col space-y-6 text-left">
        <div>
          <label htmlFor="name" className="sr-only">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full border border-input rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-input/30 dark:border-input"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full border border-input rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-input/30 dark:border-input"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">Your Message</label>
          <textarea
            id="message"
            placeholder="Your Message"
            rows={6}
            className="w-full border border-input rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-input/30 dark:border-input"
          ></textarea>
        </div>
        <Button
          type="submit"
          size="lg"
          className="bg-logo-blue hover:bg-logo-blue/90 text-white font-semibold rounded-full px-8 h-12 shadow-lg hover:shadow-xl transition duration-300"
          aria-label="Send Message"
        >
          Send Message
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </motion.div>
  </div>
</motion.section>


      {/* Final CTA Section */}
      <motion.section
        className="py-16 sm:py-20 md:py-28"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-logo-blue/10 via-logo-blue/5 to-transparent rounded-3xl p-8 sm:p-12 md:p-16 border border-logo-blue/20"
          >
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Explore Our Services
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
                Interested in what else we offer? Check out our full range of services or view our past work.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-4 gap-3 justify-center items-center">
              <Button
                size="lg"
                className="bg-logo-blue hover:bg-logo-blue/90 text-white font-semibold rounded-full px-8 h-12 shadow-lg hover:shadow-xl transition duration-300"
                asChild
                aria-label="Go to Services"
              >
                <Link href="/">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary font-semibold rounded-full px-8 h-12 bg-transparent transition duration-300"
                asChild
                aria-label="View Portfolio"
              >
                <Link href="/portfolio">View Our Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
