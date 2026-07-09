import { Reveal } from "@/components/Reveal";
import { CheckCircle2 } from "lucide-react";

export function Process() {
  const steps = [
    {
      title: "Initial Counselling",
      desc: "A 1-on-1 session to understand your career goals and academic background.",
    },
    {
      title: "Course & College Selection",
      desc: "We match your profile with the best-fit institutions and high-ROI courses.",
    },
    {
      title: "Eligibility Check",
      desc: "Verification of documents and entrance exam scores to ensure a smooth entry.",
    },
    {
      title: "Application Filing",
      desc: "Our team handles the paperwork and tracks your application in real-time.",
    },
    {
      title: "Admission Success",
      desc: "Final seat allotment and guidance on your next steps toward campus life.",
    },
  ];

  return (
    <section
      id="process"
      className="py-24 px-6 bg-slate-950 text-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-20 text-center">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-emerald-500 mb-4">
              Step-by-Step
            </h2>
            <h3 className="text-4xl font-black md:text-6xl">
              The AskC Roadmap
            </h3>
          </div>
        </Reveal>

        {/* Process Roadmap Container */}
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-4">
          {/* Connecting Line (Desktop Only) */}
          <div className="absolute top-10 left-0 hidden h-0.5 w-full bg-linear-to-r from-emerald-500/10 via-emerald-500 to-emerald-500/10 md:block" />

          {steps.map((s, i) => (
            <Reveal key={s.title}>
              <div className="relative z-10 flex flex-col items-center text-center group">
                {/* Step Number Circle */}
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-slate-950 bg-slate-900 text-2xl font-black text-emerald-500 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-slate-950 group-hover:scale-110 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  {i + 1}
                </div>

                {/* Text Content */}
                <div className="px-2">
                  <h4 className="mb-3 text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {s.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {s.desc}
                  </p>
                </div>

                {/* Mobile Connector (Visible only on mobile) */}
                {i !== steps.length - 1 && (
                  <div className="mt-8 h-12 w-0.5 bg-emerald-500/30 md:hidden" />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA Tag */}
        <Reveal>
          <div className="mt-20 flex justify-center">
            <div className="flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-6 py-3 text-slate-300 backdrop-blur-md">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              <span className="text-sm font-medium">
                Average processing time: 7-14 business days
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
