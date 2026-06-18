import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import image37 from "../images/image37.webp";
import image40 from "../images/image40.webp";
import image22 from "../images/image22.webp";
import Gallery from "./gallery";
 

const projects = [
  {
    image: image37,
    title: "Kitchen Remodel",
    category: "Kitchen Cabinet",
  },
  {
    image: image40,
    title: "Built-in Wardrobe",
    category: "Wardrobe Installation",
  },
  {
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
    title: "TV Feature Wall",
    category: "TV Stands Installation",
  },
  {
    image: image22,
    title: "Luxury Kitchen",
    category: "Kitchen Cabinet",
  },
];


function ProjectCard({ project, index }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTimeout(() => setVisible(true), index * 120); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);
 
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-xl cursor-pointer flex-1 min-w-0"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(32px) scale(0.97)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
        aspectRatio: "3 / 4",
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        style={{ transform: hovered ? "scale(1.07)" : "scale(1)", transition: "transform 0.6s ease" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: hovered
            ? "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%)"
            : "linear-gradient(to top, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 50%)",
          transition: "background 0.4s ease",
        }}
      />
      <div
        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#C9A227] flex items-center justify-center"
        style={{ opacity: hovered ? 1 : 0, transform: hovered ? "scale(1)" : "scale(0.7)", transition: "opacity 0.3s ease, transform 0.3s ease" }}
      >
        <ArrowUpRight size={16} className="text-black" />
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 p-4"
        style={{ opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(8px)", transition: "opacity 0.35s ease, transform 0.35s ease" }}
      >
        <p className="text-[#C9A227] text-[10px] font-semibold tracking-[0.2em] uppercase mb-1">{project.category}</p>
        <p className="text-white text-sm font-bold tracking-wide">{project.title}</p>
      </div>
    </div>
  );
}
 
export default function RecentProjects() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const headerRef = useRef(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.3 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);
 
  return (
    <>
      <section id="projects" className="bg-white py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div
            ref={headerRef}
            className="flex items-end justify-between mb-10"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div>
              <p className="text-[#C9A227] text-xs font-semibold tracking-[0.25em] uppercase mb-2">OUR WORK</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">RECENT PROJECTS</h2>
            </div>
            <button
              onClick={() => setGalleryOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-black text-[11px] font-bold tracking-[0.15em] uppercase px-5 py-2.5 transition-colors duration-300"
            >
              VIEW ALL PROJECTS
            </button>
          </div>
 
          <div className="flex gap-4">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
 
          <div className="mt-8 flex justify-center sm:hidden">
            <button
              onClick={() => setGalleryOpen(true)}
              className="inline-flex items-center gap-2 border border-[#C9A227] text-[#C9A227] text-[11px] font-bold tracking-[0.15em] uppercase px-5 py-2.5"
            >
              VIEW ALL PROJECTS
            </button>
          </div>
        </div>
      </section>
 
      <Gallery isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} />
    </>
  );
}
 
