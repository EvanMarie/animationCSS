interface MainContainerProps {
  children?: React.ReactNode;
  header?: string;
  subheader?: string;
}

export default function MainContainer({
  children,
  header,
  subheader,
}: MainContainerProps) {
  return (
    <div className="main-container">
      <header>
        <h1>{header}</h1>
        <h2>{subheader}</h2>
      </header>
      {children}
    </div>
  );
}
