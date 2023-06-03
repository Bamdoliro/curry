"use client";

import CareerItem from "@/components/domains/CareerItem";
import CarrerListData from "@/content/careers/careers.json";
import styled from "styled-components";
import MainLayout from "@/layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <StyledMain>
        <CareerList>
          {CarrerListData.map((item) => (
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

export default Home;

const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const CareerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 50%;
`;
