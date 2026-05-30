import { PageHero } from "@/components/page-hero";
import {
  aboutSections,
  company,
  stats,
  values,
  visionMission,
} from "@/data/company";

export default function TentangPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        title={`Mengenal ${company.name} lebih dekat`}
        description="Halaman ini merangkum profil perusahaan, perkembangan sejak 2009, visi, misi, dan nilai utama yang menjadi fondasi PT Jari Kreasi."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="space-y-6">
          {aboutSections.map((section) => (
            <div
              key={section.title}
              className="rounded-[2rem] border border-black/8 bg-white p-8"
            >
              <h2 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-tight text-[#111111]">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-[#5f5a52]">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-black/8 bg-[#111111] p-8 text-[#f7f6f1]">
            <p className="text-xs uppercase tracking-[0.28em] text-white/50">
              Snapshot
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] bg-white/6 p-5">
                  <p className="font-[family:var(--font-display)] text-3xl font-semibold">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/8 bg-white p-8">
            <h2 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-tight text-[#111111]">
              Informasi Perusahaan
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[#5f5a52]">
              <p>
                <span className="font-semibold text-[#111111]">Nama Perusahaan:</span>{" "}
                {company.name}
              </p>
              <p>
                <span className="font-semibold text-[#111111]">Tagline:</span> {company.tagline}
              </p>
              <p>
                <span className="font-semibold text-[#111111]">Didirikan:</span> {company.founded}
              </p>
              <p>
                <span className="font-semibold text-[#111111]">Fokus Layanan:</span>{" "}
                Procurement, digital solution, media & communication, human
                development, dan business support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/8 bg-white/70">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-black/8 bg-white p-8">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#a45a3c]">
                Visi
              </p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-3xl font-semibold tracking-tight text-[#111111]">
                {visionMission.vision}
              </h2>
            </div>
            <div className="rounded-[2rem] border border-black/8 bg-white p-8">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#a45a3c]">
                Misi
              </p>
              <ul className="mt-6 space-y-4 text-base leading-8 text-[#5f5a52]">
                {visionMission.mission.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#a45a3c]">
              Nilai Kerja
            </p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
              Inovatif, adaptif, berkelanjutan, dan terpercaya
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[1.75rem] border border-black/8 bg-white p-6"
              >
                <h3 className="font-[family:var(--font-display)] text-xl font-semibold tracking-tight text-[#111111]">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
