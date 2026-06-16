import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DesignLens",
  description: "AI Design Analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}