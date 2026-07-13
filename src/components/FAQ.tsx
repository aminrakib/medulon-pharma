import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is MEDULON PHARMA PRIVATE LIMITED?",
    answer:
      "MEDULON PHARMA is a Bangalore-based pharmaceutical company committed to delivering quality medicines with complete transparency. Every product box carries our verified Bangalore address.",
  },
  {
    question: "What products does MEDULON PHARMA offer?",
    answer:
      "We offer a range of pharmaceutical products including Medurab-D for acid reflux, Altramed-SP for pain relief, Medugold for immunity, Meduraft for heartburn, and Medubone for bone health.",
  },
  {
    question: "Where is MEDULON PHARMA located?",
    answer:
      "Our corporate headquarters is in Bangalore, Karnataka. The registered address is: No.33, Ist Floor, 1st Main, Ganganagar Gramatana, HMT Layout, CBI Road, Bangalore - 560032.",
  },
  {
    question: "Are MEDULON products WHO-GMP certified?",
    answer:
      "Yes, all MEDULON products are manufactured under WHO-GMP certified standards with batch-verified quality testing.",
  },
  {
    question: "How can I become a distributor for MEDULON products?",
    answer:
      "We welcome distribution partnerships across India. Please contact us via WhatsApp or fill out the enquiry form on our Contact page for pricing, availability, and partnership terms.",
  },
  {
    question: "What is Medurab-D used for?",
    answer:
      "Medurab-D contains Rabeprazole 20mg + Domperidone 30mg. It is used for acid reflux, GERD, gastritis, and bloating.",
  },
  {
    question: "How do I order MEDULON products?",
    answer:
      "We work with healthcare professionals, pharmacies, and distributors. Please enquire via WhatsApp or contact us through the form on our website for bulk orders and distribution queries.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-2 text-sm font-bold tracking-[0.2em] uppercase text-emerald-600">
              Frequently Asked Questions
            </h2>
            <h3 className="text-3xl font-black text-slate-950 md:text-4xl lg:text-5xl">
              Everything You Need to Know
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
              Find answers to common questions about MEDULON PHARMA, our products, and partnership opportunities.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <Reveal key={index}>
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-slate-50"
                >
                  <span className="text-base font-bold text-slate-900 md:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-emerald-600 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="border-t border-slate-100 px-6 py-5">
                    <p className="text-base leading-relaxed text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
