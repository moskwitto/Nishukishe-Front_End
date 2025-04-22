import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/general/header";
import Footer from "@/components/general/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nishukishe",
  description:
    "Nishukishe is an effecient way to find out where your matatu is in Nairobi",
  keywords: [
    "Nairobi",
    "Matatu",
    "Transport",
    "Location",
    "Navigation",
    "Public Transport",
    "Nishukishe",
    "Bust stop",
  ],
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
        <Header />
        <div
          style={{
            maxWidth: "1440px",
            minHeight: "100vh",
            paddingTop: "56px",
          }}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
