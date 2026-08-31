import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import AnalyticsTracking from "./Analytics";
import "./globals.css";

// Bing Webmaster Tools: vào https://www.bing.com/webmasters -> Add site ->
// Verify ownership -> chọn "HTML Meta Tag" -> copy phần content trong thẻ
// <meta name="msvalidate.01" content="..."> rồi set biến môi trường
// BING_VERIFICATION_CODE trên Vercel (Project Settings -> Environment
// Variables) với đúng giá trị đó, sau đó redeploy. Chưa set thì thẻ này
// sẽ không xuất hiện, không ảnh hưởng gì đến site.
const bingVerificationCode = process.env.BING_VERIFICATION_CODE;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.1000promptchuyengia.shop"),
  title: {
    default: "Hữu Hùng AI - 1000 Prompt Chuyên Gia",
    template: "%s",
  },
  // Giữ dưới 150 ký tự để Google không cắt bằng "..." trên kết quả tìm kiếm.
  description: "1000 Prompt AI tiếng Việt, 10 lĩnh vực, dùng ngay với ChatGPT, Gemini, Claude. Tải ngay combo 199.000đ, nhận file tự động qua email.",
  alternates: {
    canonical: "/",
  },
  ...(bingVerificationCode
    ? { verification: { other: { "msvalidate.01": bingVerificationCode } } }
    : {}),
  openGraph: {
    title: "Hữu Hùng AI - 1000 Prompt Chuyên Gia",
    description: "Mua prompt AI theo từng pack hoặc combo trọn bộ, thanh toán QR và nhận file tự động qua email.",
    url: "https://www.1000promptchuyengia.shop",
    siteName: "Hữu Hùng AI",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "1000 Prompt Chuyên Gia Hữu Hùng AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hữu Hùng AI - 1000 Prompt Chuyên Gia",
    description: "Mua prompt AI theo từng pack hoặc combo trọn bộ, thanh toán QR và nhận file tự động qua email.",
    images: ["/images/og-image.jpg"],
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
        <Analytics />
        <AnalyticsTracking />
      </body>
    </html>
  );
}
