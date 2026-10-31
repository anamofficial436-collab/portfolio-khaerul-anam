import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khaerul | Informatics Student & Developer",
  description: "Portofolio Khaerul — mahasiswa Informatika yang tertarik pada AI, software development, computer vision, dan teknologi.",
  openGraph: {
    title: "Khaerul | Portfolio",
    description: "Informatics Student & Developer",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
