import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { portfolio } from "@/data/company";

export default function PortofolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portofolio"
        title="Contoh implementasi yang menunjukkan cara kami menyelesaikan masalah"
        description="Portfolio ini menggambarkan pendekatan jarikreasi dalam merancang sistem, menjalankan delivery, dan menghasilkan dampak operasional yang lebih baik."
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6">
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
                Lihat studi kasus
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
