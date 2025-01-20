import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Anek_Telugu } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const anek = Anek_Telugu({ subsets: ["latin"], variable: "--font-caption" });

//const geistSans = localFont({
//  src: "./fonts/GeistVF.woff",
//  variable: "--font-geist-sans",
//  weight: "100 900",
//});
//
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Victor De Sousa . Software Engineer",
  description: "Online portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${
          anek.variable
        } ${"font-sans h-full bg-background text-foreground"} ${
          geistMono.variable
        } antialiased`}
      >
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
