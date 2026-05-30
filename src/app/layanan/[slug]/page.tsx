import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { company, services } from "@/data/company";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | ${company.name}`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Detail Layanan"
        title={service.title}
        description={service.intro}
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <div className="rounded-[2rem] border border-black/8 bg-white p-8">
          <h2 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-tight text-[#111111]">
            Cakupan Layanan
          </h2>
          <ul className="mt-6 space-y-4 text-base leading-8 text-[#5f5a52]">
            {service.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-black/8 bg-[#111111] p-8 text-[#f7f6f1]">
            <h2 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-tight">
              Dampak untuk bisnis
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-white/75">
              {service.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-black/8 bg-white p-8">
            <h2 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-tight text-[#111111]">
              Teknologi umum
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {service.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 bg-[#f7f6f1] px-4 py-2 text-sm text-[#3f3a34]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
