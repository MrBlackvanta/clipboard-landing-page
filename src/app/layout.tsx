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

const SITE_URL =
  "https://clipboard-landing-page.abdelrhman-ahmed8881.workers.dev";

const name = "Clipboard";
const title = `${name} | Copy history for Mac and iOS`;
const description =
  "Track and organize everything you copy. Instantly access your clipboard on all your devices.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Clipboard, copy history for Mac and iOS, on a tablet and a phone.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
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
