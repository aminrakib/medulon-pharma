import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Config } from "@/config/config";
import { Pill, Heart, Activity, ShoppingCart, FileText, ShieldCheck } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  rx: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Medurab-D Capsules",
    description: "Rabeprazole 20mg + Domperidone 30mg. For acid reflux, GERD, gastritis & bloating.",
    category: "Gastrointestinal",
    image: "/products/medurab-d.png",
    rx: true,
  },
  {
    id: 2,
    name: "Altramed-SP Tablets",
    description: "Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg. Pain & inflammation relief.",
    category: "Pain Relief",
    image: "/products/altramed-sp.png",
    rx: true,
  },
  {
    id: 3,
    name: "Medugold Capsules",
    description: "Lycopene with Multivitamins & Antioxidants. Daily immunity & vitality booster.",
    category: "Wellness",
    image: "/products/medugold.png",
    rx: false,
  },
  {
    id: 4,
    name: "Meduraft Oral Suspension",
    description: "Sodium Alginate + Sodium Bicarbonate + Calcium Carbonate. Fast relief from acidity & heartburn.",
    category: "Gastrointestinal",
    image: "/products/meduraft-bottle.jpg",
    rx: false,
  },
  {
    id: 5,
    name: "Medubone Tablets",
    description: "Calcium Carbonate 500mg + Vitamin D3 250 IU. Strong bones, teeth & daily calcium support.",
    category: "Wellness",
    image: "/products/medubone.png",
    rx: false,
  },
  {
    id: 6,
    name: "Medurab-D (Alt Pack)",
    description: "Rabeprazole Sodium (Enteric Coated) + Domperidone (Sustained Release) Capsules. 10x10 pack.",
    category: "Gastrointestinal",
    image: "/products/medurab-d-alt.png",
    rx: true,
  },
  {
    id: 7,
    name: "Altramed-SP (Info Pack)",
    description: "Triple action pain relief: analgesic, anti-inflammatory & enzymatic. 10x10 tablets.",
    category: "Pain Relief",
    image: "/products/altramed-sp-info.png",
    rx: true,
  },
  {
    id: 8,
    name: "Meduraft Double Action",
    description: "Double action formula for heartburn, acid indigestion & gastric reflux. Sugar-free mint flavour.",
    category: "Gastrointestinal",
    image: "/products/meduraft-info.png",
    rx: false,
  },
  {
    id: 9,
    name: "Medubone Complete",
    description: "Calcium Carbonate + Vitamin D3 Tablets IP. Strong bones, better absorption, daily support.",
    category: "Wellness",
    image: "/products/medubone-info.jpg",
    rx: false,
  },
];

const categories = ["All", "Gastrointestinal", "Pain Relief", "Wellness"];

function getCategoryColor(category: string): string {
  switch (category) {
    case "Gastrointestinal":
      return "bg-blue-100 text-blue-700";
    case "Pain Relief":
      return "bg-red-100 text-red-700";
    case "Wellness":
      return "bg-emerald-100 text-emerald-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

function getCategoryIcon(category: string) {
  switch (category) {
    case "Gastrointestinal":
      return <Pill className="h-5 w-5" />;
    case "Pain Relief":
      return <Activity className="h-5 w-5" />;
    case "Wellness":
      return <Heart className="h-5 w-5" />;
    default:
      return <Pill className="h-5 w-5" />;
  }
}

function getWhatsAppLink(phone: string, product: Product): string {
  const message = encodeURIComponent(
    `Hi MEDULON PHARMA, I would like to order:\n\n${product.name}\n${product.description}\n\nPlease confirm availability and delivery options.`
  );
  return `https://wa.me/${phone}?text=${message}`;
}

function getPrescriptionLink(phone: string): string {
  const message = encodeURIComponent(
    `Hi MEDULON PHARMA, I have a prescription to upload. Can you guide me through the process or I can share the prescription details here for ordering.`
  );
  return `https://wa.me/${phone}?text=${message}`;
}

export function StorePreview() {
  const config = new Config();
  const whatsappNumber = config.phoneWhatsAppCTA.replace(/\+/g, "");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="store" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-2 text-sm font-bold tracking-[0.2em] uppercase text-emerald-600">
              Our Products
            </h2>
            <h3 className="text-3xl font-black text-slate-950 md:text-4xl lg:text-5xl">
              MEDULON Product Catalog
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
              Browse our wide range of MEDULON PHARMA products. Order via WhatsApp for quick home delivery.
              All prescription items require a valid doctor's prescription.
            </p>
          </div>
        </Reveal>

        {/* Trust Strip */}
        <Reveal>
          <div className="mb-10 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-semibold text-slate-600 border border-slate-200 shadow-sm md:mb-12">
            <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />
            All products marketed by MEDULON PHARMA PRIVATE LIMITED, Bangalore
          </div>
        </Reveal>

        {/* Category Filter Tabs */}
        <Reveal>
          <div className="mb-10 flex flex-wrap justify-center gap-2 md:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all hover:shadow-md ${
                  activeCategory === category
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-emerald-300 hover:text-emerald-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {filteredProducts.map((product) => (
            <Reveal key={product.id}>
              <Card className="group flex h-full flex-col overflow-hidden border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl hover:border-emerald-300">
                {/* Product Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100 md:h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Rx Badge */}
                  {product.rx && (
                    <div className="absolute top-3 left-3 rounded-md bg-red-600 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                      Rx Required
                    </div>
                  )}
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(product.category)}`}
                    >
                      {getCategoryIcon(product.category)}
                      {product.category}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-lg font-bold text-slate-900 md:text-xl">
                    {product.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 pb-4">
                  <p className="text-sm leading-relaxed text-slate-600">
                    {product.description}
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Marketed by MEDULON PHARMA, Bangalore
                  </p>
                </CardContent>

                <CardFooter className="flex flex-col gap-2 pt-0 pb-5 px-5">
                  <a
                    href={getWhatsAppLink(whatsappNumber, product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3.5 text-sm font-bold text-white transition-all hover:bg-emerald-700 active:scale-95"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Order via WhatsApp
                  </a>
                  {product.rx && (
                    <a
                      href={getPrescriptionLink(whatsappNumber)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-600 transition-all hover:border-emerald-300 hover:text-emerald-700"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      Upload Prescription
                    </a>
                  )}
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-slate-500">
              No products found in this category.
            </p>
          </div>
        )}

        {/* Prescription Banner */}
        <Reveal>
          <div className="mt-12 rounded-2xl bg-slate-900 p-6 text-center text-white md:mt-16 md:p-10">
            <h4 className="mb-3 text-xl font-bold md:text-2xl">
              Have a Prescription?
            </h4>
            <p className="mx-auto mb-6 max-w-xl text-sm text-slate-400 md:text-base">
              Upload your prescription via WhatsApp and our pharmacist will verify and fulfill your order safely.
              All Rx-marked products require a valid doctor's prescription.
            </p>
            <a
              href={getPrescriptionLink(whatsappNumber)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 text-sm font-bold text-slate-950 transition-all hover:bg-emerald-400 active:scale-95"
            >
              <FileText className="h-5 w-5" />
              Send Prescription on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
