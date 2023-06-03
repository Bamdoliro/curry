import Column from "@/components/uis/Flex/Column";
import Row from "@/components/uis/Flex/Row";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface PropsType {
  id: number;
  position: string;
  skils: string[];
  badge?: string;
}

const CareerItem = ({ id, position, skils, badge }: PropsType) => {
  const router = useRouter();

  return (
    <StyledCareerItem onClick={() => router.push(`/job/${id}`)}>
      <Column gap="24px">
        <Row gap="8px" alignItems="center">
          <Position>
            {badge === "인턴" && <EmphasisText>[곰돌이로]</EmphasisText>}
            {position}
          </Position>
          {badge && <Badge>{badge}</Badge>}
        </Row>
        <Skils>
          {skils.map((item, index) =>
            index !== skils.length - 1 ? item + " . " : item
          )}
        </Skils>
      </Column>
    </StyledCareerItem>
  );
};

export default CareerItem;

const StyledCareerItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 130px;
  border-radius: 8px;
  cursor: pointer;
  padding: 0px 24px;
  &:hover {
    background-color: ${color.gray100};
  }
`;

const Position = styled.p`
  ${font.H4}
  color: ${color.black};
`;

const Skils = styled.p`
  ${font.p2}
  color: ${color.gray500};
`;

const Badge = styled.div`
  ${font.p3}
  color: ${color.maruDefault};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 17px;
  padding: 10px 12px;
  border-radius: 16px;
  background-color: rgba(49, 130, 246, 0.16);
  @media (max-width: 1025px) {
    display: none;
  }
`;

const EmphasisText = styled.p`
  color: ${color.maruDefault};
  margin-right: 4px;
`;
