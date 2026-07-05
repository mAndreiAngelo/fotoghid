type PageIntroProps = {
  eyebrow: string;
  title: string;
  lead: string;
};

export default function PageIntro({ eyebrow, title, lead }: PageIntroProps) {
  return (
    <div className="border-b border-line bg-surface">
      <div className="container-site py-14 sm:py-16">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {lead}
        </p>
      </div>
    </div>
  );
}
