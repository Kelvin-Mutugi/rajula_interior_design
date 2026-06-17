import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Users, Clock, Star, Smile, Briefcase, Award, MapPin } from "lucide-react";

const stats = [
  { icon: Smile,    value: "500+", label: "HAPPY CLIENTS" },
  { icon: Briefcase, value: "800+", label: "PROJECTS COMPLETED" },
  { icon: Award,    value: "4+",   label: "YEARS EXPERIENCE" },
  { icon: MapPin,   value: "NAIROBI, KENYA", label: "WE SERVE" },
];

function StatsBar() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-[#1a1a1a] mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 py-8 px-4"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.55s ease ${i * 0.12}s, transform 0.55s ease ${i * 0.12}s`,
                }}
              >
                <Icon size={28} strokeWidth={1.4} className="text-[#C9A227] flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="text-white font-extrabold text-xl leading-tight">{stat.value}</p>
                  <p className="text-gray-400 text-[10px] font-semibold tracking-[0.18em] uppercase mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const reasons = [
  {
    icon: ShieldCheck,
    title: "QUALITY WORK",
    description: "We deliver top-notch quality on every project.",
  },
  {
    icon: Users,
    title: "EXPERIENCED TEAM",
    description: "Skilled professionals with years of experience.",
  },
  {
    icon: Clock,
    title: "ON TIME DELIVERY",
    description: "We value your time and always deliver on schedule.",
  },
  {
    icon: Star,
    title: "CUSTOMER SATISFACTION",
    description: "Your satisfaction is our top priority.",
  },
];

function useReveal(delay = 0) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTimeout(() => setVisible(true), delay); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);
  return [ref, visible];
}

export default function AboutUs() {
  const [imgRef, imgVisible] = useReveal(0);
  const [textRef, textVisible] = useReveal(150);

  return (
    <>
    <section id="about" className="bg-[#f5f5f5] py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left — image */}
        <div
          ref={imgRef}
          className="rounded-xl overflow-hidden shadow-lg"
          style={{
            opacity: imgVisible ? 1 : 0,
            transform: imgVisible ? "translateX(0)" : "translateX(-40px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=80"
            alt="Rajula's Interior team at work"
            className="w-full h-full object-cover"
            style={{ maxHeight: "480px" }}
          />
        </div>

        {/* Right — content */}
        <div
          ref={textRef}
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateX(0)" : "translateX(40px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Header */}
          <p className="text-[#C9A227] text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            ABOUT US
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-5">
            WHY CHOOSE US?
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-lg">
            We are passionate about transforming spaces into beautiful, functional and
            comfortable environments. Our team is committed to quality, attention to
            detail and customer satisfaction.
          </p>

          {/* Reason cards */}
          <div className="grid grid-cols-2 gap-6">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <ReasonItem key={reason.title} reason={reason} Icon={Icon} index={i} parentVisible={textVisible} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
    <StatsBar />
    </>
  );
}

function ReasonItem({ reason, Icon, index, parentVisible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-start gap-3 group"
      style={{
        opacity: parentVisible ? 1 : 0,
        transform: parentVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${0.2 + index * 0.1}s, transform 0.5s ease ${0.2 + index * 0.1}s`,
      }}
    >
      {/* Icon */}
      <div
        className="p-3 rounded-xl transition-colors duration-300"
        style={{ background: hovered ? "#C9A227" : "#fdf8ec" }}
      >
        <Icon
          size={28}
          strokeWidth={1.4}
          style={{ color: hovered ? "#fff" : "#C9A227", transition: "color 0.3s" }}
        />
      </div>

      {/* Text */}
      <div>
        <h4 className="text-[11px] font-bold tracking-[0.12em] text-gray-900 mb-1">
          {reason.title}
        </h4>
        <div
          className="h-[2px] rounded-full bg-[#C9A227] mb-2 transition-all duration-300"
          style={{ width: hovered ? "2.5rem" : "1.5rem" }}
        />
        <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
      </div>
    </div>
  );
}