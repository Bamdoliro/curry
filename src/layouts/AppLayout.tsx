import Column from "@/components/common/Flex/Column";
import Header from "@/components/common/Header";
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
      <StyledAppLayout>{children}</StyledAppLayout>
    </>
  );
};

export default AppLayout;

const StyledAppLayout = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 150vh;
  background-color: ${color.white};
`;
