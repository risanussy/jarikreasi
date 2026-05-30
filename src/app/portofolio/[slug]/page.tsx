import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { company, portfolio } from "@/data/company";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return portfolio.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolio.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.client} | ${company.name}`,
    description: project.overview,
  };
}

export default async function PortofolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolio.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={`${project.client} / ${project.sector}`}
        title={project.title}
        description={project.overview}
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div className="rounded-[2rem] border border-black/8 bg-white p-8">
          <h2 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-tight text-[#111111]">
            Scope Pekerjaan
          </h2>
          <ul className="mt-6 space-y-4 text-base leading-8 text-[#5f5a52]">
            {project.scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[2rem] border border-black/8 bg-[#111111] p-8 text-[#f7f6f1]">
          <h2 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-tight">
            Dampak Implementasi
          </h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-white/75">
            {project.impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
