import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { services } from "@/data/company";

export default function LayananPage() {
  return (
    <>
      <PageHero
        eyebrow="Layanan"
        title="Lima pilar layanan dalam ekosistem bisnis yang terintegrasi"
        description="PT Jari Kreasi menghadirkan procurement, digital solution, media & communication, human development, dan business support sebagai satu rangkaian layanan."
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className="grid gap-8 rounded-[2rem] border border-black/8 bg-white p-8 lg:grid-cols-[0.8fr_1.2fr]"
            >
              <div className="space-y-4">
                <p className="text-sm text-[#a45a3c]">0{index + 1}</p>
                <h2 className="font-[family:var(--font-display)] text-3xl font-semibold tracking-tight text-[#111111]">
                  {service.title}
                </h2>
                <p className="text-base leading-8 text-[#5f5a52]">{service.summary}</p>
                <Link
                  href={`/layanan/${service.slug}`}
                  className="inline-flex rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium text-[#111111] transition hover:border-[#a45a3c]/40 hover:text-[#a45a3c]"
                >
                  Buka halaman detail
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#111111]">
                    Cakupan
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#5f5a52]">
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#111111]">
                    Nilai Tambah
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#5f5a52]">
                    {service.benefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
