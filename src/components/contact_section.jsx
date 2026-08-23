import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
} from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    label: "Call us",
    value: "+254 795 549 913",
    href: "tel:+254795549913",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "Signaturecraftsbuild@gmail.com",
    href: "mailto:Signaturecraftsbuild@gmail.com",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Nairobi Industrial Area, Kenya",
    href: "#",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] items-center">
          <div>
            <p className="text-[#C9A227] text-xs font-semibold tracking-[0.28em] uppercase mb-4">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
              Let’s build the space you’ve been imagining.
            </h2>
            <p className="text-gray-300 text-base leading-8 max-w-xl">
              Whether you need a custom kitchen, elegant wardrobe, premium
              ceiling detailing, or a full interior upgrade, we’re ready to help
              you create a refined, functional home.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/254795549913"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#b8911f] text-black font-semibold text-[11px] tracking-[0.12em] uppercase px-5 py-3 rounded transition-colors duration-200"
              >
                <MessageCircleMore size={16} />
                WhatsApp us
              </a>
              <a
                href="mailto:Signaturecraftsbuild@gmail.com"
                className="inline-flex items-center gap-2 border border-white/15 text-white hover:border-[#C9A227] hover:text-[#C9A227] font-semibold text-[11px] tracking-[0.12em] uppercase px-5 py-3 rounded transition-colors duration-200"
              >
                Email us
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {contactCards.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition-all duration-300 hover:border-[#C9A227] hover:bg-[#1a1a1a]"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#fdf8ec] text-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-white transition-colors duration-300">
                  <Icon size={18} />
                </div>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A227] mb-2">
                  {label}
                </p>
                <p className="text-sm leading-7 text-gray-200">{value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
