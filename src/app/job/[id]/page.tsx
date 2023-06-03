"use client";

import SupportItem from "@/components/domains/SupportItem";
import Button from "@/components/uis/Button";
import AppLayout from "@/layouts/AppLayout";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import { useParams } from "next/navigation";
import styled from "styled-components";

const JobDetail = () => {
  const { id } = useParams();
  return (
    <AppLayout>
      <StyledJobDetail>
        <ContentBox>
          <Title>Frontend Developer</Title>
          <Contents>asds</Contents>
        </ContentBox>
        <SideBar>
          <JobSupportBox>
            <JobInfoBox>
              <SupportItem title="직군" content="프론트엔드 개발자" />
              <SupportItem title="학력" content="초등학교 졸업" />
              <SupportItem title="고용형태" content="인턴" />
              <SupportItem title="근무지" content="베르 8실" />
            </JobInfoBox>
            <Button size="LARGE" width="100%">
              지원하기
            </Button>
          </JobSupportBox>
        </SideBar>
      </StyledJobDetail>
    </AppLayout>
  );
};

export default JobDetail;

const StyledJobDetail = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  height: 100%;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 60%;
  height: 100%;
`;

const Title = styled.p`
  ${font.H1}
  color: ${color.black};
`;

const Contents = styled.p`
  ${font.p3}
  color: ${color.black};
`;

const SideBar = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 320px;
`;

const JobSupportBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: sticky;
  top: 100px;
  width: 100%;
`;

const JobInfoBox = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid ${color.gray200};
  border-radius: 8px;
  padding: 24px;
`;
