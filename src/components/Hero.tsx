import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, CheckCircle2, Phone, Pill, MapPin } from "lucide-react";
import { Config } from "@/config/config";

const images = ["/hero/hero1.png", "/hero/hero2.png", "/hero/hero3.png"];

export function Hero() {
  const config = new Config();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 pt-28 pb-24 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Container */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${images[index]})` }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 z-10 bg-linear-to-b from-slate-950/40 via-slate-950/70 to-slate-950" />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-4xl text-center">
        <Reveal>
          {/* Brand Pre-Title */}
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
            MEDULON PHARMA
          </p>

          {/* Value Proposition Headline */}
          <h1 className="mb-4 text-3xl font-black tracking-tighter leading-tight md:text-5xl lg:text-6xl">
            Bangalore's Trusted{" "}
            <span className="text-emerald-400">Pharmaceutical Partner</span>
          </h1>

          {/* Bangalore HQ Trust Badge */}
          <div className="mx-auto mb-6 inline-flex items-center gap-1.5 rounded-full bg-slate-800/60 px-3 py-1.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20 backdrop-blur-sm">
            <MapPin className="h-3 w-3" />
            {config.marketingLabel}
          </div>

          {/* Trust Sentence */}
          <p className="mx-auto mb-10 max-w-xl text-base text-slate-300 md:text-lg md:max-w-2xl">
            Quality pharmaceutical products for healthcare professionals, pharmacies, and distributors across India.
          </p>

          {/* Dual CTA System - Mobile-First */}
          <div className="flex w-full flex-col items-stretch justify-center gap-4 md:flex-row md:items-center">
            <Button
              size="lg"
              className="h-12 w-full bg-emerald-500 px-8 text-base font-bold text-slate-950 hover:bg-emerald-400 md:w-auto md:px-10 md:text-lg"
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Pill className="mr-2 h-5 w-5" />
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full border-white/20 bg-white/5 px-8 text-base font-bold text-white hover:bg-white hover:text-slate-950 md:w-auto md:px-10 md:text-lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>

          {/* Quick Info Bar - Trust Signals */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-400 md:gap-x-8 md:text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>Quality Medicines</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>Bangalore-Based Pharma</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>WHO-GMP Certified</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
