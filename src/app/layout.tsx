import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link"; // <-- Import Link from Next.js
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "A Design Space for In-IDE HAX",
    description: "", // #TODO
};

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
            )}
        >
        {/* START OF NAVIGATION */}
        <nav className="p-4 bg-gray-100">
            <ul className="flex gap-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/team">Team</Link>
                </li>
                <li>
                    <Link href="/ongoing">Ongoing research</Link>
                </li>
                <li>
                    <Link href="/in-ide-review">in-IDE HAX Review</Link>
                </li>
                <li>
                    <Link href="/confs">Conferences in the field</Link>
                </li>
                {/* Add more links here */}
            </ul>
        </nav>
        {/* END OF NAVIGATION */}

        {/* Here comes page content */}
        {children}
        </body>
        </html>
    );
}
