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
  title: "Gauransh | Java Full Stack Developer Portfolio",
  description: "Personal developer portfolio of Gauransh, a Java Full Stack Developer specializing in Spring Boot, React, Next.js, TypeScript, Hibernate, MySQL, and Docker. Showcasing full-stack applications and APIs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full bg-bg-app text-fg-app antialiased`}>
        {children}
      </body>
    </html>
  );
}
