import Banner from "@/components/Banner";
import Header from "@/components/common/Header";
import { color } from "@/styles/color";
import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  children: ReactNode;
}

const MainLayout = ({ children }: PropsType) => {
  return (
    <>
      <Header />
      <Banner />
      <StyledMainLayout>{children}</StyledMainLayout>
    </>
  );
};

export default MainLayout;

const StyledMainLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;
