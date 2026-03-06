import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Divyaansh Seth",
  description:
    "Portfolio of Divyaansh Seth — CS & Math @ UMass Amherst. AI, Quant, Full-Stack.",
  openGraph: {
    title: "Divyaansh Seth",
    description: "Portfolio of Divyaansh Seth",
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
      <body className="bg-black text-white antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
