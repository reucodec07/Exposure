//app/layout.tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Pixel Boards - LED Signage Experts | Premium Display Solutions",
    description: "Professional LED signage and display solutions. Custom LED boards, ACP cladding, neon signs, and professional installation services.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-white text-slate-800`}>
        <Navbar />
        <main className="ml-16 md:ml-64 transition-all duration-300">
            {children}
        </main>
        </body>
        </html>
    );
}