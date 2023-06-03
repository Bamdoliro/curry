import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";

interface PropsType {
  title: string;
  content: string;
}

const SupportItem = ({ title, content }: PropsType) => {
  return (
    <StyledSupoortItem>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </StyledSupoortItem>
  );
};

export default SupportItem;

const StyledSupoortItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${color.gray200};
`;

const Title = styled.p`
  ${font.p3}
  color: ${color.gray600};
  width: 30%;
`;

const Content = styled.p`
  ${font.p3}
  color: ${color.black};
  width: 70%;
`;
