import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "데이먼의 PM 일지 - PM/기획 클래스",
  description: "데이먼의 PM 일지: 프로젝트 관리 및 기획에 대한 통찰과 클래스 정보 제공",
  openGraph: {
    title: "데이먼의 PM 일지 - PM/기획 클래스",
    description: "데이먼의 PM 일지: 프로젝트 관리 및 기획에 대한 통찰과 클래스 정보 제공",
    url: "https://class.damon.im",
    siteName: "데이먼의 PM 일지",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
