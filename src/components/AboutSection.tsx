import { Reveal } from "@/components/Reveal";
import { Config } from "@/config/config";
import { MapPin, Building2, BadgeCheck, Factory, Truck } from "lucide-react";

export function AboutSection() {
  const config = new Config();

  return (
    <section id="about" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-2 text-sm font-bold tracking-[0.2em] uppercase text-emerald-600">
              About Us
            </h2>
            <h3 className="text-3xl font-black text-slate-950 md:text-4xl lg:text-5xl">
              {config.marketingLabel}
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
              Headquartered in Bangalore, India's pharmaceutical hub.
              Every product box displays our Bangalore address — transparency you can verify.
            </p>
          </div>
        </Reveal>

        {/* Bangalore HQ Card — Full Width */}
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-10">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
              <Building2 className="h-4 w-4" />
              Corporate Headquarters
            </div>

            <h4 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">
              Bangalore — Where Quality Begins
            </h4>

            <p className="mb-6 text-base leading-relaxed text-slate-600">
              MEDULON PHARMA PRIVATE LIMITED is headquartered in Bangalore,
              India's pharmaceutical innovation hub. Our corporate office oversees
              stringent quality control, regulatory compliance, and nationwide
              distribution — ensuring every product meets metro-grade standards.
            </p>

            <div className="mb-6 flex items-start gap-4 rounded-xl bg-white p-5 border border-slate-100">
              <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Registered Address
                </p>
                <p className="mt-1 text-base font-semibold text-slate-800">
                  {config.marketingAddress}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-700">
                <BadgeCheck className="h-5 w-5" />
                WHO-GMP Certified
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-700">
                <Factory className="h-5 w-5" />
                Quality Manufacturing
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-700">
                <Truck className="h-5 w-5" />
                Pan-India Distribution
              </div>
            </div>
          </div>
        </Reveal>

        {/* Trust Banner */}
        <Reveal>
          <div className="mt-10 flex items-center justify-center gap-3 rounded-2xl bg-slate-900 px-6 py-4 text-center text-white md:mt-12">
            <BadgeCheck className="h-5 w-5 shrink-0 text-emerald-400" />
            <p className="text-sm font-semibold">
              Every MEDULON product box displays our Bangalore address — pick one up and verify for yourself.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
