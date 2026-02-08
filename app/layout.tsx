import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Staronly - Star-level digital solutions",
    description: "Star-level digital solutions for cooperatives, SMEs, and public institutions",
    icons: {
        icon: '/assets/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
