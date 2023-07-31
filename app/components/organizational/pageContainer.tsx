interface PageContainerProps {
  children?: React.ReactNode;
  header?: string;
}

export default function PageContainer({
  children,
  header,
}: PageContainerProps) {
  return (
    <div className="page-container">
      {header && ( // Check if the header prop is defined
        <header>
          <div className="title">{header}</div>
        </header>
      )}
      {children}
    </div>
  );
}
