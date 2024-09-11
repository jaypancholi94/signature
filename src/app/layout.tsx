import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { DetailProvider } from "@/context/detail-context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Signature",
  description:
    "Turn your boring emails into masterpieces. ✨✉️ Because why not? ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-background-50`}
        suppressHydrationWarning={true}
      >
        <DetailProvider>{children}</DetailProvider>
      </body>
    </html>
  );
}
