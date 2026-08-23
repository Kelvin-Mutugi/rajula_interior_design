import { CheckCircle2 } from "lucide-react";
import { useParams } from "react-router-dom";
import Navbar from "./nav_bar";
import { getServiceBySlug } from "../data/services";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#f5f5f5] px-4 py-20 text-center">
          <div className="max-w-xl mx-auto rounded-2xl border border-gray-200 bg-white p-10 shadow-sm">
            <p className="text-[#C9A227] text-xs font-semibold tracking-[0.28em] uppercase mb-3">
              Service not found
            </p>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              This service is unavailable.
            </h1>
          </div>
        </main>
      </>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f5f5f5] px-4 py-20 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[28px] border border-gray-200 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 sm:p-10 lg:p-14">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#fdf8ec] mb-6">
                  <Icon
                    size={32}
                    className="text-[#C9A227]"
                    strokeWidth={1.6}
                  />
                </div>

                <p className="text-[#C9A227] text-xs font-semibold tracking-[0.28em] uppercase mb-3">
                  Our service
                </p>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-5">
                  {service.title}
                </h1>

                <p className="text-base leading-8 text-gray-600 mb-8">
                  {service.intro}
                </p>

                <div className="space-y-4">
                  {service.details.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 text-[#C9A227] shrink-0"
                      />
                      <p className="text-sm sm:text-base leading-7">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1a1a1a] p-8 sm:p-10 lg:p-14 text-white">
                <p className="text-[#C9A227] text-xs font-semibold tracking-[0.22em] uppercase mb-5">
                  Why choose this service
                </p>
                <div className="space-y-4">
                  {service.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C9A227]" />
                      <span className="text-sm font-medium text-gray-100">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-sm text-gray-300 leading-7">
                    Ready to bring this vision to life in your home or business?
                    Let’s design a finish that feels refined, practical, and
                    unmistakably yours.
                  </p>
                  <a
                    href="https://wa.me/254795549913"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center justify-center bg-[#C9A227] hover:bg-[#b8911f] text-black font-semibold text-[11px] tracking-[0.12em] px-5 py-3 rounded transition-colors duration-200"
                  >
                    GET A QUOTE
                  </a>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-16">
            <div className="mb-8">
              <p className="text-[#C9A227] text-xs font-semibold tracking-[0.28em] uppercase mb-3">
                Sample works
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                Recent project inspiration
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {service.sampleWorks.map((work) => (
                <article
                  key={work.title}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.04)]"
                >
                  <div
                    className="h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${work.image})` }}
                  />
                  <div className="p-6">
                    <p className="text-[#C9A227] text-[10px] font-semibold tracking-[0.2em] uppercase mb-3">
                      {work.category}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {work.title}
                    </h3>
                    <p className="text-sm leading-7 text-gray-600">
                      {work.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
