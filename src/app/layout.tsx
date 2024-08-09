import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PlausibleProvider from 'next-plausible'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumino",
  description: "Turn your iPhone into a night light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="luminoapp.com" />
      </head>
        <body className={inter.className}>{children}</body>
    </html>
  );
}
