"use client";

import Banner from "@/components/domains/Banner";
import CareerItem from "@/components/domains/CareerItem";
import AppLayout from "@/layouts/AppLayout";
import styled from "styled-components";

const Home = () => {
  return (
    <AppLayout>
      <StyledMain>
        <CareerList>
          <CareerItem />
          <CareerItem />
          <CareerItem />
        </CareerList>
      </StyledMain>
    </AppLayout>
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
  width: 40%;
`;
