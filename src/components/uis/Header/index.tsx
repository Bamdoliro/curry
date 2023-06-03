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
            Github
          </Button>
          <Button
            option="QUATERNARY"
            size="SMALL"
            onClick={() =>
              (window.location.href = "https://www.instagram.com/bamdoliro")
            }
          >
            Instagram
          </Button>
        </NavigationBar>
      </HeaderWrap>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 54px;
  border-bottom: 1px solid ${color.gray200};
  background-color: ${color.white};
  padding: 0px 100px;
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
`;
