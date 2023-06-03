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
    <Column gap="none" alignItems="center">
      <Header />
      <Banner />
      <StyledMainLayout>{children}</StyledMainLayout>
    </Column>
  );
};

export default MainLayout;

const StyledMainLayout = styled.section`
  padding-top: 44px;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;
