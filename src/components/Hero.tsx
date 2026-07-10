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
      className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 pt-24 pb-20 text-white"
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
          {/* Emergency Touch-to-Call Badge */}
          <a
            href={`tel:${config.orgPhoneNumber}`}
            className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full bg-red-600/90 px-5 py-3 text-sm font-bold text-white shadow-lg backdrop-blur-sm transition-all hover:bg-red-500 hover:shadow-xl active:scale-95"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
            </span>
            <Phone className="h-4 w-4" />
            Call: {config.orgPhoneNumber}
          </a>

          {/* Brand Header */}
          <h1 className="mb-3 text-3xl font-black tracking-tighter md:text-6xl lg:text-7xl">
            MEDULON PHARMA
          </h1>

          <p className="mb-4 text-sm font-bold tracking-[0.3em] uppercase text-emerald-400">
            PRIVATE LIMITED
          </p>

          {/* Bangalore HQ Trust Badge */}
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-4 py-2 text-xs font-bold text-emerald-400 border border-emerald-500/30 backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5" />
            {config.marketingLabel}
          </div>

          {/* Healthcare Headline */}
          <h2 className="mb-6 text-2xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            Quality Pharmaceuticals for{" "}
            <span className="text-emerald-400">Health & Wellness.</span>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-base text-slate-300 md:text-lg">
            Trusted medicines and healthcare solutions. Delivering
            Bangalore-grade quality to Madhupur, Nagaon, Assam.
          </p>

          {/* Dual CTA System - Mobile-First */}
          <div className="flex w-full flex-col items-stretch justify-center gap-4 md:flex-row md:items-center">
            <Button
              size="lg"
              className="h-14 w-full bg-emerald-500 px-8 text-base font-bold text-slate-950 hover:bg-emerald-400 md:w-auto md:px-10 md:text-lg"
              onClick={() =>
                document
                  .getElementById("store")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Pill className="mr-2 h-5 w-5" />
              Browse Medical Store
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-14 w-full border-white/20 bg-white/5 px-8 text-base font-bold text-white hover:bg-white hover:text-slate-950 md:w-auto md:px-10 md:text-lg"
              onClick={() =>
                document
                  .getElementById("clinic")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>

          {/* Quick Info Bar - Trust Signals */}
          <div className="mt-14 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-400 md:gap-x-8">
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
              <span>Trusted in Assam</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
