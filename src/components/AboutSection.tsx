import { Reveal } from "@/components/Reveal";
import { Config } from "@/config/config";
import {
  MapPin,
  Building2,
  BadgeCheck,
  Globe,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function AboutSection() {
  const config = new Config();

  return (
    <section id="about" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <Reveal>
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-2 text-sm font-bold tracking-[0.2em] uppercase text-emerald-600">
              About Us
            </h2>
            <h3 className="text-3xl font-black text-slate-950 md:text-4xl lg:text-5xl">
              Built on Trust, Backed by Bangalore
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
              MEDULON PHARMA PRIVATE LIMITED is headquartered in Bangalore,
              India's pharmaceutical innovation hub. We are committed to
              delivering quality medicines with complete transparency — every
              product box carries our verified address so you know exactly where
              your medicine comes from.
            </p>
          </div>
        </Reveal>

        {/* Our Story — Two-Column Layout */}
        <Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {/* Left: Abstract Visual Placeholder */}
            <div className="flex items-center justify-center rounded-2xl bg-slate-50 p-8 border border-slate-200">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                  <Building2 className="h-8 w-8" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  MEDULON PHARMA
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  Bangalore Headquarters
                </p>
              </div>
            </div>

            {/* Right: Mission Text */}
            <div className="flex flex-col justify-center gap-6">
              <div>
                <h4 className="mb-3 text-xl font-bold text-slate-900 md:text-2xl">
                  Our Mission
                </h4>
                <p className="text-base leading-relaxed text-slate-600">
                  To make quality healthcare accessible across India through
                  transparent pharmaceutical practices. We believe every patient
                  deserves to know where their medicine comes from, who made it,
                  and that it meets the highest safety standards.
                </p>
              </div>
              <div>
                <h4 className="mb-3 text-xl font-bold text-slate-900 md:text-2xl">
                  What Drives Us
                </h4>
                <p className="text-base leading-relaxed text-slate-600">
                  In an industry where trust is everything, we chose transparency
                  as our foundation. Our Bangalore headquarters oversees every
                  batch, every shipment, and every customer interaction — because
                  your health deserves nothing less.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Vision • Mission • Values — 3 Pillars */}
        <Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:mt-16">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-emerald-300 border-t-4 border-t-emerald-500">
              <Globe className="mb-4 h-8 w-8 text-emerald-600" />
              <h4 className="mb-2 text-lg font-bold text-slate-900">
                Accessible Healthcare for All
              </h4>
              <p className="text-sm leading-relaxed text-slate-600">
                To bridge the gap between quality medicine and every patient who
                needs it, regardless of location.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-emerald-300 border-t-4 border-t-emerald-500">
              <ShieldCheck className="mb-4 h-8 w-8 text-emerald-600" />
              <h4 className="mb-2 text-lg font-bold text-slate-900">
                Transparency in Every Box
              </h4>
              <p className="text-sm leading-relaxed text-slate-600">
                Every product carries our verified Bangalore address. No hidden
                suppliers. No compromises.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-emerald-300 border-t-4 border-t-emerald-500">
              <BadgeCheck className="mb-4 h-8 w-8 text-emerald-600" />
              <h4 className="mb-2 text-lg font-bold text-slate-900">
                Quality Without Exception
              </h4>
              <p className="text-sm leading-relaxed text-slate-600">
                WHO-GMP certified processes. Batch-verified testing. Regulatory
                compliance at every step.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Quality & Trust — Two-Column Grid */}
        <Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:mt-16">
            {/* Address Card */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-700">
                <MapPin className="h-5 w-5" />
                Registered Address
              </div>
              <p className="text-base font-semibold leading-relaxed text-slate-800">
                {config.marketingAddress}
              </p>
              <div className="mt-4 flex items-start gap-3 rounded-xl bg-white p-4 border border-slate-100">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-sm text-slate-600">
                  Our Bangalore headquarters oversees quality control, compliance,
                  and nationwide distribution.
                </p>
              </div>
            </div>

            {/* Certification Card */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-700">
                <BadgeCheck className="h-5 w-5" />
                Certifications & Standards
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      WHO-GMP Certified
                    </p>
                    <p className="text-xs text-slate-500">
                      Internationally recognized quality benchmarks
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Batch-Verified Quality
                    </p>
                    <p className="text-xs text-slate-500">
                      Every production batch undergoes strict testing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Pan-India Distribution
                    </p>
                    <p className="text-xs text-slate-500">
                      Nationwide delivery to pharmacies and clinics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Trust Banner */}
        <Reveal>
          <div className="mt-10 flex items-center justify-center gap-3 rounded-2xl bg-slate-900 px-6 py-4 text-center text-white md:mt-12">
            <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" />
            <p className="text-sm font-semibold">
              Pick up any MEDULON box and verify our Bangalore address for
              yourself — because trust should never be hidden.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
