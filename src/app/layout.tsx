import "@/styles/global.css";
import { ReactNode } from "react";

export const metadata = {
  title: "밤돌이로 채용 사이트",
  description: "밤돌이로 채용 사이트입니다",
};

interface PropsType {
  children: ReactNode;
}

const RootLayout = ({ children }: PropsType) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
