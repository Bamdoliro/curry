import Column from "@/components/uis/Flex/Column";
import Row from "@/components/uis/Flex/Row";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";

const CareerItem = () => {
  return (
    <StyledCareerItem>
      <Column gap="16px">
        <Row gap="8px" alignItems="center">
          <Title>Backend Developer</Title>
          <Badge>인턴</Badge>
        </Row>
        <Skils>HTML . CSS . Javascript</Skils>
      </Column>
    </StyledCareerItem>
  );
};

export default CareerItem;

const StyledCareerItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 110px;
  border-radius: 8px;
  cursor: pointer;
  padding: 0px 24px;
  &:hover {
    background-color: ${color.gray100};
  }
`;

const Title = styled.p`
  ${font.H4}
  color: ${color.black};
`;

const Skils = styled.p`
  ${font.p2}
  color: ${color.gray500};
`;

const Badge = styled.div`
  ${font.p3}
  display: flex;
  align-items: center;
  justify-content: center;
  height: 17px;
  padding: 10px 12px;
  border-radius: 16px;
  background-color: rgba(49, 130, 246, 0.16);
  color: ${color.maruDefault};
`;
