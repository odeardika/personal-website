import type { Metadata, Viewport } from "next";
import "./globals.css";
import Aos from "@/components/animated-on-scroll";
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: "odeardika.",
  description: "Personal Website to show my personality and my work story",
  keywords: "programming, web development, software engineering, frontend, backend, TypeScript, React, Next.js, JavaScript, coding, developer, portfolio, UI/UX, full stack, technology",
  authors: [{ name: "Ode Ardika", url: "www.linkedin.com/in/odeardika" }],
  openGraph : {
    url: "https://www.odeardika.my.id/",
    siteName : "Ode Ardika Personal Website",
    images : [
      {
        url: "/assets/images/og_img.png",
        width: 1200,
        height: 630,
        alt: "openGraph's Image"
      }
    ],
    type : "website"
  },
  twitter : {
    card: "summary_large_image",
    images: ["/assets/images/twitter_img.png"]
  },
  icons: {
    icon : [
      {url: '/favicon.ico'},
      {url: '/assets/images/icon-192.png', sizes: '192x192', type: 'image/png'},
      {url: '/assets/images/icon-512.png', sizes: '512x512', type: 'image/png'},
    ],
    apple: [
      {url: '/assets/images/icon-180.png', sizes: '180x180'}
    ],
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
