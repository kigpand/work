import Header from "@/components/header/Header";
import "../styles/globals.scss";

export const metadata = {
  title: "프론트엔드 개발자 | 김지훈",
  description: "Jihun's proFile Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
