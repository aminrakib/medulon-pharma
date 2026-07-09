import { Reveal } from "@/components/Reveal";
import { Config } from "@/config/config";
import { MapPin, Building2, Store, ShieldCheck, BadgeCheck } from "lucide-react";

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
              Bringing metro-quality pharmaceuticals to your doorstep in Assam.
              Every product box displays our Bangalore address — transparency you can verify.
            </p>
          </div>
        </Reveal>

        {/* Two-Column Story Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {/* Bangalore HQ Card */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <Building2 className="h-4 w-4" />
                Corporate Headquarters
              </div>

              <h4 className="mb-3 text-xl font-bold text-slate-900 md:text-2xl">
                Bangalore — Where It All Begins
              </h4>

              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                MEDULON PHARMA PRIVATE LIMITED is headquartered in Bangalore,
                India's pharma innovation hub. Our corporate office oversees
                stringent quality control, regulatory compliance, and nationwide
                distribution — ensuring every product meets metro-grade standards.
              </p>

              <div className="mb-4 flex items-start gap-3 rounded-xl bg-white p-4 border border-slate-100">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Address
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {config.marketingAddress}
                  </p>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-2 text-xs font-bold text-emerald-700">
                <BadgeCheck className="h-4 w-4" />
                WHO-GMP Certified Company
              </div>
            </div>
          </Reveal>

          {/* Assam Store Card */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-blue-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
                <Store className="h-4 w-4" />
                Your Local Store
              </div>

              <h4 className="mb-3 text-xl font-bold text-slate-900 md:text-2xl">
                Madhupur, Nagaon — At Your Service
              </h4>

              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                Our local store brings MEDULON PHARMA products directly to Assam.
                No long waits, no shipping hassles — just walk in, consult with
                our pharmacist, and get genuine medicines with Bangalore-backed
                quality assurance.
              </p>

              <div className="mb-4 flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-100">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Address
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {config.orgAddresss}
                  </p>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-2 text-xs font-bold text-blue-700">
                <ShieldCheck className="h-4 w-4" />
                Walk-ins & WhatsApp Orders Welcome
              </div>
            </div>
          </Reveal>
        </div>

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
