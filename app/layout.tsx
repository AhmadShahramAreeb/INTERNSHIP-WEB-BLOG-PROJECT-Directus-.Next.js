import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/navigation/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmad Shahram Areeb - Blog",
  description: "Ahmad Shahram AREEB Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="pt-10 min-h-[calc(150vh-400px)]">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
