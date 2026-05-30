type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#a45a3c]">
        {eyebrow}
      </p>
      <h2 className="font-[family:var(--font-display)] text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-[#5f5a52] sm:text-lg">{description}</p>
    </div>
  );
}
