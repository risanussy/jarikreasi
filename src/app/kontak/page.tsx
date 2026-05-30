import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { company, faqs } from "@/data/company";

export default function KontakPage() {
  return (
    <>
      <PageHero
        eyebrow="Hubungi Kami"
        title="Mulai kolaborasi untuk kebutuhan organisasi Anda"
        description="Sampaikan kebutuhan pengadaan, digitalisasi, komunikasi, pengembangan SDM, atau business support. Tim PT Jari Kreasi akan membantu memetakan solusi yang relevan."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-black/8 bg-[#111111] p-8 text-[#f7f6f1]">
            <h2 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-tight">
              Informasi Kontak
            </h2>
            <div className="mt-6 space-y-3 text-sm leading-7 text-white/75">
              <p>{company.email}</p>
              <p>{company.phone}</p>
              <p>{company.instagram}</p>
              <p>{company.founded}</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/8 bg-white p-8">
            <h2 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-tight text-[#111111]">
              Area Kolaborasi
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[#5f5a52]">
              <li>Pengadaan barang dan jasa untuk kebutuhan organisasi</li>
              <li>Digitalisasi melalui website, dashboard, automation, dan AI productivity</li>
              <li>Media & communication untuk publikasi, dokumentasi, dan produksi konten</li>
              <li>Human development dan business support untuk program organisasi</li>
            </ul>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/8 bg-white p-8">
          <h2 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-tight text-[#111111]">
            Langkah Awal yang Disarankan
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-[#f7f6f1] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#a45a3c]">
                01
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[#111111]">
                Sampaikan kebutuhan organisasi
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                Jelaskan kebutuhan pengadaan, digitalisasi, komunikasi, pelatihan, atau dukungan operasional yang sedang Anda rencanakan.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-[#f7f6f1] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#a45a3c]">
                02
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[#111111]">
                Penyelarasan solusi
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                Tim kami akan membantu memetakan pilar layanan yang paling sesuai agar kebutuhan organisasi dapat dijalankan secara efektif dan terintegrasi.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] bg-[#111111] p-6 text-[#f7f6f1]">
            <p className="text-sm leading-7 text-white/75">
              Untuk kebutuhan awal, Anda bisa langsung menghubungi kami melalui email{" "}
              <Link href={`mailto:${company.email}`} className="text-white">
                {company.email}
              </Link>{" "}
              atau telepon{" "}
              <Link href={`tel:${company.phone}`} className="text-white">
                {company.phone}
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-black/8 bg-white/70">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#a45a3c]">
              FAQ
            </p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
              Pertanyaan umum sebelum memulai kolaborasi
            </h2>
          </div>
          <div className="mt-12 grid gap-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[2rem] border border-black/8 bg-white p-8"
              >
                <h3 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-tight text-[#111111]">
                  {faq.question}
                </h3>
                <p className="mt-4 text-base leading-8 text-[#5f5a52]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
