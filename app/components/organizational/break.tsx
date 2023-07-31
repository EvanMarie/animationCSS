interface BreakProps {
  height?: number | string;
}

export default function Break({ height = "15px" }: BreakProps) {
  return <div className="break" style={{ height: height }}></div>;
}
