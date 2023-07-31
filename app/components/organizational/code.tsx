import React from "react";

interface Code {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export default function Code({
  code,
  language = "javascript",
  showLineNumbers,
}: Code) {
  return (
    <pre
      style={{
        whiteSpace: "pre",
        fontFamily: "'Ubuntu Mono', monospace",
        fontSize: "var(--codeText)",
        color: "var(--codeColor)",
        margin: 0,
      }}
    >
      <code>{code}</code>
    </pre>
  );
}
