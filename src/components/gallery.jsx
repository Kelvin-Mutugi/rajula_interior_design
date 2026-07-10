import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

import image1 from "../images/image1.webp";
import image2 from "../images/image2.webp";
import image3 from "../images/image3.webp";
import image4 from "../images/image4.webp";
import image5 from "../images/image5.webp";
import image6 from "../images/image6.webp";
import image7 from "../images/image7.webp";
import image8 from "../images/image8.webp";
import image9 from "../images/image9.webp";
import image10 from "../images/image10.webp";
import image11 from "../images/image11.webp";
import image12 from "../images/image12.webp";
import image13 from "../images/image13.webp";
import image14 from "../images/image14.webp";
import image15 from "../images/image15.webp";
import image16 from "../images/image16.webp";
import image17 from "../images/image17.webp";
import image18 from "../images/image18.webp";
import image19 from "../images/image19.webp";
import image20 from "../images/image20.webp";
import image21 from "../images/image21.webp";
import image22 from "../images/image22.webp";
import image23 from "../images/image23.webp";
import image24 from "../images/image24.webp";
import image25 from "../images/image25.webp";
import image26 from "../images/image26.webp";
import image27 from "../images/image27.webp";
import image28 from "../images/image28.webp";
import image29 from "../images/image29.webp";
import image30 from "../images/image30.webp";
import image31 from "../images/image31.webp";
import image32 from "../images/image32.webp";
import image33 from "../images/image33.webp";
import image34 from "../images/image34.webp";
import image35 from "../images/image35.webp";
import image36 from "../images/image36.webp";
import image37 from "../images/image37.webp";
import image38 from "../images/image38.webp";
import image39 from "../images/image39.webp";
import image40 from "../images/image40.webp";
import image41 from "../images/image41.webp";
import image42 from "../images/image42.webp";
import image43 from "../images/image43.webp";
import image44 from "../images/image44.webp";
import image45 from "../images/image45.webp";
import image46 from "../images/image46.webp";
import image47 from "../images/image47.webp";
import image48 from "../images/image48.webp";
import image49 from "../images/image49.webp";
import image50 from "../images/image50.webp";
import image51 from "../images/image51.webp";
import image52 from "../images/image52.webp";
import image53 from "../images/image53.webp";
import image54 from "../images/image54.webp";
import image55 from "../images/image55.webp";
import image56 from "../images/image56.webp";
import image57 from "../images/image57.webp";
import image58 from "../images/image58.webp";
import image59 from "../images/image59.webp";
import image60 from "../images/image60.webp";
import image61 from "../images/image61.webp";
import image62 from "../images/image62.webp";
import image63 from "../images/image63.webp";
import image64 from "../images/image64.webp";
import image65 from "../images/image65.webp";
import image66 from "../images/image66.webp";
import image67 from "../images/image67.webp";
import image68 from "../images/image68.webp";
import image69 from "../images/image69.webp";
import image70 from "../images/image70.webp";
import image71 from "../images/image71.webp";
import image72 from "../images/image72.webp";
import image73 from "../images/image73.webp";
import image74 from "../images/image74.webp";
import image75 from "../images/image75.webp";
import image76 from "../images/image76.webp";
import image77 from "../images/image77.webp";
import image78 from "../images/image78.webp";
import image79 from "../images/image79.webp";
import image80 from "../images/image80.webp";
import image81 from "../images/image81.webp";
import image82 from "../images/image82.webp";
import image83 from "../images/image83.webp";
import image84 from "../images/image84.webp";
import image85 from "../images/image85.webp";
import image86 from "../images/image86.webp";
import image87 from "../images/image87.webp";
import image88 from "../images/image88.webp";
import image89 from "../images/image89.webp";
import image90 from "../images/image90.webp";
import image91 from "../images/image91.webp";
import image92 from "../images/image92.webp";
import image93 from "../images/image93.webp";
import image94 from "../images/image94.webp";
import image95 from "../images/image95.webp";
import image96 from "../images/image96.webp";
import image97 from "../images/image97.webp";
import image98 from "../images/image98.webp";
import image99 from "../images/image99.webp";
import image100 from "../images/image100.webp";
import image101 from "../images/image101.webp";
import image102 from "../images/image102.webp";
import image103 from "../images/image103.webp";
import image104 from "../images/image104.webp";
import image105 from "../images/image105.webp";
import image106 from "../images/image106.webp";
import image107 from "../images/image107.webp";
import image108 from "../images/image108.webp";
import image109 from "../images/image109.webp";
import image110 from "../images/image110.webp";
import image111 from "../images/image111.webp";
import image112 from "../images/image112.webp";
import image113 from "../images/image113.webp";

// ─── Projects ────────────────────────────────────────────────────────────────
// Category is commented out for now — assign once images are identified.
// To re-enable filtering, uncomment the `categories` array, the filter bar JSX,
// and swap `projects` for `filtered` in the grid.
// ─────────────────────────────────────────────────────────────────────────────

// const categories = ["ALL", "KITCHEN", "WARDROBE", "CEILING", "TV STANDS", "TILING", "WAINSCOTING"];

const projects = [
  { id: 1, image: image1 /* category: "KITCHEN"    */ },
  { id: 2, image: image2 /* category: "WARDROBE"   */ },
  { id: 3, image: image3 /* category: "TV STANDS"  */ },
  { id: 4, image: image4 /* category: "KITCHEN"    */ },
  { id: 5, image: image5 /* category: "CEILING"    */ },
  { id: 6, image: image6 /* category: "KITCHEN"    */ },
  { id: 7, image: image7 /* category: "TILING"     */ },
  { id: 8, image: image8 /* category: "WARDROBE"   */ },
  { id: 9, image: image9 /* category: "WAINSCOTING"*/ },
  { id: 10, image: image10 /* category: "TV STANDS"  */ },
  { id: 11, image: image11 /* category: "CEILING"    */ },
  { id: 12, image: image12 /* category: "KITCHEN"    */ },
  { id: 13, image: image13 /* category: "WARDROBE"   */ },
  { id: 14, image: image14 /* category: "TILING"     */ },
  { id: 15, image: image15 /* category: "KITCHEN"    */ },
  { id: 16, image: image16 /* category: "CEILING"    */ },
  { id: 17, image: image17 /* category: "TV STANDS"  */ },
  { id: 18, image: image18 /* category: "WARDROBE"   */ },
  { id: 19, image: image19 /* category: "WAINSCOTING"*/ },
  { id: 20, image: image20 /* category: "KITCHEN"    */ },
  { id: 21, image: image21 /* category: "TILING"     */ },
  { id: 22, image: image22 /* category: "CEILING"    */ },
  { id: 23, image: image23 /* category: "KITCHEN"    */ },
  { id: 24, image: image24 /* category: "WARDROBE"   */ },
  { id: 25, image: image25 /* category: "TV STANDS"  */ },
  { id: 26, image: image26 /* category: "KITCHEN"    */ },
  { id: 27, image: image27 /* category: "WAINSCOTING"*/ },
  { id: 28, image: image28 /* category: "TILING"     */ },
  { id: 29, image: image29 /* category: "CEILING"    */ },
  { id: 30, image: image30 /* category: "KITCHEN"    */ },
  { id: 31, image: image31 /* category: "WARDROBE"   */ },
  { id: 32, image: image32 /* category: "TV STANDS"  */ },
  { id: 33, image: image33 /* category: "KITCHEN"    */ },
  { id: 34, image: image34 /* category: "TILING"     */ },
  { id: 35, image: image35 /* category: "CEILING"    */ },
  { id: 36, image: image36 /* category: "WAINSCOTING"*/ },
  { id: 37, image: image37 /* category: "KITCHEN"    */ },
  { id: 38, image: image38 /* category: "WARDROBE"   */ },
  { id: 39, image: image39 /* category: "TV STANDS"  */ },
  { id: 40, image: image40 /* category: "KITCHEN"    */ },
  { id: 41, image: image41 /* category: "TILING"     */ },
  { id: 42, image: image42 /* category: "CEILING"    */ },
  { id: 43, image: image43 /* category: "KITCHEN"    */ },
  { id: 44, image: image44 /* category: "WARDROBE"   */ },
  { id: 45, image: image45 /* category: "WAINSCOTING"*/ },
  { id: 46, image: image46 /* category: "TV STANDS"  */ },
  { id: 47, image: image47 /* category: "KITCHEN"    */ },
  { id: 48, image: image48 /* category: "KITCHEN"    */ },
  { id: 49, image: image49 /* category: "KITCHEN"    */ },
  { id: 50, image: image50 /* category: "KITCHEN"    */ },
  { id: 51, image: image51 /* category: "KITCHEN"    */ },
  { id: 52, image: image52 /* category: "KITCHEN"    */ },
  { id: 53, image: image53 /* category: "KITCHEN"    */ },
  { id: 54, image: image54 /* category: "KITCHEN"    */ },
  { id: 55, image: image55 /* category: "KITCHEN"    */ },
  { id: 56, image: image56 /* category: "KITCHEN"    */ },
  { id: 57, image: image57 /* category: "KITCHEN"    */ },
  { id: 58, image: image58 /* category: "KITCHEN"    */ },
  { id: 59, image: image59 /* category: "KITCHEN"    */ },
  { id: 60, image: image60 /* category: "KITCHEN"    */ },
  { id: 61, image: image61 /* category: "KITCHEN"    */ },
  { id: 62, image: image62 /* category: "KITCHEN"    */ },
  { id: 63, image: image63 /* category: "KITCHEN"    */ },
  { id: 64, image: image64 /* category: "KITCHEN"    */ },
  { id: 65, image: image65 /* category: "KITCHEN"    */ },
  { id: 66, image: image66 /* category: "KITCHEN"    */ },
  { id: 67, image: image67 /* category: "KITCHEN"    */ },
  { id: 68, image: image68 /* category: "KITCHEN"    */ },
  { id: 69, image: image69 /* category: "KITCHEN"    */ },
  { id: 70, image: image70 /* category: "KITCHEN"    */ },
  { id: 71, image: image71 /* category: "KITCHEN"    */ },
  { id: 72, image: image72 /* category: "KITCHEN"    */ },
  { id: 73, image: image73 /* category: "KITCHEN"    */ },
  { id: 74, image: image74 /* category: "KITCHEN"    */ },
  { id: 75, image: image75 /* category: "KITCHEN"    */ },
  { id: 76, image: image76 /* category: "KITCHEN"    */ },
  { id: 77, image: image77 /* category: "KITCHEN"    */ },
  { id: 78, image: image78 /* category: "KITCHEN"    */ },
  { id: 79, image: image79 /* category: "KITCHEN"    */ },
  { id: 80, image: image80 /* category: "KITCHEN"    */ },
  { id: 81, image: image81 /* category: "KITCHEN"    */ },
  { id: 82, image: image82 /* category: "KITCHEN"    */ },
  { id: 83, image: image83 /* category: "KITCHEN"    */ },
  { id: 84, image: image84 /* category: "KITCHEN"    */ },
  { id: 85, image: image85 /* category: "KITCHEN"    */ },
  { id: 86, image: image86 /* category: "KITCHEN"    */ },
  { id: 87, image: image87 /* category: "KITCHEN"    */ },
  { id: 88, image: image88 /* category: "KITCHEN"    */ },
  { id: 89, image: image89 /* category: "KITCHEN"    */ },
  { id: 90, image: image90 /* category: "KITCHEN"    */ },
  { id: 91, image: image91 /* category: "KITCHEN"    */ },
  { id: 92, image: image92 /* category: "KITCHEN"    */ },
  { id: 93, image: image93 /* category: "KITCHEN"    */ },
  { id: 94, image: image94 /* category: "KITCHEN"    */ },
  { id: 95, image: image95 /* category: "KITCHEN"    */ },
  { id: 96, image: image96 /* category: "KITCHEN"    */ },
  { id: 97, image: image97 /* category: "KITCHEN"    */ },
  { id: 98, image: image98 /* category: "KITCHEN"    */ },
  { id: 99, image: image99 /* category: "KITCHEN"    */ },
  { id: 100, image: image100 /* category: "KITCHEN"    */ },
  { id: 101, image: image101 /* category: "KITCHEN"    */ },
  { id: 102, image: image102 /* category: "KITCHEN"    */ },
  { id: 103, image: image103 /* category: "KITCHEN"    */ },
  { id: 104, image: image104 /* category: "KITCHEN"    */ },
  { id: 105, image: image105 /* category: "KITCHEN"    */ },
  { id: 106, image: image106 /* category: "KITCHEN"    */ },
  { id: 107, image: image107 /* category: "KITCHEN"    */ },
  { id: 108, image: image108 /* category: "KITCHEN"    */ },
  { id: 109, image: image109 /* category: "KITCHEN"    */ },
  { id: 110, image: image110 /* category: "KITCHEN"    */ },
  { id: 111, image: image111 /* category: "KITCHEN"    */ },
  { id: 112, image: image112 /* category: "KITCHEN"    */ },
  { id: 113, image: image113 /* category: "KITCHEN"    */ },
];

export default function Gallery({ isOpen, onClose }) {
  const [lightbox, setLightbox] = useState(null);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") lightbox !== null ? setLightbox(null) : onClose();
      if (lightbox !== null) {
        if (e.key === "ArrowRight")
          setLightbox((p) => (p + 1) % projects.length);
        if (e.key === "ArrowLeft")
          setLightbox((p) => (p - 1 + projects.length) % projects.length);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, lightbox]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0d0d0d] overflow-y-auto">
      {/* ── Sticky header ── */}
      <div className="sticky top-0 z-10 bg-[#0d0d0d]/95 backdrop-blur border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between">
        <div>
          <p className="text-[#C9A227] text-[10px] font-semibold tracking-[0.25em] uppercase">
            OUR WORK
          </p>
          <h2 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight">
            PROJECT GALLERY
          </h2>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400
            hover:border-[#C9A227] hover:text-[#C9A227] transition-colors duration-200"
          aria-label="Close gallery"
        >
          <X size={18} />
        </button>
      </div>

      {/* ── Filter tabs (commented out until images are categorised) ──
      <div className="px-4 sm:px-8 pt-6 pb-4 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-[10px] font-bold tracking-[0.15em] transition-all duration-200 border
              ${activeCategory === cat
                ? "bg-[#C9A227] border-[#C9A227] text-black"
                : "border-white/20 text-gray-400 hover:border-[#C9A227] hover:text-[#C9A227]"}`}
          >{cat}</button>
        ))}
      </div>
      ── */}

      {/* ── Masonry grid ── */}
      <div className="px-4 sm:px-8 py-8 pb-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {projects.map((project, i) => (
            <GalleryCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setLightbox(i)}
            />
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
              text-gray-400 hover:border-[#C9A227] hover:text-[#C9A227] transition-colors duration-200"
            onClick={() => setLightbox(null)}
          >
            <X size={18} />
          </button>

          <button
            className="absolute left-4 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
              text-gray-400 hover:border-[#C9A227] hover:text-[#C9A227] transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((p) => (p - 1 + projects.length) % projects.length);
            }}
          >
            <ChevronLeft size={20} />
          </button>

          <div
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={projects[lightbox].image}
              alt={`Project ${projects[lightbox].id}`}
              className="w-full max-h-[80vh] object-contain rounded-lg"
              style={{ animation: "fadeIn 0.25s ease" }}
            />
            <p className="text-gray-500 text-xs">
              {lightbox + 1} / {projects.length}
            </p>
          </div>

          <button
            className="absolute right-4 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
              text-gray-400 hover:border-[#C9A227] hover:text-[#C9A227] transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((p) => (p + 1) % projects.length);
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      <style>{`@keyframes fadeIn { from { opacity:0; transform:scale(0.97); } to { opacity:1; transform:scale(1); } }`}</style>
    </div>
  );
}

function GalleryCard({ project, index, onClick }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          setTimeout(() => setVisible(true), (index % 4) * 60);
      },
      { threshold: 0.05 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-lg cursor-pointer break-inside-avoid mb-4"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${(index % 4) * 0.06}s, transform 0.5s ease ${(index % 4) * 0.06}s`,
      }}
    >
      <img
        src={project.image}
        alt={`Project ${project.id}`}
        className="w-full object-cover"
        style={{
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.5s ease",
        }}
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background: hovered ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0)",
          transition: "background 0.35s ease",
        }}
      >
        <div
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1)" : "scale(0.75)",
            transition: "all 0.3s ease",
          }}
        >
          <div className="w-11 h-11 rounded-full bg-[#C9A227] flex items-center justify-center">
            <ZoomIn size={20} className="text-black" />
          </div>
        </div>
      </div>

      {/* Gold top-left accent */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-[#C9A227]"
        style={{ width: hovered ? "40%" : "0%", transition: "width 0.4s ease" }}
      />
    </div>
  );
}
