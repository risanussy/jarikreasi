import { PageHero } from "@/components/page-hero";
import {
  digitalSolutions,
  featuredServices,
  sectorSolutions,
} from "@/data/company";

export default function SolusiPage() {
  return (
    <>
      <PageHero
        eyebrow="Solusi Kami"
        title="Solusi untuk pemerintah, BUMN, dan transformasi digital"
        description="Struktur solusi pada halaman ini mengikuti company profile PT Jari Kreasi dengan fokus pada kebutuhan sektor dan modernisasi organisasi."
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {sectorSolutions.map((solution) => (
            <article
              key={solution.slug}
              className="rounded-[2rem] border border-black/8 bg-white p-7"
            >
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#a45a3c]">
                Sektor
              </p>
              <h2 className="mt-5 font-[family:var(--font-display)] text-2xl font-semibold tracking-tight text-[#111111]">
                {solution.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5a52]">{solution.summary}</p>
              <p className="mt-5 text-sm leading-7 text-[#5f5a52]">{solution.approach}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-black/8 bg-white p-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#a45a3c]">
              Digital Transformation Solution
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {digitalSolutions.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] bg-[#f7f6f1] p-5"
                >
                  <h3 className="font-[family:var(--font-display)] text-xl font-semibold tracking-tight text-[#111111]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/8 bg-[#111111] p-8 text-[#f7f6f1]">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Layanan Unggulan
            </p>
            <div className="mt-8 space-y-8">
              {featuredServices.map((group) => (
                <div key={group.title}>
                  <h3 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-tight">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-white/75">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
