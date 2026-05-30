import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { company, solutions } from "@/data/company";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);

  if (!solution) {
    return {};
  }

  return {
    title: `${solution.title} | ${company.name}`,
    description: solution.summary,
  };
}

export default async function SolusiDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);

  if (!solution) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Detail Solusi"
        title={solution.title}
        description={solution.summary}
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-20 lg:grid-cols-3 lg:px-10">
        <div className="rounded-[2rem] border border-black/8 bg-white p-8">
          <h2 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-tight text-[#111111]">
            Tantangan
          </h2>
          <p className="mt-4 text-base leading-8 text-[#5f5a52]">{solution.challenge}</p>
        </div>
        <div className="rounded-[2rem] border border-black/8 bg-white p-8">
          <h2 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-tight text-[#111111]">
            Pendekatan
          </h2>
          <p className="mt-4 text-base leading-8 text-[#5f5a52]">{solution.approach}</p>
        </div>
        <div className="rounded-[2rem] border border-black/8 bg-[#111111] p-8 text-[#f7f6f1]">
          <h2 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-tight">
            Outcome
          </h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-white/75">
            {solution.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
