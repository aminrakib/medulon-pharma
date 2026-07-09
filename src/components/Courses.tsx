import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

const mainCourses = [
  {
    title: "MBBS",
    description:
      "Secure your future in medicine. We provide end-to-end guidance for NEET-based admissions in top Indian and international medical universities.",
    image: "/courses/mbbs.png",
    tag: "High Demand",
  },
  {
    title: "BAMS",
    description:
      "Merge tradition with modern science. Expert pathways into leading Ayurvedic institutions with a focus on holistic clinical practice.",
    image: "/courses/bams.png",
    tag: "Traditional Medicine",
  },
  {
    title: "Nursing",
    description:
      "Global healthcare careers start here. We help you find programs with the best clinical exposure and international placement support.",
    image: "/courses/nursing.png",
    tag: "Global Career",
  },
  {
    title: "Pharmacy",
    description:
      "Enter the booming pharmaceutical sector. Guidance for B.Pharm and D.Pharm programs focusing on research and industry readiness.",
    image: "/courses/pharmacy.png",
    tag: "Healthcare Tech",
  },
  {
    title: "BBA",
    description:
      "Launch your business career. Admissions into elite management hubs with specializations in Finance, Marketing, and Operations.",
    image: "/courses/bba.png",
    tag: "Management",
  },
  {
    title: "Engineering",
    description:
      "Build the future. Direct entry into top-tier Engineering colleges for CS, AI, Data Science, and core technical fields.",
    image: "/courses/engineering.png",
    tag: "Technical Elite",
  },
];

export function Courses() {
  // Navigation function for better reusability
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="courses" className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-600 mb-3">
              Specialized Pathways
            </h2>
            <h3 className="text-4xl font-black text-slate-900 md:text-5xl">
              Courses We Represent
            </h3>
            <div className="mt-4 mx-auto h-1.5 w-20 bg-emerald-500 rounded-full" />
          </div>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mainCourses.map((course) => (
            <Reveal key={course.title}>
              <div className="group relative flex flex-col h-full overflow-hidden bg-white border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:border-emerald-500/30">
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1 shadow-sm">
                    {course.tag}
                  </span>

                  <div className="absolute bottom-4 left-6">
                    <h4 className="text-2xl font-bold text-white tracking-tight">
                      {course.title}
                    </h4>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1 italic">
                    {course.description}
                  </p>

                  {/* Updated Professional Button with ID Link */}
                  <button
                    onClick={scrollToContact}
                    className="group/btn flex w-fit items-center gap-2 text-sm font-bold text-emerald-600 transition-all uppercase tracking-widest hover:text-emerald-700"
                  >
                    <span className="relative">
                      Inquire Now
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover/btn:w-full"></span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 text-center">
            <p className="text-slate-500 text-sm italic">
              *Looking for a specific specialization? AskC covers 50+ additional
              undergraduate and postgraduate programs.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
