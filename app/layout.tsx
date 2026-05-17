import "./globals.css";

export const metadata = {
  title: "光回線 営業管理ツール",
  description: "営業管理Webアプリ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
