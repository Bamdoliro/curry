import Column from "@/components/common/Flex/Column";
import Row from "@/components/common/Flex/Row";
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
        <div>
          <Position>{position}</Position>
          {badge && <Badge>{badge}</Badge>}
        </div>
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
  border-radius: 10px;
  cursor: pointer;
  padding: 0px 24px;
  &:hover {
    background-color: ${color.gray100};
  }
`;

const Position = styled.p`
  ${font.H4}
  color: ${color.black};
  padding: 0px 8px 8px 0px;
`;

const Skils = styled.p`
  ${font.p2}
  color: ${color.gray500};
`;

const Badge = styled.span`
  display: inline-block;
  ${font.p3}
  color: ${color.maruDefault};
  height: 26px;
  padding: 2px 12px;
  border-radius: 16px;
  background-color: rgba(49, 130, 246, 0.16);
`;
