import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://1000promptchuyengia.shop"),
  title: {
    default: "Hữu Hùng AI - 1000 Prompt Chuyên Gia",
    template: "%s",
  },
  description: "Bộ 1000 Prompt AI chuyên gia cho kinh doanh, marketing, bán hàng, tài chính, năng suất và ứng dụng AI thực chiến.",
  openGraph: {
    title: "Hữu Hùng AI - 1000 Prompt Chuyên Gia",
    description: "Mua prompt AI theo từng pack hoặc combo trọn bộ, thanh toán QR và nhận file tự động qua email.",
    url: "https://1000promptchuyengia.shop",
    siteName: "Hữu Hùng AI",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
