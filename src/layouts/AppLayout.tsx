import Banner from "@/components/domains/Banner";
import Header from "@/components/uis/Header";
import { color } from "@/styles/color";
import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  children: ReactNode;
}

const AppLayout = ({ children }: PropsType) => {
  return (
    <>
      <Header />
      <Banner />
      <StyledAppLayout>{children}</StyledAppLayout>
    </>
  );
};

export default AppLayout;

const StyledAppLayout = styled.section`
  padding-top: 44px;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;
