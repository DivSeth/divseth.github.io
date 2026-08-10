import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Divyaansh Seth",
  description:
    "Portfolio of Divyaansh Seth — CS + Math @ UMass Amherst. Software, AI systems, distributed systems, and performance-sensitive software.",
  openGraph: {
    title: "Divyaansh Seth",
    description:
      "CS + Math. Building software, intelligent systems, and occasionally things that move very fast.",
    url: "https://divseth.github.io",
    siteName: "Divyaansh Seth",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
