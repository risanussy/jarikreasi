import Link from "next/link";

type PreviewCardProps = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
};

export function PreviewCard({
  href,
  eyebrow,
  title,
  description,
}: PreviewCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-[2rem] border border-black/8 bg-white p-6 transition hover:-translate-y-1 hover:border-[#a45a3c]/35 hover:shadow-[0_24px_60px_rgba(17,17,17,0.08)]"
    >
      <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#a45a3c]">
        {eyebrow}
      </p>
      <h3 className="mt-5 font-[family:var(--font-display)] text-2xl font-semibold tracking-tight text-[#111111] transition group-hover:text-[#a45a3c]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[#5f5a52]">{description}</p>
      <span className="mt-8 inline-flex text-sm font-medium text-[#111111]">
        Lihat detail
      </span>
    </Link>
  );
}

type DetailCardProps = {
  title: string;
  description: string;
};

export function DetailCard({ title, description }: DetailCardProps) {
  return (
    <div className="rounded-[1.75rem] border border-black/8 bg-white p-6">
      <h3 className="font-[family:var(--font-display)] text-xl font-semibold tracking-tight text-[#111111]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[#5f5a52]">{description}</p>
    </div>
  );
}
