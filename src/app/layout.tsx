import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
const Netflix = localFont({ src: './netflix.otf' })
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: "Netflix-Clone",
  description: "Created by P Sidharth | Next.js Developer",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={Netflix.className}>
        {/* <Navbar /> */}
        {children}
        </body>
    </html>
  );
}
