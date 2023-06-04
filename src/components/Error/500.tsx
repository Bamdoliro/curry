import { color } from "@/styles/color";
import { font } from "@/styles/font";
import GatiIcon from "../common/Icon/Gati";
import styled from "styled-components";
import Column from "../common/Flex/Column";

const ServerError = () => {
  return (
    <StyledServerError>
      <Column gap="24px" alignItems="center">
        <GatiIcon />
        <ErrorText>500 Server Error</ErrorText>
      </Column>
    </StyledServerError>
  );
};

export default ServerError;

const StyledServerError = styled.div`
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
