import type { ReactNode } from "react";

export const metadata = {
  title: "CivicSpan IT Group",
  description: "Practical IT support for infrastructure-focused organizations.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}