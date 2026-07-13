import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";
import { Config } from "@/config/config";

export function Navbar() {
  const config = new Config();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-100 w-full bg-white border-b border-slate-100 shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo - Always Visible */}
        <a href="/" className="flex items-center gap-2 z-110">
          <img
            src="/logo.svg"
            alt="MEDULON PHARMA Logo"
            className="h-8 w-auto md:h-10"
          />
          {/* <span className="text-xl font-black tracking-tighter text-slate-600">
            MEDULON PHARMA
          </span> */}
        </a>

        {/* Desktop Links - Visible from MD (Tablets) up */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Contact - Visible from LG up to keep it slim */}
        <div className="hidden lg:flex items-center gap-4 border-l border-slate-200 pl-6">
          <div className="flex flex-col items-end text-[10px] font-bold uppercase tracking-tighter">
            <a
              href={`tel:${config.orgPhoneNumber}`}
              className="flex items-center gap-2 text-slate-900 hover:text-emerald-600"
            >
              <Phone className="h-3 w-3 text-emerald-500" />{" "}
              {config.orgPhoneNumber}
            </a>
            <a
              href={`mailto:${config.orgEmail}`}
              className="flex items-center gap-2 text-slate-900 hover:text-emerald-600"
            >
              <Mail className="h-3 w-3 text-emerald-500" /> {config.orgEmail}
            </a>
          </div>
        </div>

        {/* Mobile Menu Button - Visible on Small Screens */}
        <button
          className="relative z-110 p-2 text-slate-900 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY - Fixed visibility */}
      <div
        className={`fixed inset-0 z-105 bg-white transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-10">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between border-b border-slate-50 py-5 text-xl font-black text-slate-600"
              >
                {link.name}
                <ChevronRight className="h-6 w-6 text-emerald-500" />
              </a>
            ))}
          </nav>

          {/* Direct Mobile Contact */}
          <div className="mt-auto space-y-4 rounded-3xl bg-slate-50 p-6">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Medical Support
            </p>

            {/* Phone Numbers Grouped */}
            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 mt-1 text-emerald-500" />
              <div className="flex flex-col space-y-2">
                <a
                  href={`tel:${config.orgPhoneNumber}`}
                  className="text-lg font-bold text-slate-950 leading-none"
                >
                  {config.orgPhoneNumber}
                </a>
                {/* <a
                  href={`tel:${config.orgAltPhoneNumber}`}
                  className="text-lg font-bold text-slate-950 leading-none"
                >
                  {config.orgAltPhoneNumber}
                </a> */}
              </div>
            </div>

            {/* Email Support */}
            <a
              href={`mailto:${config.orgEmail}`}
              className="flex items-center gap-4 text-lg font-bold text-slate-950"
            >
              <Mail className="h-5 w-5 text-emerald-500" /> {config.orgEmail}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
