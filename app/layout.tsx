import type { Metadata } from "next";
import "./globals.css";
import Aos from "@/components/animated-on-scroll";
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: "odeardika.",
  description: "Personal Website to show my personality and my work story",
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Aos />
      <html lang="en" className={poppins.className}>
        <body>
          {children}
        </body>
      </html>
    </>
  );
}
