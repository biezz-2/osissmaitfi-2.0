import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import SmoothScroll from "../components/SmoothScroll";
import { ThemeProvider } from "../contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "OSIS SMAIT FITHRAH INSANI - Bhaskara 2025",
    description: "Organisasi Siswa Intra Sekolah SMAIT Fithrah Insani - Bhaskara 2025",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id" className="scroll-smooth">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                />
            </head>
            <body className={`${inter.className} antialiased`}>
                <ThemeProvider>
                    <SmoothScroll>
                        <div className="navbar-container">
                            <Navbar />
                        </div>
                        <PageTransition>
                            <div className="content-wrapper">
                                {children}
                            </div>
                        </PageTransition>
                        <Footer />
                    </SmoothScroll>
                </ThemeProvider>
            </body>
        </html>
    );
}