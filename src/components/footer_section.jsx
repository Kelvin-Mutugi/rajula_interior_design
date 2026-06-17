import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = ["Home", "About Us", "Services", "Projects", "Gallery", "Contact"];

const services = [
  "Kitchen Cabinet",
  "Wardrobe Installation",
  "Gypsum Ceiling",
  "TV Stands Installation",
  "Tiling",
  "Wainscoting",
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1 — Brand */}
          <div>
            {/* Logo */}
            <a href="#" className="inline-flex items-center gap-2 mb-5">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 flex-shrink-0">
                <polygon points="24,4 44,20 44,44 4,44 4,20" stroke="#C9A227" strokeWidth="2.5" fill="none" />
                <polygon points="24,12 38,23 38,40 10,40 10,23" stroke="#C9A227" strokeWidth="2" fill="none" />
                <rect x="19" y="30" width="10" height="10" stroke="#C9A227" strokeWidth="2" fill="none" />
              </svg>
              <div className="leading-tight">
                <div className="text-[#C9A227] font-bold text-lg tracking-widest uppercase">RAJULA'S</div>
                <div className="text-white text-[10px] tracking-[0.35em] uppercase font-light -mt-0.5">INTERIOR</div>
              </div>
            </a>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Modern interior design solutions<br />
              for homes and offices.<br />
              Quality you can trust.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { Icon: FacebookIcon, href: "#" },
                { Icon: InstagramIcon, href: "#" },
                { Icon: TikTokIcon, href: "#" },
                { Icon: WhatsAppIcon, href: "https://wa.me/" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-400
                    hover:border-[#C9A227] hover:text-[#C9A227] transition-colors duration-250"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-5">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 text-sm hover:text-[#C9A227] transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Our Services */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-5">
              OUR SERVICES
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-gray-400 text-sm hover:text-[#C9A227] transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-5">
              CONTACT US
            </h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-[#C9A227] mt-0.5 flex-shrink-0" />
                <a href="tel:+254795549913" className="text-gray-400 text-sm hover:text-[#C9A227] transition-colors duration-200">
                  +254 795 549 913
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[#C9A227] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@rajulasinterior.co.ke" className="text-gray-400 text-sm hover:text-[#C9A227] transition-colors duration-200 break-all">
                  info@rajulasinterior.co.ke
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#C9A227] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Nairobi, Kenya</span>
              </li>
            </ul>

            <a
              href="https://wa.me/254795549913"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#b8911f] text-black font-bold text-xs tracking-[0.1em] uppercase px-5 py-3 transition-colors duration-200 w-full justify-center"
            >
              <WhatsAppIcon />
              WHATSAPP US
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 text-center">
        
          <p className="text-gray-500 text-xs tracking-wide">
            <a href="https://www.budgetcodesolutions.top/">Designed by Budgetcode Solutions</a>
          </p>
          <p className="text-gray-500 text-xs tracking-wide">
            © {new Date().getFullYear()} Rajula's Interior. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}