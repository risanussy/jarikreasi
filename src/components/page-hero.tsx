type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-black/8">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.42),_rgba(247,246,241,0.92)),radial-gradient(circle_at_0%_18%,_rgba(207,117,72,0.26),_transparent_34%),radial-gradient(circle_at_28%_52%,_rgba(240,195,166,0.38),_transparent_30%),radial-gradient(circle_at_100%_20%,_rgba(17,17,17,0.08),_transparent_28%),radial-gradient(circle_at_78%_46%,_rgba(208,196,170,0.22),_transparent_26%)]" />
      <div className="relative mx-auto flex w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="max-w-4xl space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#a45a3c]">
            {eyebrow}
          </p>
          <h1 className="font-[family:var(--font-display)] text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-[#5f5a52]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
