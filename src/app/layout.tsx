import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hezekiah Shem Baling (HSB) | Full-Stack Developer & Data Analyst",
  description:
    "Portfolio of Hezekiah Shem Baling — Aspiring Full-Stack Developer and Quantitative Data Analyst working with the MERN stack, SQL, Python, Excel and Power BI.",
  keywords: [
    "Hezekiah Shem Baling",
    "HSB",
    "Full-Stack Developer",
    "Data Analyst",
    "MERN",
    "React",
    "Next.js",
    "Python",
    "SQL",
    "PostgreSQL",
    "MySQL",
    "Power BI",
  ],
  authors: [{ name: "Hezekiah Shem Baling" }],
  openGraph: {
    title: "Hezekiah Shem Baling | Full-Stack & Data Analytics Portfolio",
    description:
      "Crafted full-stack web engineering and quantitative data-driven development showcase.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
