import type { Metadata } from "next";
import { Fraunces, Mulish } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const mullish = Mulish({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-mullish",
});

const fraunces = Fraunces({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Ivan",
  description:
    "Provice an information about Ivan Rizky Saputra. This page also include skills and project from ivan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`bg-white ${mullish.variable} ${fraunces.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
