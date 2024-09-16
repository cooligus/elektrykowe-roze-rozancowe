import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: "Elektrykowe Róże Różańcowe",
  description: "Strona informacyjna Elektrykowych Róż Rózańcowych",
};

const inter = Inter({ 
  subsets: ['latin-ext'],
  weight:["200", "300", "400", "500", "800"],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
