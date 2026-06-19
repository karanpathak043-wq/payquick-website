import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollRevealProvider from "./components/ScrollRevealProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PayQuick — Lightning-Fast Payments for Indian Businesses",
  description:
    "The enterprise-grade payment gateway tailored for modern Indian businesses. Accept payments through 100+ modes, UPI, cards, net banking, and more. Zero setup fees, onboard in 12 minutes.",
  keywords: [
    "payment gateway India",
    "UPI payments",
    "online payments",
    "payment links",
    "payment gateway for business",
    "Razorpay partner",
    "accept payments online",
    "Indian payment gateway",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/payquick-logo.png", type: "image/png" },
    ],
    apple: "/payquick-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        <ScrollRevealProvider />
      </body>
    </html>
  );
}

