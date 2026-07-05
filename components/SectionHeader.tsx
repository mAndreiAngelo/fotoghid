type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  id?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  lead,
  id,
}: SectionHeaderProps) {
  return (
    <div className="max-w-2xl" id={id}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{lead}</p>
      )}
    </div>
  );
}
