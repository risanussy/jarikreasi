import { DetailCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { aboutSections, company, stats, values } from "@/data/company";

export default function TentangPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        title={`Mengenal ${company.name} lebih dekat`}
        description="Halaman ini merangkum profil perusahaan, visi, misi, keunggulan, dan nilai kerja yang menjadi dasar setiap kolaborasi bersama klien."
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
                <span className="font-semibold text-[#111111]">Kantor Pusat:</span>{" "}
                {company.headquarters}
              </p>
              <p>
                <span className="font-semibold text-[#111111]">Fokus Utama:</span> Custom software,
                product design, DevOps, dan support sistem digital.
              </p>
              <p>
                <span className="font-semibold text-[#111111]">Model Kolaborasi:</span> Project-based,
                retainer, dan managed support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/8 bg-white/70">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#a45a3c]">
              Nilai Kerja
            </p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
              Cara kami menjaga kualitas kerja sama tetap efektif
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <DetailCard
                key={value.title}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
