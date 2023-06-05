import "@/styles/global.css";
import ScrollTop from "@/utils/ScrollTop";
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
      <link rel="icon" href="/assets/favicon.png" />
      <body>
        {children}
        <ScrollTop />
      </body>
    </html>
  );
};

export default RootLayout;
