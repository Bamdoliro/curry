import { color } from "@/styles/color";
import styled from "styled-components";
import Button from "../Button";
import LogoIcon from "../Icon/Logo";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrap>
        <LogoIcon />
        <NavigationBar>
          <Button
            option="QUATERNARY"
            size="SMALL"
            onClick={() =>
              (window.location.href = "https://github.com/Bamdoliro")
            }
          >
            깃허브
          </Button>
          <Button
            option="QUATERNARY"
            size="SMALL"
            onClick={() =>
              (window.location.href = "https://www.instagram.com/bamdoliro")
            }
          >
            인스타그램
          </Button>
        </NavigationBar>
      </HeaderWrap>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  z-index: 1;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 54px;
  border-bottom: 1px solid ${color.gray200};
  background-color: ${color.white};
  padding: 0px 100px;
  @media (max-width: 1025px) {
    padding: 0px 24px;
  }
`;

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 100%;
  @media (max-width: 1025px) {
    display: none;
  }
`;
