import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";

function ServiceCard({ service, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const Icon = service.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 100);
        }
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <Link
      to={`/services/${service.slug}`}
      ref={ref}
      className="group block bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center cursor-pointer
        transition-all duration-500 hover:border-[#C9A227] hover:shadow-lg hover:-translate-y-1"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s, box-shadow 0.3s ease, border-color 0.3s ease`,
      }}
    >
      {/* Icon container */}
      <div className="mb-5 p-4 rounded-xl bg-[#fdf8ec] group-hover:bg-[#C9A227] transition-colors duration-300">
        <Icon
          size={36}
          strokeWidth={1.4}
          className="text-[#C9A227] group-hover:text-white transition-colors duration-300"
        />
      </div>

      {/* Title */}
      <h3 className="text-[11px] font-bold tracking-[0.12em] text-gray-900 mb-3">
        {service.title}
      </h3>

      {/* Divider */}
      <div className="w-8 h-[2px] bg-[#C9A227] mb-3 group-hover:w-12 transition-all duration-300 rounded-full" />

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed">
        {service.description}
      </p>
    </Link>
  );
}

export default function Services() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.3 },
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="bg-[#f5f5f5] py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-12"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="text-[#C9A227] text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            WHAT WE DO
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            OUR SERVICES
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
