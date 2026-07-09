import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { Config } from "../config/config";

export function ContactCTA() {
  const config = new Config();
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${config.phoneWhatsAppCTA}?text=Hi%20MEDULON%20PHARMA,%20I%20would%20like%20to%20order%20medicines.%20Please%20assist%20me.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white font-semibold shadow-lg transition-all hover:shadow-2xl hover:bg-[#1ebe57] active:scale-95"
        aria-label="Contact via WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${config.orgPhoneNumber}`}
        className="flex items-center gap-3 rounded-full bg-[#1D9D74] px-5 py-3 text-white font-semibold shadow-lg transition-all hover:shadow-2xl hover:bg-[#15785d] active:scale-95"
        aria-label="Call us"
      >
        <FaPhoneAlt size={24} />
      </a>
    </div>
  );
}
