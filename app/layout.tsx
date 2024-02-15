import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Outcastral Labs",
  description: "Outcastral Labs is a maker agency and capabilities shop that specializes applying AI software and robotics research to the industrial base",
  keywords: "AI, artificial intelligence, industrial manufacturing, industrial, manufacturing, robotics, edge computing, software, hardware, IoT",
  image: "https://outcastral.com/_next/static/media/hoodLogo.a25a42f3.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
