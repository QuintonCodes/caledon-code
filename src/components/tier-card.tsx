"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { JSX } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type TierCardProps = {
  tier: {
    name: string;
    slug?: string; // 👈 optional, but used for linking
    target: string;
    icon: JSX.Element;
    description: string;
    features: string[];
    featured: boolean;
  };
};

export default function TierCard({ tier }: TierCardProps) {
  return (
    <motion.div
      key={tier.name}
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { animationDuration: 0.5 },
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      {/* 👇 Wrap entire card with Link for click navigation */}
      <Link
        href={`/${tier.slug || tier.name.toLowerCase()}`}
        className="block h-full"
      >
        <Card
          className={`h-full border-2 ${
            tier.featured ? "border-logo-blue shadow-xl" : "border-border"
          } hover:shadow-lg transition-all duration-300 relative overflow-hidden`}
        >
          {tier.featured && (
            <div className="absolute top-0 right-0 bg-logo-blue text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
              Popular
            </div>
          )}

          <CardHeader className="space-y-4 pb-8">
            <div className="w-12 h-12 rounded-lg bg-logo-blue/10 flex items-center justify-center">
              {tier.icon}
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-card-foreground mb-2">
                {tier.name}
              </CardTitle>
              <p className="text-sm text-muted-foreground font-medium font-inter">
                {tier.target}
              </p>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <CardDescription className="text-muted-foreground leading-relaxed font-inter">
              {tier.description}
            </CardDescription>

            <ul className="space-y-3">
              {tier.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-card-foreground font-inter"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-logo-blue mt-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button
              className={`w-full font-semibold rounded-full shadow-md hover:shadow-lg duration-300 ${
                tier.featured
                  ? "bg-logo-blue hover:bg-logo-blue/90 text-white"
                  : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              }`}
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
