import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80",
    label: "DESIGNING SPACES, CREATING COMFORT",
  },
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80",
    label: "MODERN LIVING, TIMELESS DESIGN",
  },
  {
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=80",
    label: "CRAFTED WITH PRECISION, BUILT FOR YOU",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 600);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    if (index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 600);
  };

  return (
    <section className="relative w-full h-[92vh] min-h-[560px] overflow-hidden bg-black">
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url(${slide.image})`,
            opacity: i === current ? (animating ? 0 : 1) : 0,
            zIndex: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Dark overlay — stronger on left for text readability */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.65) 45%, rgba(10,10,10,0.15) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center">
        <div className="max-w-xl">
          {/* Label */}
          <p className="text-[#C9A227] text-xs font-semibold tracking-[0.22em] uppercase mb-4">
            {slides[current].label}
          </p>

          {/* Headline */}
          <h1 className="text-white font-extrabold uppercase leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            WE DESIGN BEAUTIFUL
            <br />
            INTERIORS THAT
            <br />
            REFLECT{" "}
            <span className="text-[#C9A227]">YOUR STYLE</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-sm">
            Rajula's Interior is your trusted partner in modern
            <br />
            interior design for homes and offices.
            <br />
            Quality work, perfect finish, every time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#b8911f] text-black font-bold text-xs tracking-[0.12em] uppercase px-6 py-3.5 transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WHATSAPP US
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-white text-white hover:bg-white hover:text-black font-bold text-xs tracking-[0.12em] uppercase px-6 py-3.5 transition-colors duration-200"
            >
              OUR SERVICES
            </a>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? "28px" : "8px",
              height: "8px",
              background: i === current ? "#C9A227" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}