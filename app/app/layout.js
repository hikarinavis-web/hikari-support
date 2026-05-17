import "./globals.css";

export const metadata = {
  title: "光回線 営業管理ツール",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
