import {
  UtensilsCrossed,
  ShirtIcon,
  Layers,
  Tv2,
  Grid3x3,
  PanelLeft,
} from "lucide-react";

export const services = [
  {
    slug: "kitchen-cabinets",
    icon: UtensilsCrossed,
    title: "KITCHEN CABINET",
    description: "Modern & custom kitchen cabinet solutions.",
    intro:
      "Streamlined storage, premium finishes, and practical layouts designed to make every kitchen feel efficient, welcoming, and tailored to your lifestyle.",
    details: [
      "Custom cabinetry built to fit your exact kitchen dimensions.",
      "Modern finishes and durable materials for long-term value.",
      "Smart storage planning to maximize comfort and organization.",
    ],
    highlights: [
      "Bespoke design layouts",
      "Premium wood and laminate finishes",
      "Space-saving interior storage",
      "Professional installation and aftercare",
    ],
  },
  {
    slug: "wardrobe-installation",
    icon: ShirtIcon,
    title: "WARDROBE INSTALLATION",
    description: "Stylish and functional wardrobe designs & installation.",
    intro:
      "Designed to blend effortless storage with a polished interior aesthetic, our wardrobes help turn cluttered rooms into calm, organized spaces.",
    details: [
      "Wardrobes tailored to your room layout and storage needs.",
      "Elegant sliding, hinged, and modular options.",
      "Interior accessories for shoes, hanging space, and drawers.",
    ],
    highlights: [
      "Custom finishes to match your interior",
      "Functional storage optimization",
      "Neat finishes and precision fitting",
      "Built for daily use and durability",
    ],
  },
  {
    slug: "gypsum-ceiling",
    icon: Layers,
    title: "GYPSUM CEILING",
    description: "Elegant gypsum ceiling designs for a modern look.",
    intro:
      "We create lightweight, striking ceiling systems that add detail, depth, and elegance to your home or commercial interior without visual clutter.",
    details: [
      "Designer ceiling profiles that improve room character.",
      "Smooth finishing for a premium modern appearance.",
      "Integration with lighting for a luxurious, layered effect.",
    ],
    highlights: [
      "Contemporary architectural lines",
      "Integrated lighting support",
      "Professional plastering and finishing",
      "Clean, polished ceiling detailing",
    ],
  },
  {
    slug: "tv-stands-installation",
    icon: Tv2,
    title: "TV STANDS INSTALLATION",
    description: "Custom TV stands that fit your space perfectly.",
    intro:
      "Purpose-built entertainment units that balance function and style, delivering a cleaner living space with a tailored focal point for your media setup.",
    details: [
      "TV consoles designed around your wall size and room flow.",
      "Integrated storage for media, décor, and accessories.",
      "Built to blend seamlessly with the surrounding interior.",
    ],
    highlights: [
      "Custom-fit entertainment units",
      "Cable management and hidden storage",
      "Aesthetic design with practical utility",
      "Seamless installation and finishing",
    ],
  },
  {
    slug: "tiling",
    icon: Grid3x3,
    title: "TILING",
    description: "Quality tiling services for floors and walls.",
    intro:
      "From statement walls to finished flooring, our tiling work combines durability, neat workmanship, and visually balanced detailing for every surface.",
    details: [
      "Floor and wall tiling for residential and commercial spaces.",
      "Precision installation with clean grout lines and layout planning.",
      "Quality finishes that stand up to daily wear and moisture.",
    ],
    highlights: [
      "Durable floor and wall finishes",
      "Precise alignment and detailing",
      "Moisture-resistant installation",
      "Modern textures and style combinations",
    ],
  },
  {
    slug: "wainscoting",
    icon: PanelLeft,
    title: "WAINSCOTING",
    description: "Decorative wall paneling for a classy finish.",
    intro:
      "Wainscoting adds texture, warmth, and architectural character, instantly enhancing the elegance of halls, living rooms, bedrooms, and hospitality spaces.",
    details: [
      "Decorative paneling that elevates room aesthetics.",
      "Tailored designs to suit your interior identity and style.",
      "Clean detailing that adds dimension without overcrowding a room.",
    ],
    highlights: [
      "Classic and contemporary panel styles",
      "Refined wall detailing",
      "Adds durability and decorative character",
      "Designed for a premium finish",
    ],
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}
