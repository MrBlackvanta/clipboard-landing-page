import type { Metadata, Viewport } from "next";
import { Bai_Jamjuree } from "next/font/google";
import Footer from "@/components/layout/footer";
import "./globals.css";

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clipboard landing page",
  description:
    "Frontend Mentor Clipboard landing page challenge built with Next.js and TypeScript.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "hsl(0, 0%, 100%)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${baiJamjuree.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
