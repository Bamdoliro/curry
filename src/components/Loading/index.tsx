import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { color } from "@/styles/color";

const Loading = () => {
  return (
    <Background>
      <StyledLoading>
        <ClipLoader color={color.maruDefault} />
      </StyledLoading>
    </Background>
  );
};

export default Loading;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;

const StyledLoading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
