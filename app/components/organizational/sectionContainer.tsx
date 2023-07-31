interface SectionContainerProps {
  children?: React.ReactNode;
  header?: string;
  subheader?: string;
}

export default function SectionContainer({
  children,
  header,
  subheader,
}: SectionContainerProps) {
  return (
    <div className="section-container">
      <section>
        <header>
          <h2>{header}</h2>
          <h3>{subheader}</h3>
        </header>
        <div className="section-text">
          <div className="content-stack">{children}</div>
        </div>
      </section>
    </div>
  );
}
