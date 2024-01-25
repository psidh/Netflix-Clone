import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Navbar from '@/components/Navbar';

// const Netflix = localFont({ src: './netflix-sans-cufonfonts/NetflixSansRegular.ttf' })

const Netflix = localFont({
  src: [
    {
      path: './netflix-sans-cufonfonts/NetflixSansThin.ttf',
      weight: '200',
      style: 'extralight',
    },
    {
      path: './netflix-sans-cufonfonts/NetflixSansLight.ttf',
      weight: '300',
      style: 'light',
    },
    {
      path: './netflix-sans-cufonfonts/NetflixSansRegular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './netflix-sans-cufonfonts/NetflixSansRegular.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './netflix-sans-cufonfonts/NetflixSansMedium.ttf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: './netflix-sans-cufonfonts/NetflixSansBold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: './netflix-sans-cufonfonts/NetflixSansBlack.ttf',
      weight: '800',
      style: 'bold',
    },
  ],
})

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
