import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { solutions } from "@/data/company";

export default function SolusiPage() {
  return (
    <>
      <PageHero
        eyebrow="Solusi"
        title="Solusi yang menjawab tantangan operasional dan pertumbuhan"
        description="Kami tidak menjual template yang sama untuk semua bisnis. Setiap solusi dibangun berdasarkan konteks, proses kerja, dan target performa perusahaan."
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article
              key={solution.slug}
              className="rounded-[2rem] border border-black/8 bg-white p-7"
            >
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#a45a3c]">
                Use Case
              </p>
              <h2 className="mt-5 font-[family:var(--font-display)] text-2xl font-semibold tracking-tight text-[#111111]">
                {solution.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5a52]">{solution.summary}</p>
              <p className="mt-5 text-sm leading-7 text-[#5f5a52]">{solution.challenge}</p>
              <Link
                href={`/solusi/${solution.slug}`}
                className="mt-8 inline-flex rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium text-[#111111] transition hover:border-[#a45a3c]/40 hover:text-[#a45a3c]"
              >
                Pelajari solusi
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
