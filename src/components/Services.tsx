import { Reveal } from "@/components/Reveal";
import { Compass, Map, FileText, Send, PlaneTakeoff } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Career Counselling",
      desc: "Not sure which path to take? We map your strengths to high-growth industries to ensure your degree leads to a dream job.",
      icon: <Compass className="h-6 w-6" />,
    },
    {
      title: "University Shortlisting",
      desc: "Stop applying blindly. we filter the best colleges in Bengaluru and beyond based on your scores, budget, and ROI.",
      icon: <Map className="h-6 w-6" />,
    },
    {
      title: "Documentation & Eligibility",
      desc: "We handle the fine print. From transcript verification to eligibility checks, we ensure your paperwork is flawless.",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: "Application Support",
      desc: "We track deadlines and submit your applications to ensure you are first in line for seat allotments and interviews.",
      icon: <Send className="h-6 w-6" />,
    },
    {
      title: "Pre-Departure Support",
      desc: "Moving to a new city or country? We assist with housing, education loans, and everything you need for a smooth transition.",
      icon: <PlaneTakeoff className="h-6 w-6" />,
    },
  ];

  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-600 mb-4">
              What We Do
            </h2>
            <h3 className="text-4xl font-black text-slate-950 md:text-5xl">
              Professional Admission Support
            </h3>
            <p className="mt-4 text-lg text-slate-600">
              Simplifying the journey from student to professional.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Reveal key={s.title}>
              <div className="group h-full rounded-none border-l-4 border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1">
                <div className="mb-4 inline-block rounded-lg bg-slate-100 p-3 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                  {s.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900">{s.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
