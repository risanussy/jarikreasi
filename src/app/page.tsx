import Link from "next/link";

import { DetailCard, PreviewCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import {
  company,
  heroPillars,
  highlights,
  pagePreviews,
  stats,
} from "@/data/company";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-black/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_12%,_rgba(164,90,60,0.24),_transparent_34%),radial-gradient(circle_at_78%_18%,_rgba(17,17,17,0.10),_transparent_26%),linear-gradient(180deg,_rgba(255,255,255,0.7),_rgba(247,246,241,1))]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-28">
          <div className="space-y-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#a45a3c]">
              Company Profile 2026
            </p>
            <div className="space-y-6">
              <h1 className="max-w-4xl font-[family:var(--font-display)] text-5xl font-semibold tracking-tight text-[#111111] sm:text-6xl lg:text-7xl">
                Integrated business support dan digital ecosystem untuk organisasi modern.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
                {company.description} PT Jari Kreasi hadir sebagai partner yang
                menggabungkan kebutuhan operasional, digital, komunikasi, dan
                pengembangan organisasi dalam satu solusi.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {heroPillars.map((pillar) => (
                <span
                  key={pillar}
                  className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-[#3f3a34]"
                >
                  {pillar}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/kontak"
                className="rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-[#f7f6f1] transition hover:bg-[#2c2a28]"
              >
                Hubungi Kami
              </Link>
              <Link
                href="/portofolio"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#111111] transition hover:border-[#a45a3c]/30 hover:text-[#a45a3c]"
              >
                Lihat Klien & Pekerjaan
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[2rem] border border-black/8 bg-white/90 p-6 shadow-[0_30px_80px_rgba(17,17,17,0.06)] backdrop-blur"
              >
                <p className="font-[family:var(--font-display)] text-4xl font-semibold tracking-tight text-[#111111]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-7 text-[#5f5a52]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading
          eyebrow="Nilai Utama"
          title="Integrated solution, trusted execution, dan sustainable collaboration"
          description="PT Jari Kreasi berkembang dari layanan pengadaan menjadi mitra strategis yang mendukung transformasi organisasi melalui layanan yang saling terhubung."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <DetailCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-black/8 bg-white/70">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            eyebrow="Preview Halaman"
            title="Semua informasi utama company profile tersedia dalam halaman detail"
            description="Website ini disusun mengikuti struktur materi PDF company profile, mulai dari profil perusahaan, lima pilar layanan, solusi, klien, keunggulan, hingga informasi kontak."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pagePreviews.map((page) => (
              <PreviewCard key={page.href} {...page} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-[2rem] border border-black/8 bg-[#111111] px-8 py-10 text-[#f7f6f1] sm:px-10 lg:flex lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Beyond Procurement
            </p>
            <h2 className="font-[family:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
              Building business ecosystem melalui integrated solution dan professional partnership.
            </h2>
            <p className="text-sm leading-7 text-white/70 sm:text-base">
              Cocok untuk pemerintah, BUMN, organisasi, dan sektor swasta yang
              membutuhkan partner terpercaya untuk pengadaan, digitalisasi,
              komunikasi, maupun pengembangan organisasi.
            </p>
          </div>
          <Link
            href="/kontak"
            className="mt-8 inline-flex rounded-full bg-[#f7f6f1] px-6 py-3 text-sm font-medium text-[#111111] transition hover:bg-white lg:mt-0"
          >
            Mulai Kolaborasi
          </Link>
        </div>
      </section>
    </>
  );
}
