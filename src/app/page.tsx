import Link from "next/link";

import { PreviewCard, DetailCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import { company, highlights, pagePreviews, stats } from "@/data/company";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-black/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(164,90,60,0.20),_transparent_36%),radial-gradient(circle_at_80%_20%,_rgba(17,17,17,0.10),_transparent_28%),linear-gradient(180deg,_rgba(255,255,255,0.78),_rgba(247,246,241,1))]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-28">
          <div className="space-y-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#a45a3c]">
              Company Profile 2026
            </p>
            <div className="space-y-6">
              <h1 className="max-w-4xl font-[family:var(--font-display)] text-5xl font-semibold tracking-tight text-[#111111] sm:text-6xl lg:text-7xl">
                Solusi digital modern untuk perusahaan yang ingin bergerak lebih presisi.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
                {company.description} Kami merancang sistem, pengalaman pengguna,
                dan delivery teknologi yang fokus pada efisiensi operasional,
                pertumbuhan bisnis, dan keberlanjutan jangka panjang.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/kontak"
                className="rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-[#f7f6f1] transition hover:bg-[#2c2a28]"
              >
                Mulai Konsultasi
              </Link>
              <Link
                href="/portofolio"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#111111] transition hover:border-[#a45a3c]/30 hover:text-[#a45a3c]"
              >
                Lihat Portofolio
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
          eyebrow="Keunggulan"
          title="Pendekatan minimalis, modern, dan fokus pada hasil"
          description="jarikreasi membantu perusahaan menyederhanakan kompleksitas teknologi menjadi sistem yang cepat digunakan, mudah dikembangkan, dan aman dioperasikan."
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
            title="Semua informasi penting tersedia dalam halaman detail terpisah"
            description="Setiap halaman dirancang untuk memudahkan pembaca memahami profil perusahaan, layanan, solusi, studi kasus, proses kerja, dan kontak secara lebih mendalam."
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
              Siap Berkolaborasi
            </p>
            <h2 className="font-[family:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
              Bangun platform digital yang rapi sejak awal bersama tim yang fokus pada kualitas delivery.
            </h2>
            <p className="text-sm leading-7 text-white/70 sm:text-base">
              Cocok untuk perusahaan yang ingin membangun sistem internal,
              portal pelanggan, dashboard data, atau melakukan modernisasi
              proses digital secara bertahap.
            </p>
          </div>
          <Link
            href="/kontak"
            className="mt-8 inline-flex rounded-full bg-[#f7f6f1] px-6 py-3 text-sm font-medium text-[#111111] transition hover:bg-white lg:mt-0"
          >
            Hubungi jarikreasi
          </Link>
        </div>
      </section>
    </>
  );
}
