import { Reveal } from "@/components/Reveal";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Config } from "@/config/config";
import { Phone, User, Stethoscope } from "lucide-react";

interface Doctor {
  id: number;
  name: string;
  qualification: string;
  specialty: string;
  initials: string;
  color: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Dildar Hussain",
    qualification: "MBBS, MS (ORTHO). Regd. No.- 22322 (Nagaon Medical College)",
    specialty: "Orthopedic Specialist",
    initials: "DH",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 2,
    name: "Dr. Isahak Ali",
    qualification: "MBBS, (DIB.), MD (AM). Regd. No.- 10591",
    specialty: "Medicine Specialist",
    initials: "IA",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 3,
    name: "Dr. Devapriya De",
    qualification: "MBBS, MS, MD (General Surgery) SMCH NMC. Regd. No.- 23571 (AMCH)",
    specialty: "Hernia, Piles, Gallbladder, Appendicitis",
    initials: "DD",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    id: 4,
    name: "Dr. Jenifer Mazumdar",
    qualification: "MBBS, MD (Pediatrics). Regd. No.- 24654",
    specialty: "Pediatrics",
    initials: "JM",
    color: "bg-rose-100 text-rose-700",
  },
  {
    id: 5,
    name: "Dr. Mridushikha Bora",
    qualification: "MBBS, MD (Specialist in NeuroPsychiatrist). Regd. No.- 24636 (AMC)",
    specialty: "Neuropsychiatrist Specialist",
    initials: "MB",
    color: "bg-violet-100 text-violet-700",
  },
  {
    id: 6,
    name: "Dr. Bikash Gogoi",
    qualification: "MBBS, MS (ORTHO). Regd. No.- 24733 (Nagaon Medical College)",
    specialty: "Orthopedic Specialist",
    initials: "BG",
    color: "bg-teal-100 text-teal-700",
  },
  {
    id: 7,
    name: "Dr. Rimli Kaushik Baruah",
    qualification: "MBBS, MD (AMCH). Regd. No.- 26159 (TMCH)",
    specialty: "Medicine Specialist",
    initials: "RK",
    color: "bg-amber-100 text-amber-700",
  },
  {
    id: 8,
    name: "Dr. Nigar Yasmin",
    qualification: "MBBS, MS (Obs and Gyane). Regd. No.- 0083 (Nagaon Medical College)",
    specialty: "Obstetrics and Gynecology Specialist",
    initials: "NY",
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: 9,
    name: "Dr. Bhanu Hazarika",
    qualification: "MBBS, AFIH, PGDMCH (Diabetes Consultant)",
    specialty: "Diabetes Consultant",
    initials: "BH",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    id: 10,
    name: "Dr. Abu Sayed",
    qualification: "MBBS, MD Emergency Medicine. Regd. No.- 23571 (AMC)",
    specialty: "Medicine Specialist",
    initials: "AS",
    color: "bg-sky-100 text-sky-700",
  },
  {
    id: 11,
    name: "Dr. Chumi Sinha",
    qualification: "MS, ENT - and Head and Neck Surgery. Regd. No.- 25464 (AMC)",
    specialty: "Head and Neck Specialist",
    initials: "CS",
    color: "bg-lime-100 text-lime-700",
  },
  {
    id: 12,
    name: "Dr. Nivedita Chauhan",
    qualification: "MBBS (GMCH), MD (AMCH) Psychiatry. Regd. No.- 24688",
    specialty: "Neurology/Psychiatry Specialist",
    initials: "NC",
    color: "bg-fuchsia-100 text-fuchsia-700",
  },
  {
    id: 13,
    name: "Dr. H. R. Talukdar",
    qualification: "MBBS, MS, MD (General Surgeon). Regd. No.- 26516",
    specialty: "General Surgeon",
    initials: "HT",
    color: "bg-orange-100 text-orange-700",
  },
];

export function ClinicInfo() {
  const config = new Config();

  return (
    <section id="clinic" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-2 text-sm font-bold tracking-[0.2em] uppercase text-emerald-600">
              Our Doctors
            </h2>
            <h3 className="text-3xl font-black text-slate-950 md:text-4xl lg:text-5xl">
              Our Medical Team
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
              Meet our experienced team of 13 doctors. Book an appointment by calling
              our clinic directly during working hours.
            </p>
          </div>
        </Reveal>

        {/* MOBILE VIEW: Stacked Cards */}
        <div className="flex flex-col gap-6 md:hidden">
          {doctors.map((doctor) => (
            <Reveal key={doctor.id}>
              <Card className="overflow-hidden border-slate-200 bg-white shadow-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-black ${doctor.color}`}
                    >
                      {doctor.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-lg font-bold text-slate-900">
                        {doctor.name}
                      </h4>
                      <p className="text-sm text-slate-500">
                        {doctor.qualification}
                      </p>
                      <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                        <Stethoscope className="h-3 w-3" />
                        {doctor.specialty}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pb-4">
                  <a
                    href={`tel:${config.orgPhoneNumber}`}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3.5 text-sm font-bold text-white transition-all hover:bg-emerald-700 active:scale-95"
                  >
                    <Phone className="h-4 w-4" />
                    Call to Book Appointment
                  </a>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* DESKTOP VIEW: Table */}
        <div className="hidden md:block">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Doctor
                        </div>
                      </th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                        <div className="flex items-center gap-2">
                          <Stethoscope className="h-4 w-4" />
                          Specialty
                        </div>
                      </th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {doctors.map((doctor) => (
                      <tr
                        key={doctor.id}
                        className="transition-colors hover:bg-slate-50/50"
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${doctor.color}`}
                            >
                              {doctor.initials}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-900">
                                {doctor.name}
                              </p>
                              <p className="text-xs text-slate-500">
                                {doctor.qualification}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
                            <Stethoscope className="h-3 w-3" />
                            {doctor.specialty}
                          </span>
                        </td>
                        <td className="px-6 py-5">
                          <a
                            href={`tel:${config.orgPhoneNumber}`}
                            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-emerald-700 active:scale-95"
                          >
                            <Phone className="h-3.5 w-3.5" />
                            Call to Book
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-slate-50 px-6 py-4 text-sm text-slate-600">
              <Phone className="h-4 w-4 text-emerald-600" />
              <span className="font-semibold">Walk-ins welcome.</span>
              <span>
                For appointments, call{" "}
                <a
                  href={`tel:${config.orgPhoneNumber}`}
                  className="font-bold text-emerald-700 hover:underline"
                >
                  {config.orgPhoneNumber}
                </a>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
