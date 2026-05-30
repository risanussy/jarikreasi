import { PageHero } from "@/components/page-hero";
import { processSteps } from "@/data/company";

export default function ProsesPage() {
  return (
    <>
      <PageHero
        eyebrow="Proses Kerja"
        title="Metode delivery yang jelas dari awal hingga sistem berjalan stabil"
        description="Halaman ini menjelaskan tahapan kerja jarikreasi agar klien memahami ritme proyek, ekspektasi deliverables, dan pola komunikasi selama kolaborasi."
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6">
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
            Format kolaborasi yang biasa kami jalankan
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold">Project Sprint</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Cocok untuk MVP, redesign, atau pengembangan modul prioritas dalam timeline terukur.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Retained Squad</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Untuk perusahaan yang membutuhkan pengembangan berkelanjutan dengan kapasitas tim yang konsisten.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Managed Support</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Untuk menjaga stabilitas sistem live melalui monitoring, incident response, dan enhancement ringan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
