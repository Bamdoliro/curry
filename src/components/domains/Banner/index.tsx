import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";

const Banner = () => {
  return (
    <StyledBanner>
      <BannerText>
        밤돌이로에서 입학전형 <EmphasisText>마루</EmphasisText>
        <br />
        <EmphasisText>가티</EmphasisText> 만들 사람?
      </BannerText>
    </StyledBanner>
  );
};

export default Banner;

const StyledBanner = styled.div`
  width: 100%;
  height: 180px;
  padding: 40px 180px;
  border: 1px solid ${color.gray200};
`;

const BannerText = styled.p`
  ${font.H3}
  ${color.black}
`;

const EmphasisText = styled.p`
  color: ${color.maruDefault};
`;
