import { color } from "@/styles/color";
import { font } from "@/styles/font";
import Column from "../common/Flex/Column";
import styled from "styled-components";
import GatiIcon from "../common/Icon/Gati";

const NotFoundError = () => {
  return (
    <StyledNotFoundError>
      <Column gap="24px" alignItems="center" justifyContent="center">
        <GatiIcon />
        <ErrorText>404 Not Found</ErrorText>
      </Column>
    </StyledNotFoundError>
  );
};

export default NotFoundError;

const StyledNotFoundError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.white};
  width: 100vw;
  height: 100vh;
`;

const ErrorText = styled.p`
  ${font.H1}
  color: ${color.gray900};
`;
