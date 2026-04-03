import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-noto-sans-jp",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LARQ",
  description: "Figma to React Tailwind project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSansJP.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
