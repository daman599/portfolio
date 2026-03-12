import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Home, Layers, Sparkles, Twitter, Github, Linkedin } from "lucide-react";
import { DockItemsType } from "@/types";
import { AppWrapper } from "@/components/app-wrapper";
import { Analytics } from "@vercel/analytics/next";

const items: DockItemsType[] = [
  {
    title: "Home",
    icon: <Home />,
    socialLink: false,
    href: "/"
  },
  {
    title: "Projects",
    icon: <Layers />,
    socialLink: false,
    href: "/projects"
  },
  {
    title: "Work",
    icon: <Sparkles />,
    socialLink: false,
    href: "/work"
  },
  {
    title: "Twitter",
    icon: <Twitter />,
    socialLink: true,
    href: "https://x.com/daman76752"
  },
  {
    title: "Github",
    icon: <Github />,
    socialLink: true,
    href: "https://github.com/daman599"
  },
  {
    title: "LinkedIn",
    icon: <Linkedin />,
    socialLink: true,
    href: "https://www.linkedin.com/in/damanpreet-kaur-060ba32a6"
  },
]

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "daman",
  description: "Design engineer and frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <AppWrapper>
          <div className="w-full max-w-3xl mx-auto min-h-screen relative px-3 md:px-4 py-8 md:py-10">
            <main>
              {children}
            </main>

            <div className="fixed bottom-3 md:bottom-10 right-5 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
              <FloatingDock items={items} />
            </div>
          </div>
        </AppWrapper>
        <Analytics />
      </body>
    </html>
  );
}
