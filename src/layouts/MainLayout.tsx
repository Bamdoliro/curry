import Banner from "@/components/domains/Banner";
import Column from "@/components/uis/Flex/Column";
import Header from "@/components/uis/Header";
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
  gap: 44px;
  width: 100vw;
  height: 150vh;
  background-color: ${color.white};
`;
