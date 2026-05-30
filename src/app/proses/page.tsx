import { PageHero } from "@/components/page-hero";
import { processSteps, reasons } from "@/data/company";

export default function ProsesPage() {
  return (
    <>
      <PageHero
        eyebrow="Mengapa Jari Kreasi"
        title="Alasan memilih PT Jari Kreasi sebagai partner yang terintegrasi"
        description="Halaman ini merangkum poin keunggulan perusahaan sesuai company profile, sekaligus memperjelas karakter layanan kami."
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-black/8 bg-white p-8"
            >
              <h2 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-tight text-[#111111]">
                {item.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-[#5f5a52]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="grid gap-6 rounded-[2rem] border border-black/8 bg-white p-8 lg:grid-cols-[0.22fr_1fr]"
            >
              <div>
                <p className="font-[family:var(--font-display)] text-5xl font-semibold tracking-tight text-[#a45a3c]">
                  0{index + 1}
                </p>
              </div>
              <div>
                <h2 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-tight text-[#111111]">
                  {step.title}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[#5f5a52]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-black/8 bg-[#111111] p-8 text-[#f7f6f1]">
          <h2 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-tight">
            Nilai utama kolaborasi
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold">Integrated Solution</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Menggabungkan kebutuhan operasional, digitalisasi, komunikasi, dan pengembangan organisasi dalam satu solusi terintegrasi.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Professional Partnership</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Menjalankan proyek dengan pendekatan profesional, terstruktur, dan berorientasi pada hasil yang terukur.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Digital Innovation</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Membantu organisasi bertransformasi melalui solusi digital yang modern dan aplikatif.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
