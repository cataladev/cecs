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
  title: "UCF CECS Community Discord | Connect with Engineering & Computer Science Students",
  description: "Join the unofficial Discord community for UCF's College of Engineering and Computer Science (CECS) students. Connect with peers in Computer Science, Computer Engineering, Electrical Engineering, Mechanical Engineering, Aerospace Engineering and more.",
  keywords: [
    "UCF CECS", 
    "UCF Engineering", 
    "UCF IT",
    "UCF IT Discord",
    "UCF Computer Science", 
    "UCF Computer Engineering", 
    "UCF Electrical Engineering", 
    "UCF Mechanical Engineering", 
    "UCF Aerospace Engineering", 
    "UCF Civil Engineering", 
    "UCF Environmental Engineering", 
    "UCF Industrial Engineering", 
    "UCF Information Technology", 
    "UCF Materials Science and Engineering", 
    "UCF Construction Engineering", 
    "UCF Photonics Science",
    "CECS Discord",
    "UCF Engineering Discord",
    "UCF CECS community",
    "Engineering student resources",
    "CECS Discord",
    "UCF CECS Discord",
    "UCF CECS Community Discord",
    "UCF CECS Community",
    "UCF CECS Community Discord",
    "UCF CECS Community Discord"
  ],
  authors: [{ name: "CECS Community Contributors" }],
  openGraph: {
    title: "UCF CECS Community Discord",
    description: "Connect with fellow UCF CECS students in Computer Science, Engineering, Information Technology, and other majors. Share resources, get help, and build your network.",
    url: "https://cecsknights.org",
    siteName: "UCF CECS Community Hub",
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
