import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/app/providers/theme-provider";
import "./globals.css";

// Configure Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// SEO metadata
export const metadata: Metadata = {
  title: "Youssef Labrahmi | Software Engineer",
  description: "Full-stack software engineer specializing in modern web technologies",
  keywords: ["software engineer", "full-stack developer", "react", "typescript"],
  openGraph: {
    type: "website",
    title: "Youssef Labrahmi | Software Engineer",
    description: "Full-stack software engineer specializing in modern web technologies",
    images: ["/og-image.png"],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
