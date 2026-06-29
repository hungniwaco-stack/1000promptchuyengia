import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import AnalyticsTracking from "./Analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.1000promptchuyengia.shop"),
  title: {
    default: "Hữu Hùng AI - 1000 Prompt Chuyên Gia",
    template: "%s",
  },
  description: "Bộ 1000 Prompt AI chuyên gia cho kinh doanh, marketing, bán hàng, tài chính, năng suất và ứng dụng AI thực chiến.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hữu Hùng AI - 1000 Prompt Chuyên Gia",
    description: "Mua prompt AI theo từng pack hoặc combo trọn bộ, thanh toán QR và nhận file tự động qua email.",
    url: "https://www.1000promptchuyengia.shop",
    siteName: "Hữu Hùng AI",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/banner.webp",
        width: 1942,
        height: 809,
        alt: "1000 Prompt Chuyên Gia Hữu Hùng AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hữu Hùng AI - 1000 Prompt Chuyên Gia",
    description: "Mua prompt AI theo từng pack hoặc combo trọn bộ, thanh toán QR và nhận file tự động qua email.",
    images: ["/images/banner.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        {children}
        <A