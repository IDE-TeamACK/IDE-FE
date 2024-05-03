import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import initMSW from "@/__mocks__";
import * as Shared from "@/shared";
import * as Widgets from "@/widgets";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

if (process.env.NODE_ENV === "development") {
  initMSW();
}

export const metadata: Metadata = {
  title: "ACK IDE",
  description: "동시편집 지원 웹 기반 IDE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>
        <Shared.Utils.QueryProvider>
          <Widgets.Header />
          {children}
        </Shared.Utils.QueryProvider>
      </body>
    </html>
  );
}
