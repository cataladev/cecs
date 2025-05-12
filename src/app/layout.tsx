import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CECS Community Hub | Unofficial Student Resources",
  description: "An unofficial community resource hub for CECS students with a new Discord server. Not affiliated with UCF.",
  keywords: ["CECS", "engineering", "computer science", "community", "discord", "resources"],
  authors: [{ name: "CECS Community Contributors" }],
  openGraph: {
    title: "CECS Community Hub",
    description: "An unofficial community resource hub for CECS students",
    url: "https://cecsknights.org",
    siteName: "CECS Community Hub",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
