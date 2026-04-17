import { IBM_Plex_Mono, Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

export const metadata = {
  title: "Code Labs | Engineering consulting for people who want to keep growing",
  description:
    "Code Labs is a Swedish consultancy focused on platform engineering, DevOps, cloud infrastructure, internal tooling, reliability, and modern delivery work.",
};

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Inter_Tight({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable} ${mono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
