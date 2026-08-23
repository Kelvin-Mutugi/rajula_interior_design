import { useState, useEffect } from "react";
import Logo from "../assets/logo.jpg"

const NAV_LINKS = [
  { label: "HOME", href: "/#" },
  { label: "ABOUT US", href: "/#about" },
  { label: "SERVICES", href: "/#services" },
  { label: "PROJECTS", href: "/#projects" },
  { label: "GALLERY", href: "/#projects" },
  // { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`w-full bg-[#1a1a1a] border-b border-[#2a2a2a] sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.5)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 flex items-center justify-center">
              {/* <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <polygon points="24,4 44,20 44,44 4,44 4,20" stroke="#C9A227" strokeWidth="2.5" fill="none" />
                <polygon points="24,12 38,23 38,40 10,40 10,23" stroke="#C9A227" strokeWidth="2" fill="none" />
                <rect x="19" y="30" width="10" height="10" stroke="#C9A227" strokeWidth="2" fill="none" />
              </svg> */}
              <img src={Logo} alt="logo" />
            </div>
            <div className="leading-tight">
              <div className="text-[#C9A227] font-bold text-lg tracking-widest uppercase">SIGNATURE CRAFTS</div>
              <div className="text-white text-[10px] tracking-[0.35em] uppercase font-light -mt-0.5">BUILDERS</div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`relative px-4 py-2 text-[11px] font-semibold tracking-[0.15em] transition-colors duration-200
                  ${activeLink === link.label ? "text-[#C9A227]" : "text-gray-300 hover:text-white"}`}
              >
                {link.label}
                {activeLink === link.label && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#C9A227] rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/254795549913"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#b8911f] text-black font-semibold text-[11px] tracking-[0.1em] px-5 py-2.5 rounded transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              GET A QUOTE
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#C9A227] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#C9A227] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#C9A227] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[#111111] border-t border-[#2a2a2a] px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => { setActiveLink(link.label); setIsOpen(false); }}
              className={`flex items-center px-3 py-3 text-[11px] font-semibold tracking-[0.15em] border-l-2 transition-colors duration-200
                ${activeLink === link.label
                  ? "border-[#C9A227] text-[#C9A227] bg-[#C9A22710]"
                  : "border-transparent text-gray-300 hover:text-white hover:border-gray-600"}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/254795549913"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 bg-[#C9A227] hover:bg-[#b8911f] text-black font-semibold text-[11px] tracking-[0.1em] px-5 py-3 rounded transition-colors duration-200"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            GET A QUOTE
          </a>
        </div>
      </div>
    </nav>
  );
}