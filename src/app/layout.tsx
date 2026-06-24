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
  title: "Gauransh | Frontend Engineer Portfolio",
  description: "Personal developer portfolio of Gauransh, a Frontend Engineer specializing in React, Next.js, TypeScript, and Tailwind CSS. Showcasing InsightBoard, StoreFlow, and IdentityFlow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full bg-bg-app text-fg-app antialiased`}>
        {children}
      </body>
    </html>
  );
}
