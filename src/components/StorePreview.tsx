import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Config } from "@/config/config";
import { Pill, Heart, Activity, MessageCircle, ShieldCheck } from "lucide-react";

interface Product {
  id: number;
  name: string;
  composition: string;
  indications: string;
  dosageForm: string;
  packaging?: string;
  category: string;
  image: string;
  rx: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Medurab-D",
    composition: "Rabeprazole 20mg + Domperidone 30mg",
    indications: "Acid reflux, GERD, gastritis & bloating",
    dosageForm: "Capsule",
    category: "Gastrointestinal",
    image: "/products/medurab-d.png",
    rx: true,
  },
  {
    id: 2,
    name: "Altramed-SP",
    composition: "Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg",
    indications: "Pain & inflammation relief",
    dosageForm: "Tablet",
    category: "Pain Relief",
    image: "/products/altramed-sp.png",
    rx: true,
  },
  {
    id: 3,
    name: "Medugold",
    composition: "Lycopene with Multivitamins & Antioxidants",
    indications: "Daily immunity & vitality booster",
    dosageForm: "Capsule",
    category: "Wellness",
    image: "/products/medugold.png",
    rx: false,
  },
  {
    id: 4,
    name: "Meduraft",
    composition: "Sodium Alginate + Sodium Bicarbonate + Calcium Carbonate",
    indications: "Fast relief from acidity & heartburn",
    dosageForm: "Oral Suspension",
    category: "Gastrointestinal",
    image: "/products/meduraft-bottle.jpg",
    rx: false,
  },
  {
    id: 5,
    name: "Medubone",
    composition: "Calcium Carbonate 500mg + Vitamin D3 250 IU",
    indications: "Strong bones, teeth & daily calcium support",
    dosageForm: "Tablet",
    category: "Wellness",
    image: "/products/medubone.png",
    rx: false,
  },
  {
    id: 6,
    name: "Medurab-D (Alt Pack)",
    composition: "Rabeprazole Sodium (Enteric Coated) + Domperidone (Sustained Release)",
    indications: "Acid reflux, GERD, gastritis & bloating",
    dosageForm: "Capsule",
    packaging: "10x10 pack",
    category: "Gastrointestinal",
    image: "/products/medurab-d-alt.png",
    rx: true,
  },
  {
    id: 7,
    name: "Altramed-SP (Info Pack)",
    composition: "Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg",
    indications: "Triple action pain relief: analgesic, anti-inflammatory & enzymatic",
    dosageForm: "Tablet",
    packaging: "10x10 tablets",
    category: "Pain Relief",
    image: "/products/altramed-sp-info.png",
    rx: true,
  },
  {
    id: 8,
    name: "Meduraft Double Action",
    composition: "Sodium Alginate + Sodium Bicarbonate + Calcium Carbonate",
    indications: "Double action formula for heartburn, acid indigestion & gastric reflux. Sugar-free mint flavour",
    dosageForm: "Oral Suspension",
    category: "Gastrointestinal",
    image: "/products/meduraft-info.png",
    rx: false,
  },
  {
    id: 9,
    name: "Medubone Complete",
    composition: "Calcium Carbonate + Vitamin D3 Tablets IP",
    indications: "Strong bones, better absorption, daily support",
    dosageForm: "Tablet",
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
      return <Pill className="h-4 w-4" />;
    case "Pain Relief":
      return <Activity className="h-4 w-4" />;
    case "Wellness":
      return <Heart className="h-4 w-4" />;
    default:
      return <Pill className="h-4 w-4" />;
  }
}

function getProductEnquiryLink(phone: string, product: Product): string {
  const message = encodeURIComponent(
    `Hi MEDULON PHARMA, I would like to enquire about ${product.name} (${product.composition}). Please share details on availability, pricing, and minimum order quantity.`
  );
  return `https://wa.me/${phone}?text=${message}`;
}

function getDistributionWhatsAppLink(phone: string): string {
  const message = encodeURIComponent(
    `Hi MEDULON PHARMA, I'm interested in distribution partnership with your company. Please share product list, pricing, and terms.`
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
    <section id="products" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-2 text-sm font-bold tracking-[0.2em] uppercase text-emerald-600">
              Our Products
            </h2>
            <h3 className="text-3xl font-black text-slate-950 md:text-4xl lg:text-5xl">
              MEDULON Product Portfolio
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
              Quality pharmaceutical range for healthcare professionals,
              pharmacies, and distributors across India.
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
                    alt={`${product.name} by MEDULON PHARMA - ${product.composition}`}
                    loading="lazy"
                    className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Rx Badge */}
                  {product.rx && (
                    <div className="absolute top-3 left-3 rounded-md bg-red-600 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                      Rx
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
                  <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    {product.dosageForm}
                  </div>
                </CardHeader>

                <CardContent className="flex-1 pb-4">
                  <div className="space-y-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Composition
                      </p>
                      <p className="text-sm font-semibold text-slate-800">
                        {product.composition}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Indications
                      </p>
                      <p className="text-sm text-slate-600">
                        {product.indications}
                      </p>
                    </div>
                    {product.packaging && (
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Packaging
                        </p>
                        <p className="text-sm font-semibold text-slate-800">
                          {product.packaging}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-2 pt-0 pb-5 px-5">
                  <a
                    href={getProductEnquiryLink(whatsappNumber, product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3.5 text-sm font-bold text-white transition-all hover:bg-emerald-700 active:scale-95"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Enquire on WhatsApp
                  </a>
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

        {/* Distribution Banner */}
        <Reveal>
          <div className="mt-12 rounded-2xl bg-slate-900 p-6 text-center text-white md:mt-16 md:p-10">
            <h4 className="mb-3 text-xl font-bold md:text-2xl">
              Interested in Distribution or Bulk Supply?
            </h4>
            <p className="mx-auto mb-6 max-w-xl text-sm text-slate-400 md:text-base">
              Partner with MEDULON PHARMA for quality medicines across India.
              Contact us for pricing, availability, and partnership opportunities.
            </p>
            <div className="flex w-full flex-col items-stretch justify-center gap-4 md:flex-row md:items-center">
              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full border-white/20 bg-white/5 px-8 text-base font-bold text-white hover:bg-white hover:text-slate-950 md:w-auto md:px-10"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Us
              </Button>

              <a
                href={getDistributionWhatsAppLink(whatsappNumber)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-8 py-3.5 text-base font-bold text-slate-950 transition-all hover:bg-emerald-400 active:scale-95 md:w-auto md:px-10"
              >
                <MessageCircle className="h-5 w-5" />
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
