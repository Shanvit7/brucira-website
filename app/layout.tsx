import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans } from 'next/font/google';
import "./globals.css";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'], 
  display: 'swap',
});

const everett = localFont({
  src: "./fonts/Everett-Regular.woff",
  variable: "--font-everett",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Brucira",
  description: "UI UX Digital Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} ${everett.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
