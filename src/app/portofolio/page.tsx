import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { clients, documentationYears, portfolio } from "@/data/company";

export default function PortofolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Klien & Pekerjaan"
        title="Rekam jejak proyek, mitra, dan dokumentasi pekerjaan"
        description="Halaman ini merangkum klien, pekerjaan 3 tahun terakhir, dan dokumentasi aktivitas utama sesuai materi company profile PT Jari Kreasi."
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/8 bg-white p-8">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#a45a3c]">
            Klien & Mitra
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client) => (
              <div
                key={client}
                className="rounded-[1.25rem] bg-[#f7f6f1] px-4 py-4 text-sm text-[#3f3a34]"
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6">
          {portfolio.map((project) => (
            <article
              key={project.slug}
              className="rounded-[2rem] border border-black/8 bg-white p-8"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-[#a45a3c]">
                <span>{project.client}</span>
                <span className="h-1 w-1 rounded-full bg-[#a45a3c]" />
                <span>{project.sector}</span>
              </div>
              <h2 className="mt-4 font-[family:var(--font-display)] text-3xl font-semibold tracking-tight text-[#111111]">
                {project.title}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#5f5a52]">
                {project.overview}
              </p>
              <Link
                href={`/portofolio/${project.slug}`}
                className="mt-8 inline-flex rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium text-[#111111] transition hover:border-[#a45a3c]/40 hover:text-[#a45a3c]"
              >
                Lihat detail pekerjaan
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-black/8 bg-[#111111] p-8 text-[#f7f6f1]">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Dokumentasi
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {documentationYears.map((group) => (
              <div key={group.year} className="rounded-[1.5rem] bg-white/6 p-6">
                <h3 className="font-[family:var(--font-display)] text-3xl font-semibold tracking-tight">
                  {group.year}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-white/75">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
