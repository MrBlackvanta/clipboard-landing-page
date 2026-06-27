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
  metadataBase: new URL("https://vanta-clipboard-landing-page.netlify.app"),
  title: "Clipboard landing page",
  description:
    "Track and organize everything you copy. Instantly access your clipboard on all your devices.",
  openGraph: {
    title: "Clipboard landing page",
    description:
      "Track and organize everything you copy. Instantly access your clipboard on all your devices.",
    url: "/",
    siteName: "Clipboard",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clipboard landing page",
    description:
      "Track and organize everything you copy. Instantly access your clipboard on all your devices.",
  },
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
