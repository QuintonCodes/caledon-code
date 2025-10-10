"use client";

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

type ServiceCardProps = {
  service: {
    icon: JSX.Element;
    title: string;
    description: string;
  };
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { animationDuration: 0.5 },
      }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Card className="h-full border-border hover:border-logo-blue/50 transition-all duration-300 hover:shadow-lg">
        <CardHeader className="space-y-4">
          <div className="w-12 h-12 rounded-lg bg-logo-blue/10 flex items-center justify-center">
            {service.icon}
          </div>
          <CardTitle className="text-xl font-bold text-card-foreground">
            {service.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground leading-relaxed font-inter">
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="ghost"
            className="text-logo-blue hover:text-white hover:bg-logo-blue font-semibold rounded-full px-4 py-2 transition-all duration-300 group"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
