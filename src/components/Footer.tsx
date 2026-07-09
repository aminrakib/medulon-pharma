import { Reveal } from "@/components/Reveal";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Config } from "../config/config";

export function Footer() {
  const config = new Config();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-4">
        {/* Column 1: Branding & Mission */}
        <Reveal>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <img
                src="/logo.svg"
                alt="MEDULON PHARMA Logo"
                className="h-10 w-auto"
              />
              <span className="text-xl font-black tracking-tighter text-white">
                MEDULON PHARMA
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              <span className="text-emerald-500 font-bold">
                MEDULON PHARMA PRIVATE LIMITED
              </span>
              <br />
              A Bangalore-Based Pharmaceutical Company Serving Assam.
              <br /><br />
              <span className="text-xs text-slate-500">
                Bangalore HQ: {config.marketingAddress}
              </span>
              <br />
              <span className="text-xs text-slate-500">
                Assam Store: {config.orgAddresss}
              </span>
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="#"
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Column 2: Navigation */}
        <Reveal>
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-emerald-500">
              Navigation
            </h3>
            <ul className="flex flex-col gap-4 text-slate-400 text-sm">
              {["Store", "Clinic", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="flex items-center gap-2 hover:text-white transition-colors group"
                  >
                    <ChevronRight
                      size={14}
                      className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0"
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Column 3: Contact Details */}
        <Reveal>
          <div>
            <h3 className=" font-bold mb-6 text-sm uppercase tracking-widest">
              Contact
            </h3>
            <div className="flex flex-col gap-5 text-slate-400 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-emerald-500 shrink-0 h-5 w-5" />
                <span className="leading-relaxed">{config.orgAddresss}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-emerald-500 shrink-0 h-5 w-5 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${config.orgPhoneNumber}`}
                    className="hover:text-white transition-colors"
                  >
                    {config.orgPhoneNumber}
                  </a>
                  <a
                    href={`tel:${config.orgAltPhoneNumber}`}
                    className="hover:text-white transition-colors"
                  >
                    {config.orgAltPhoneNumber}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-emerald-500 shrink-0 h-5 w-5" />
                <a
                  href={`mailto:${config.orgEmail}`}
                  className="hover:text-white"
                >
                  {config.orgEmail}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Column 4: Call to Action */}
        <Reveal>
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-white font-bold mb-3 text-lg">
              Need Medicines?
            </h3>
            <p className="text-slate-400 text-xs mb-5 leading-relaxed">
              Order quality medicines online or visit our store. Our team is
              ready to serve you with care and compassion.
            </p>
            <a
              href="#contact"
              className="block w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </Reveal>
      </div>

      {/* Copyright Bar */}
      <div className="mt-20 pt-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-300">
              MEDULON PHARMA PRIVATE LIMITED
            </span>
            <br className="md:hidden" /> All Rights Reserved
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
