"use client";

import CareerItem from "@/components/domains/CareerItem";
import CAREER_LIST_DATA from "@/data/CareerListData";
import styled from "styled-components";
import MainLayout from "@/layouts/MainLayout";

const Main = () => {
  return (
    <MainLayout>
      <StyledMain>
        <CareerList>
          {CAREER_LIST_DATA.map((item) => (
            <CareerItem
              key={item.position}
              id={item.id}
              position={item.position}
              skils={item.skils}
              badge={item.bedge}
            />
          ))}
        </CareerList>
      </StyledMain>
    </MainLayout>
  );
};

export default Main;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;

  @media (max-width: 1025px) {
    width: 100%;
  }
`;

const CareerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;
