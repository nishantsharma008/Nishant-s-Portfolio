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

// ✅✅✅ UPDATED METADATA - THIS IS WHAT CHANGES ✅✅✅
export const metadata: Metadata = {
  // 👇 YOUR CUSTOM TITLE (was "Create Next App")
  title: "Nishant's Portfolio",
  
  // 👇 YOUR CUSTOM DESCRIPTION
  description: "Full-stack Developer Portfolio | Analytics & Data Enthusiast",
  
  // 👇 ICON CONFIGURATION (points to your favicon.png)
  icons: {
  icon: '/favicon.png?v=2',     // ← ADD ?v=2
  shortcut: '/favicon.png?v=2',
  apple: '/favicon.png?v=2',
},
  
  // 👇 SOCIAL SHARING CONFIGURATION
  openGraph: {
    title: "Nishant's Portfolio",
    description: "Welcome to my developer portfolio",
    url: "https://nishantavien.vercel.app",
    siteName: "Nishant's Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Nishant's Portfolio",
      },
    ],
  },
  
  // 👇 TWITTER CARD CONFIGURATION
  twitter: {
    card: "summary_large_image",
    title: "Nishant's Portfolio",
    description: "Developer Portfolio",
    images: ["/opengraph-image.png"],
  },
  
  // 👇 OTHER USEFUL METADATA
  keywords: ["portfolio", "developer", "full-stack", "react", "nextjs"],
  authors: [{ name: "Nishant" }],
  creator: "Nishant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}