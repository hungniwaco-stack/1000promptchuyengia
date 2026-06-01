import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hữu Hùng AI - 1000 Prompt Chuyên Gia",
  description: "Landing page bán các bộ Prompt AI của Hữu Hùng AI.",
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
