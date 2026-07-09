import { Reveal } from "@/components/Reveal";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Config } from "../config/config";
import { Phone, Mail, MapPin, Clock, Send, Building2, Store } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const config = new Config();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    emailjs
      .sendForm(
        config.emailJsServiceId,
        config.emailJsTemplateId,
        formRef.current,
        config.emailJsPublicKey,
      )
      .then(() => {
        toast.success("Appointment request sent successfully!");
        formRef.current?.reset();
      })
      .catch(() => {
        toast.error("Failed to send request. Please try again later.");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-dvh scroll-mt-20 flex-col bg-white"
    >
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="flex flex-1 flex-col justify-center px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto w-full max-w-6xl">
          {/* Section Header */}
          <Reveal>
            <div className="mb-10 text-center md:mb-14">
              <h2 className="mb-2 text-sm font-bold tracking-[0.3em] uppercase text-emerald-600">
                Get In Touch
              </h2>
              <h1 className="text-3xl font-black tracking-tighter text-slate-900 md:text-4xl lg:text-5xl">
                Contact MEDULON PHARMA
              </h1>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-emerald-500" />
            </div>
          </Reveal>

          {/* Two-Column Layout */}
          <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-12">
            {/* Column A: Info & Maps */}
            <Reveal>
              <div className="flex flex-col gap-6">
                {/* Store Card - Assam (Primary) */}
                <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
                  <div className="flex items-center gap-2">
                    <Store className="h-5 w-5 text-blue-600" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">
                      Your Local Store
                    </h3>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-tight text-slate-900">
                        Address
                      </h4>
                      <p className="mt-1 text-sm leading-snug text-slate-500">
                        {config.orgAddresss}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-tight text-slate-900">
                        Phone
                      </h4>
                      <div className="mt-1 flex flex-col gap-1">
                        <a
                          href={`tel:${config.orgPhoneNumber}`}
                          className="text-sm font-bold text-slate-700 hover:text-emerald-600"
                        >
                          {config.orgPhoneNumber}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-tight text-slate-900">
                        Operational Hours
                      </h4>
                      <p className="mt-1 text-sm text-slate-500">
                        Monday — Saturday
                      </p>
                      <p className="text-sm font-medium italic text-slate-700">
                        08:00 AM — 10:00 PM
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Sunday
                      </p>
                      <p className="text-sm font-medium italic text-slate-700">
                        09:00 AM — 02:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Assam Google Map */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                  <iframe
                    className="w-full aspect-video md:aspect-square"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.5830437943244!2d92.68560267512448!3d26.07278029550783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744d3f1f1f1f1f1%3A0x1f1f1f1f1f1f1f1f!2sMadhupur%2C%20Nagaon%2C%20Assam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MEDULON PHARMA Store Location"
                  />
                </div>

                {/* HQ Card - Bangalore (Secondary) */}
                <div className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm md:p-6">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-emerald-600" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">
                      Corporate Headquarters
                    </h3>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-slate-200 p-3 text-slate-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-tight text-slate-900">
                        Bangalore Office
                      </h4>
                      <p className="mt-1 text-sm leading-snug text-slate-500">
                        {config.marketingAddress}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-slate-200 p-3 text-slate-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-tight text-slate-900">
                        Email
                      </h4>
                      <a
                        href={`mailto:${config.orgEmail}`}
                        className="mt-1 flex items-center gap-1.5 text-sm font-medium text-emerald-600 hover:underline"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        {config.orgEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Column B: Appointment Form */}
            <Reveal>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm md:p-8"
              >
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-slate-900 md:text-xl">
                    Book an Appointment
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Fill in your details and we will confirm your slot shortly.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      required
                      className="h-12 rounded-xl border-slate-200 bg-white px-4 text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="+91 93653 99473"
                      required
                      className="h-12 rounded-xl border-slate-200 bg-white px-4 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="h-12 rounded-xl border-slate-200 bg-white px-4 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Preferred Service
                  </label>
                  <Input
                    type="text"
                    name="service"
                    placeholder="e.g., Medicine Order, Doctor Consultation"
                    className="h-12 rounded-xl border-slate-200 bg-white px-4 text-sm"
                  />
                </div>

                <div className="flex-1 space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Message / Symptoms *
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Describe your symptoms or reason for visit..."
                    required
                    className="min-h-[120px] flex-1 rounded-xl border-slate-200 bg-white px-4 py-3 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-emerald-700 active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit Appointment Request"}
                  {!isSubmitting && <Send className="h-4 w-4" />}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
