import { Reveal } from "@/components/Reveal";
import { Award, Target, Landmark, Users, MapPin } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-dvh w-full items-center justify-center bg-slate-50 px-6 py-12 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl w-full">
        {/* Centered Section Heading */}
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-emerald-600 mb-2">
              Our Identity
            </h2>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
              About AskC
            </h1>
            <div className="mt-4 mx-auto h-1 w-20 bg-emerald-500 rounded-full" />
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2 items-stretch">
          {/* Left Side: Brand Narrative Card */}
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-100 bg-slate-80 p-8 shadow-sm">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-800 leading-tight">
                  We are your{" "}
                  <span className="text-emerald-500">local experts</span> in
                  Bengaluru.
                </h3>

                <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                  <p>
                    At{" "}
                    <span className="text-slate-950 font-bold underline decoration-emerald-500/30 underline-offset-4">
                      AskC
                    </span>
                    , we specialize in helping students from all across India
                    secure admissions in top universities in Bengaluru.
                  </p>
                  <p>
                    Our counselors guide you through application complexities
                    and eligibility requirements, providing a{" "}
                    <span className="font-semibold text-slate-900">
                      personalized roadmap
                    </span>{" "}
                    to success.
                  </p>
                </div>
              </div>

              {/* Trust Markers integrated at the bottom of the card */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    1-on-1 Mentoring
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Bengaluru Based
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Side: Mission & Network Stack */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="group rounded-3xl border-l-4 border-indigo-600 bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <div className="mb-2 flex items-center gap-3">
                  <Target className="h-6 w-6 text-indigo-600" />
                  <h4 className="text-lg font-bold text-slate-950">
                    Our Mission
                  </h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To empower students nationwide with the support needed to gain
                  entry into Bengaluru’s premier institutions.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="group rounded-3xl border-l-4 border-emerald-500 bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <div className="mb-2 flex items-center gap-3">
                  <Award className="h-6 w-6 text-emerald-600" />
                  <h4 className="text-lg font-bold text-slate-950">
                    Our Approach
                  </h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A high-touch model managing everything from university
                  shortlisting to final documentation.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-center gap-4 rounded-3xl bg-slate-900 p-6 text-white">
                <div className="rounded-full bg-emerald-500/10 p-3">
                  <Landmark className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h5 className="text-sm font-bold">
                    Strong University Network
                  </h5>
                  <p className="text-[11px] text-slate-400">
                    Deep connections with Bengaluru’s top colleges for priority
                    attention.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
