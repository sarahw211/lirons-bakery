import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CartDrawer from "@/components/CartDrawer";
import WaFloat from "@/components/WaFloat";
import Tracking from "@/components/Tracking";

// The home page's fonts: Nostela for headings and buttons, Plinko for running text, Black Delights for the big English mood words.
const nostela = localFont({
  src: [
    { path: "../fonts/Nostela-Fs-Light-Regular.woff2", weight: "300" },
    { path: "../fonts/Nostela-Fs-Bold.woff2", weight: "700" },
  ],
  variable: "--f-head",
  display: "swap",
});
const plinko = localFont({
  src: [
    { path: "../fonts/Plinko-FS-Light.woff2", weight: "300" },
    { path: "../fonts/Plinko-FS-Regular.woff2", weight: "400" },
  ],
  variable: "--f-body",
  display: "swap",
});
const delights = localFont({ src: "../fonts/L-Black-Delights-Regular.ttf", variable: "--f-en", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3200");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "לירונ'ס · עוגות, עוגיות ומגשי אירוח בעפולה", template: "%s · לירונ'ס" },
  description: "עוגות, עוגיות, מגשי אירוח ומארזים בעבודת יד מעפולה. חלבי ופרווה, בכשרות מהודרת.",
  icons: { icon: "/img/favicon-64.png", apple: "/img/favicon-180.png" },
  openGraph: { type: "website", siteName: "Liron's Bakery", locale: "he_IL" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${nostela.variable} ${plinko.variable} ${delights.variable}`}>
      <body>
        <a href="#main" className="skip">דלג לתוכן הראשי</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <CartDrawer />
        <WaFloat />
        <Tracking />
        <Analytics />
      </body>
    </html>
  );
}
