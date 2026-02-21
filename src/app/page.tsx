"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowIntro(false);
  }, 2000);

  return () => clearTimeout(timer);
}, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">

      {/* INTRO SPLASH */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-background z-50"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-foreground leading-tight">
                ELVA
              </h1>
              <p className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase">
                Elevate Your Wellbeing
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN HERO CONTENT */}
      {!showIntro && (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-24 relative">

          {/* Background Gradient */}
          <div className="absolute inset-0 bg-subtle-gradient -z-10" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" />

          <div className="max-w-4xl w-full text-center space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase">
                Personalized AI Yoga Experience
              </span>

              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-foreground leading-tight">
                Your Body. Your Flow. <br />
                <span className="text-primary">Your AI Coach.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed"
            >
              An intelligent wellness platform that designs yoga sessions based on your body, lifestyle, and goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Link href="/onboarding">
                <Button size="lg" className="group text-black text-lg px-8 py-6 h-auto">
                  Lets Begin
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Decorative Circles */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: "4s" }} />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: "5s" }} />
        </div>
      )}
    </main>
  );
}