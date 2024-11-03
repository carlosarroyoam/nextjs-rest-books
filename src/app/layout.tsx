import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next.js REST Books",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-zinc-50 text-zinc-600 antialiased",
          poppins.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
