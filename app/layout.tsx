import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

const everett = localFont({
  src: [
    {
      path: "./fonts/TWKEverett-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/TWKEverett-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/TWKEverett-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TWKEverett-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/TWKEverett-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/TWKEverett-Black.woff2",
      weight: "800",
      style: "normal",
    }
  ],
  variable: "--font-everett",
  weight: "100 800",
});

export const metadata: Metadata = {
  title: "Brucira",
  description: "UI UX Digital Agency",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${openSans.className} ${everett.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
